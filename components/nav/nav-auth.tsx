import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { signOut, useSession } from "next-auth/react";

const NavAuth = () => {
  const { data: session, status }: { data: any; status: string } = useSession();
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </PopoverTrigger>
      <PopoverContent className="w-52 mr-4 md:mr-0 md:fixed md:-right-4 flex flex-col gap-3 px-4 pb-2.5 pt-3 sm:pb-3 mt-5">
        <div className="grid gap-4">
          <div className="space-y-4">
            <div className="flex flex-col">
              <h1 className="text-sm font-semibold text-gray-800">
                {session?.user?.fullname}
              </h1>
            </div>
            <div className="flex flex-col">
              <hr />
            </div>
            <div className="flex flex-col">
              <button
                className="text-sm hover:underline text-left flex gap-x-2 items-center focus:outline-none"
                onClick={() => signOut()}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"
                  />
                </svg>{" "}
                Log out
              </button>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default NavAuth;
