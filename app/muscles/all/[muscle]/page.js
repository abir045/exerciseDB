import { Suspense } from "react";

import Workouts from "@/app/components/Muscle";

const page = ({ params: { muscle } }) => {
  return (
    <div>
      <h1>List of Workouts by Target Muscle</h1>

      <Suspense fallback={<div>loading...</div>}>
        <Workouts muscle={muscle} />
      </Suspense>
    </div>
  );
};

export default page;
