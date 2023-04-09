import React from "react";
import Link from "next/link";
import { FaStar, FaCodeBranch, FaEye } from "react-icons/fa";
import { BiBody, BiTargetLock } from "react-icons/bi";
import { AiOutlineTool } from "react-icons/ai";

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
    "https://exercisedb.p.rapidapi.com/exercises?limit=10",
    options
  );

  const exercises = await response.json();

  return exercises;
}

const ExercisesPage = async () => {
  const workouts = await fetchExercises();

  console.log(workouts);

  return (
    <div className="flex flex-col items-center gap-10 w-full my-auto">
      <h1>Exercises page</h1>
      <h2>Exercise List</h2>
      <ul className="flex flex-col space-y-5 w-full">
        {workouts.map((workout) => (
          <li className="flex  text-black list-none mx-auto" key={workout.name}>
            <Link href={`/exercies/all/${workout.name}`}>
              <div className="flex flex-col bg-gray-100 px-6 py-4 rounded">
                <h3 className="text-xl font-bold">{workout.name}</h3>
                <img src={workout.gifUrl} alt={workout.name} />

                <div className="flex justify-between mt-5">
                  <span>
                    <BiBody />
                  </span>
                  <p> {workout.bodyPart}</p>
                </div>

                <div className="flex justify-between mt-5">
                  <span>
                    <AiOutlineTool />
                  </span>
                  <p> {workout.equipment}</p>
                </div>

                <div className="flex justify-between mt-5">
                  <span>
                    <BiTargetLock />
                  </span>
                  <p>{workout.target}</p>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExercisesPage;
