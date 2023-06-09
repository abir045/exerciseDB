import { Suspense } from "react";
import Link from "next/link";

import Workouts from "@/app/components/Muscle";

const page = ({ params: { muscle } }) => {
  return (
    <div className="flex flex-col space-y-5">
      <Link className="my-5" href="/muscles/all">
        <button className="bg-white text-black px-6 py-4 rounded font-semibold text-[20px]">
          Back to all Muscle Groups
        </button>
      </Link>

      <h1 className="text-2xl font-semibold">
        List of Workouts by Target Muscle
      </h1>

      <Suspense fallback={<div>loading...</div>}>
        <Workouts muscle={muscle} />
      </Suspense>
    </div>
  );
};

export default page;
