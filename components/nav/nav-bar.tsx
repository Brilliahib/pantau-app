import Link from "next/link";
import NavItems from "@/lib/constants";
import NavLink from "./nav-link";
import NavDrop from "./nav-drop";
import Button from "../button/button";
import { signOut, useSession } from "next-auth/react";

const Navbar = () => {
  const { data: session, status }: { data: any; status: string } = useSession();
  return (
    <header className="pad-x sticky top-0 z-40 flex w-full items-center justify-between border-b bg-background py-4">
      <Link href="/" className="flex items-center">
        <h1 className="text-xl font-bold">Pantau</h1>
      </Link>

      <ul className="flex items-center gap-x-8">
        {NavItems.map((item, index) => (
          <li key={index} className="hidden sm:block">
            <NavLink href={item.href} name={item.name} />
          </li>
        ))}
        <li className="flex items-center md:hidden inline">
          <NavDrop />
        </li>
      </ul>
      <ul className="flex items-center gap-x-8">
        <li className="flex items-center">
          {status === "authenticated" ? (
            <div className="flex gap-x-4 items-center">
              <h1 className="text-sm text-gray-600 font-semibold">
                {session?.user?.fullname}
              </h1>
              <button
                className="anim flex items-center rounded-sm border px-6 py-2 font-bold bg-[#1c6758] text-white hover:bg-[#1c6758]/90"
                onClick={() => signOut()}
              >
                Log Out
              </button>
            </div>
          ) : (
            <Link href="/login">
              <Button className="font-bold justify-center text-sm">
                Login
              </Button>
            </Link>
          )}
        </li>
      </ul>
    </header>
  );
};

export default Navbar;
