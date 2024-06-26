"use client";
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
      <div className="pad-x">
        <div>Hello, {session?.user?.fullname}!</div>
      </div>
    </>
  );
}
