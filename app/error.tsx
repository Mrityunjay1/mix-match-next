"use client";
import { Card, CardHeader } from "@nextui-org/react";
import { BiSolidError } from "react-icons/bi";

// Error components must be Client Components

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex items-center justify-center vertical-center">
      <Card className="w-2/5">
        <CardHeader className="flex flex-col items-center justify-center">
          <div className="flex flex-col gap-2 items-center text-red-400">
            <BiSolidError size={30} />
            <h1 className="text-3xl font-semibold">Error</h1>
          </div>
        </CardHeader>
      </Card>
      <h2>Something went wrong!</h2>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  );
}
