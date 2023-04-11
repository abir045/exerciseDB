import React, { Suspense } from "react";
import Workout from "@/app/components/Workout";
import Link from "next/link";

const WorkoutPage = ({ params: { id } }) => {
  return (
    <div className="flex flex-col border-1 border-[#ccc] p-4 m-4 rounded-[4px]">
      <Link href="/exercises/all">
        <button className="bg-white text-black px-6 py-4 rounded font-semibold">
          Back to all Exercises
        </button>
      </Link>
      {/* single workout */}

      <Suspense fallback={<div>loading...</div>}>
        <Workout id={id} />
      </Suspense>
    </div>
  );
};

export default WorkoutPage;
