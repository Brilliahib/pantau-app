"use client";
import Link from "next/link";
import NavItems from "@/lib/constants";
import NavLink from "./nav-link";
import NavDrop from "./nav-drop";
import Button from "../button/button";
import { signOut, useSession } from "next-auth/react";
import NavAuth from "./nav-auth";
import LogoPantau from "@/public/img/logo-pantau.png";
import Image from "next/image";
import SearchButton from "../dialog/search";

const Navbar = () => {
  const { data: session, status }: { data: any; status: string } = useSession();
  return (
    <header className="pad-x sticky top-0 z-40 flex w-full items-center justify-between border-b bg-background py-4">
      <Link href="/dashboard" className="flex items-center">
        <Image src={LogoPantau} alt="Pantau App" width={40} height={40} />
      </Link>

      <ul className="flex items-center gap-x-8">
        {NavItems.map((item, index) => (
          <li key={index} className="hidden sm:block">
            <NavLink href={item.href} name={item.name} />
          </li>
        ))}
      </ul>
      <ul className="flex items-center md:gap-x-8 gap-x-4">
        <li className="flex items-center cursor-pointer">
          <SearchButton />
        </li>
        <li className="flex items-center cursor-pointer">
          {status === "authenticated" ? (
            <NavAuth />
          ) : (
            <Link href="/login">
              <Button className="font-bold justify-center text-sm">
                Login
              </Button>
            </Link>
          )}
        </li>
        <li className="flex items-center md:hidden inline">
          <NavDrop />
        </li>
      </ul>
    </header>
  );
};

export default Navbar;
