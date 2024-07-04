"use client";
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
import { InputFile } from "../input/file-input";
import { useState } from "react";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { addDoc, collection } from "firebase/firestore";
import { db, storage } from "@/lib/firebase/init";
import { Textarea } from "../ui/textarea";

export function AddNews() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return;

    setIsLoading(true);
    setError(null);

    try {
      const storageRef = ref(storage, `images/${file.name}`);
      await uploadBytes(storageRef, file);
      const photoURL = await getDownloadURL(storageRef);

      await addDoc(collection(db, "blogs"), {
        title,
        content,
        photoURL,
        createdAt: new Date(),
      });

      setTitle("");
      setContent("");
      setFile(null);
    } catch (error) {
      console.error("Error adding document: ", error);
      setError("Failed to add news. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Add News</Button>
      </DialogTrigger>
      <DialogContent className="md:max-w-[700px] max-w-[400px]">
        <DialogHeader>
          <DialogTitle>Add News</DialogTitle>
          <DialogDescription>
            Add new news here. Click save when you&#39;re done.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="title">Title</Label>
              <Input
                type="text"
                id="title"
                placeholder="Enter title in here"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="content">Content</Label>
              <Textarea
                id="content"
                placeholder="Enter content in here"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="file">Image</Label>
              <Input type="file" id="file" onChange={handleFileChange} />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Add news</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
