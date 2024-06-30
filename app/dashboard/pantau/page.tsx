"use client";
import { AlertDelete } from "@/components/alert/alert-delete";
import AddPlantPage from "@/components/dialog/add-plant";
import Navbar from "@/components/nav/nav-bar";
import { SkeletonCard } from "@/components/skeleton/skeleton-card";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import app from "@/lib/firebase/init";
import { deleteDoc, doc, getFirestore } from "firebase/firestore";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Plant {
  id: string;
  name: string;
  tinggi: number;
  monitor: string[];
}

const firestore = getFirestore(app);

export async function deletePlant(id: string) {
  if (!id) {
    return {
      status: false,
      statusCode: 400,
      message: "Plant ID is required",
    };
  }

  try {
    await deleteDoc(doc(firestore, "plants", id));
    return {
      status: true,
      statusCode: 200,
      message: "Plant deleted successfully!",
    };
  } catch (error) {
    return {
      status: false,
      statusCode: 500,
      message: "Failed to delete plant",
    };
  }
}

const PantauPage = () => {
  const [plants, setPlants] = useState<Plant[]>([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState<string | null>(null);
  const [deleteId, setDeleteId] = useState<string | null>(null);

  useEffect(() => {
    fetchPlants();
  }, []);

  const fetchPlants = async () => {
    setLoading(true);

    try {
      const response = await fetch(`/api/pantau`);
      const data = await response.json();
      if (data.plants) {
        setPlants(data.plants);
      } else {
        console.error("No plants data in response:", data);
      }
    } catch (error) {
      console.error("Error fetching plants:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    const result = await deletePlant(id);

    setMessage(result.message);
    if (result.status) {
      setPlants(plants.filter((plant) => plant.id !== id));
    }
    setDeleteId(null); // Reset deleteId after deletion
  };

  return (
    <>
      <div className="pad-x">
        <div className="py-4 space-y-4 md:space-y-0 md:flex md:justify-between md:items-center">
          <div>
            <h1 className="md:text-2xl font-bold text-xl">Pantau</h1>
            <p className="md:text-md text-muted-foreground text-sm">
              Monitor and track plant growth and soil conditions.
            </p>
          </div>
          <div>
            <AddPlantPage />
          </div>
        </div>
        <div className="grid md:grid-cols-3 md:gap-4 md:space-y-0 space-y-4">
          {loading ? (
            <div>
              <SkeletonCard />
            </div>
          ) : plants.length > 0 ? (
            plants.map((plant) => (
              <div key={plant.id}>
                <Card>
                  <CardContent className="p-4 space-y-1">
                    <div className="flex justify-between">
                      <Link href={`/dashboard/pantau/${plant.id}`}>
                        <div>
                          <h1 className="text-md font-bold">{plant.name}</h1>
                          <p className="text-sm font-medium ">
                            {plant.monitor}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {plant.tinggi} cm
                          </p>
                        </div>
                      </Link>
                      <div>
                        <AlertDelete
                          plantId={plant.id}
                          onConfirmDelete={handleDelete}
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))
          ) : (
            <p>No plants available.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default PantauPage;
