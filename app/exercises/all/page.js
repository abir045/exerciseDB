import React from "react";
import Link from "next/link";

import Exercises from "@/app/components/Exercises";

require("dotenv").config;

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.API_KEY,
    "X-RapidAPI-Host": process.env.API_HOST,
  },
};

async function fetchExercises() {
  const response = await fetch(
    "https://exercisedb.p.rapidapi.com/exercises",
    options
  );

  // make  a set timeout wait 1 sec

  await new Promise((resolve) => setTimeout(resolve, 1000));

  const exercises = await response.json();

  return exercises;
}

const ExercisesPage = async () => {
  const workouts = await fetchExercises();

  console.log(workouts);

  return (
    <div className="flex flex-col items-center gap-10 w-full my-auto">
      <h1 className="text-3xl font-bold uppercase">List of all exercises</h1>

      <Exercises workouts={workouts} />
    </div>
  );
};

export default ExercisesPage;
