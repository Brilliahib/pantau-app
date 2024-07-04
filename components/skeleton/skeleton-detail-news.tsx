import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonDetailNews() {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-[400px] w-full rounded-xl" />
      <div className="space-y-2 flex flex-col justify-center">
        <Skeleton className="h-8 w-full" />
        <Skeleton className="h-8 w-full" />
      </div>
    </div>
  );
}
