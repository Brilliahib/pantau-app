import { ReactNode } from "react";

interface IconsBadgeProps {
  children: ReactNode;
}

export function IconsBadge({ children }: IconsBadgeProps) {
  return (
    <>
      <div className="p-4 bg-[#1c6758] rounded-xl text-white w-fit flex">
        {children}
      </div>
    </>
  );
}
