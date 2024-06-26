"use client";
import CardMonitoring from "@/components/card/card-monitoring";
import Navbar from "@/components/nav/nav-bar";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function DashboardPage() {
  const { data: session, status }: { data: any; status: string } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [router, status]);
  return (
    <>
      <Navbar />
      <div className="pad-x pt-4 space-y-8">
        <div className="space-y-1">
          <h1 className="md:text-2xl font-bold text-xl">Dashboard</h1>
          <p className="md:text-md text-muted-foreground text-sm">
            Hello, {session?.user?.fullname}!
          </p>
        </div>
        <div>
          <CardMonitoring />
        </div>
      </div>
    </>
  );
}
