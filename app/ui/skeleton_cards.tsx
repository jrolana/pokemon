import { Skeleton } from "@/components/ui/skeleton";

export default function SkeletonCardList() {
  return (
    <div className="*:data-[slot=card]:shadow-xs @xl/main:grid-cols-3 @5xl/main:grid-cols-5 grid grid-cols-1 gap-4 py-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card">
      {[0, 1, 2, 3, 4].map((i: number) => (
        <SkeletonCard key={"skeleton" + i} />
      ))}
    </div>
  );
}

export function SkeletonCard() {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className="@container/card h-54 rounded-xl " />
      <div className="space-y-2">
        <Skeleton className="h-4 w-40" />
        <Skeleton className="h-4 w-20" />
      </div>
    </div>
  );
}
