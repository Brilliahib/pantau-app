"use client";

import { AlertDestructive } from "@/components/alert/alert-error";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function RegisterPage() {
  const { push } = useRouter();
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);
    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fullname: e.target.fullname.value,
        email: e.target.email.value,
        password: e.target.password.value,
      }),
    });

    const result = await res.json();

    if (res.status === 200) {
      e.target.reset();
      setIsLoading(false);
      push("/login");
    } else {
      setError(result.message || "Registration failed");
      setIsLoading(false);
    }
  };

  return (
    <section className="md:flex block min-h-screen">
      <div className="md:w-5/12 md:h-full">
        <Image
          src="https://images.unsplash.com/photo-1555037015-1498966bcd7c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="md:h-screen h-[40vh] w-full object-cover"
          width={1887}
          height={2821}
          loading="lazy"
        />
      </div>
      <div className="md:w-7/12 md:h-screen flex justify-center items-center pt-24 pad-x">
        <div className="w-full md:max-w-md" onSubmit={(e) => handleSubmit(e)}>
          <form action="" className="space-y-8 w-full">
            <h1 className="text-center text-black md:text-3xl text-xl font-bold">
              Sign Up to Pantau
            </h1>
            <div>
              {error !== "" && <AlertDestructive>{error}</AlertDestructive>}
            </div>
            <div>
              <label
                htmlFor="fullname"
                className="text-sm font-medium text-gray-600 block mb-2"
              >
                Fullname
              </label>
              <input
                type="text"
                name="fullname"
                id="fullname"
                className="border-1 anim peer block w-full appearance-none rounded-md border px-3 py-2 text-gray-900 autofill:bg-transparent focus:border-[#1c6758] focus:outline-none focus:ring-0"
                placeholder=""
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="text-sm font-medium text-gray-600 block mb-2"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="border-1 anim peer block w-full appearance-none rounded-md border px-3 py-2 text-gray-900 autofill:bg-transparent focus:border-[#1c6758] focus:outline-none focus:ring-0"
                placeholder=""
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="text-sm font-medium text-gray-600 block mb-2"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                className="border-1 anim peer block w-full appearance-none rounded-md border px-3 py-2 text-gray-900 autofill:bg-transparent focus:border-[#1c6758] focus:outline-none focus:ring-0"
                placeholder=""
                required
              />
            </div>
            <button
              disabled={isLoading}
              type="submit"
              className="w-full text-white bg-[#1c6758] py-2 rounded-md font-semibold"
            >
              {isLoading ? "Loading..." : "Sign Up"}
            </button>
            <p className="text-sm text-gray-600 font-medium text-center">
              Already have an account?{" "}
              <a href="/login" className="underline">
                Sign in
              </a>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
