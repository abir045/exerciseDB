import Link from "next/link";
import { BiBody, BiTargetLock } from "react-icons/bi";
import { AiOutlineTool } from "react-icons/ai";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.API_KEY,
    "X-RapidAPI-Host": process.env.API_HOST,
  },
};

async function fetchWorkout(id) {
  const response = await fetch(
    `https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`,
    options
  );

  const workout = await response.json();

  //console.log(workout);

  return workout;
}

const Workout = async ({ id }) => {
  const workout = await fetchWorkout(id);

  //   console.log(workout);

  return (
    <>
      <div className="flex flex-col w-full">
        <h2 className="text-3xl font-bold my-5 capitalize">{workout.name}</h2>
        <img src={workout.gifUrl} alt={workout.name} className="w-[400px]" />

        <div className="flex justify-between mt-5 font-medium capitalize">
          <span>Body Part Involved</span>
          <p className=""> {workout.bodyPart}</p>
        </div>

        <div className="flex justify-between mt-5 font-medium capitalize">
          <span>Equipment Needed</span>
          <p> {workout.equipment}</p>
        </div>

        <div className="flex justify-between mt-5 font-medium capitalize">
          <span>target muscle</span>
          <p>{workout.target}</p>
        </div>
      </div>
    </>
  );
};

export default Workout;
