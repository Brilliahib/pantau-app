"use client";
import AddPlantPage from "@/components/dialog/add-plant";
import Navbar from "@/components/nav/nav-bar";
import { SkeletonCard } from "@/components/skeleton/skeleton-card";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Plant {
  id: string;
  name: string;
  tinggi: number;
  monitor: string[];
}

const PantauPage = () => {
  const [plants, setPlants] = useState<Plant[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/pantau`)
      .then((res) => res.json())
      .then((response) => {
        if (response.plants) {
          setPlants(response.plants);
        } else {
          console.error("No plants data in response:", response);
        }
      })
      .catch((error) => console.error("Error fetching plants:", error))
      .finally(() => setLoading(false));
  }, []);

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
        <div className="grid md:grid-cols-3 md:gap-x-4 md:space-y-0 space-y-4">
          {loading ? (
            <div>
              <SkeletonCard />
            </div>
          ) : plants.length > 0 ? (
            plants.map((plant) => (
              <Link href={`/dashboard/pantau/${plant.id}`} key={plant.id}>
                <Card>
                  <CardContent className="p-4 space-y-1">
                    <h1 className="text-md font-bold">{plant.name}</h1>
                    <p className="text-sm font-medium ">{plant.monitor}</p>
                    <p className="text-sm text-muted-foreground">
                      {plant.tinggi} cm
                    </p>
                  </CardContent>
                </Card>
              </Link>
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
