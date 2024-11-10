import { Skeleton } from "@/components/ui/skeleton";

export default function Home() {
  return (
    <main>
      <div className="grid items-center justify-center min-h-dvh">
        <div className="flex items-center space-x-4">
          <Skeleton className="h-12 w-12 rounded-full" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[250px]" />
            <Skeleton className="h-4 w-[200px]" />
          </div>
        </div>
      </div>
    </main>
  );
}
