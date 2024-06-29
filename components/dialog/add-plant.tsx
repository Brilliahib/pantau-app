import React, { useState, FormEvent } from "react";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import app from "@/lib/firebase/init";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SelectMonitor } from "@/components/select/select-monitor";
import { AlertDescription } from "../ui/alert";
import { AlertDestructive } from "../alert/alert-error";
import { AlertSucces } from "../alert/alert-success";

const firestore = getFirestore(app);

export async function addPlant(data: {
  name: string;
  tinggi: string;
  monitor: string;
}) {
  if (!data.name || !data.tinggi || !data.monitor) {
    return {
      status: false,
      statusCode: 400,
      message: "All fields are required",
    };
  }

  try {
    await addDoc(collection(firestore, "plants"), data);
    return {
      status: true,
      statusCode: 200,
      message: "Plant added successfully",
    };
  } catch (error) {
    console.error("Error adding plant: ", error);
    return { status: false, statusCode: 500, message: "Failed to add plant" };
  }
}

const AddPlantPage = () => {
  const [name, setName] = useState<string>("");
  const [tinggi, setTinggi] = useState<string>("");
  const [monitor, setMonitor] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage(null);

    try {
      const plantData = { name, tinggi, monitor };
      const result = await addPlant(plantData);
      if (result.status) {
        setName("");
        setTinggi("");
        setMonitor("");
        setMessage("Plant added successfully!");
      } else {
        setMessage(result.message);
      }
    } catch (error) {
      console.error("Error adding plant:", error);
      alert("Failed to add plant. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Add Plant</Button>
      </DialogTrigger>
      <DialogContent className="md:max-w-[700px] max-w-[400px]">
        <DialogHeader>
          <DialogTitle>New Plant</DialogTitle>
          <DialogDescription>
            Add a new plant here. Click save when you&#39;re done.
          </DialogDescription>
        </DialogHeader>
        {message && <AlertSucces>{message}</AlertSucces>}
        <form onSubmit={handleSubmit} className="grid gap-4 py-4">
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="name">Name</Label>
            <Input
              type="text"
              id="name"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="tinggi">Tinggi Tanaman</Label>
            <Input
              type="text"
              id="tinggi"
              placeholder="Tinggi"
              value={tinggi}
              onChange={(e) => setTinggi(e.target.value)}
              required
            />
          </div>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="monitor">Monitor</Label>
            <Input
              value={monitor}
              onChange={(e) => setMonitor(e.target.value)}
              required
            />
          </div>
          <DialogFooter>
            <Button disabled={isLoading} type="submit">
              {isLoading ? "Loading..." : "Add Plant"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddPlantPage;
