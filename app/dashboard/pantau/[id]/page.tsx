"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { SkeletonCard } from "@/components/skeleton/skeleton-card";
import Navbar from "@/components/nav/nav-bar";

interface Plant {
  id: string;
  name: string;
  monitor: string[]; // Defined as an array of strings
  tinggi: number;
}

const PlantDetail = () => {
  const params = useParams();
  const id = params?.id;

  const [plant, setPlant] = useState<Plant | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) {
      setError("Plant ID is missing.");
      setLoading(false);
      return;
    }

    console.log("Fetching plant data for ID:", id);

    fetch(`/api/pantau/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Network response was not ok: ${res.statusText}`);
        }
        return res.json();
      })
      .then((response) => {
        console.log("Response from API:", response);
        if (response.status === 200 && response.data) {
          setPlant(response.data);
        } else {
          setError(response.message || "No plant data found.");
          console.error("No plant data in response:", response);
        }
      })
      .catch((error) => {
        setError(error.message);
        console.error("Error fetching plant:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="pad-x pt-4">
        <SkeletonCard />
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!plant) {
    return <div>No plant data available.</div>;
  }

  return (
    <>
      <Navbar />
      <div className="pad-x pt-4">
        <h1 className="text-3xl font-bold">{plant.name}</h1>
        <div>
          <ul>
            {plant.monitor.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <p>Tinggi: {plant.tinggi}</p>
      </div>
    </>
  );
};

export default PlantDetail;
