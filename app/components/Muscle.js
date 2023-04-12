import React from "react";
import WorkoutsByBodyParts from "./WorkoutsByBodyParts";
import { Suspense } from "react";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.API_KEY,
    "X-RapidAPI-Host": process.env.API_HOST,
  },
};

async function fetchWorkoutsByMuscle(muscle) {
  const response = await fetch(
    `https://exercisedb.p.rapidapi.com/exercises/target/${muscle}`,
    options
  );

  // make  a set timeout wait 1 sec

  await new Promise((resolve) => setTimeout(resolve, 1000));

  const workout = await response.json();

  //console.log(workout);

  return workout;
}

const Workouts = async ({ muscle }) => {
  const workouts = await fetchWorkoutsByMuscle(muscle);

  return (
    // <Suspense fallback={<div>loading...</div>}>
    <div className="flex flex-col w-full">
      <WorkoutsByBodyParts workouts={workouts} />
    </div>
    // </Suspense>
  );
};

export default Workouts;
