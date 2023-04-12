import React from "react";
import Link from "next/link";
import Image from "next/image";

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

  // console.log(workouts);

  return (
    <div className="flex flex-col items-center  w-full my-auto">
      <div className="relative">
        <Image
          src="/hero.jpg"
          className="object-cover md:flex hidden"
          alt="cover"
          width="1920"
          height="1080"
        />
        <Image
          src="/mbHero.jpg"
          akt="mb-cover"
          width="400"
          height="600"
          className="flex sm:hidden"
        />

        <div className="absolute top-10 ">
          <h1 className="font-bold text-[20px] leading-[24px] md:text-[64px] md:leading-[85px] text-center text-white">
            REACH YOUR LIMITS AND GET TO THE NEXT LEVEL
          </h1>

          <p className="md:text-[18px] text-sm font-medium md:leading-[27px]  text-white mt-[45%] md:mt-[15%] text-center mx-[10%]">
            Welcome to Exercise DB. We have a collection of exercises with
            demonstrations. Check out navigation for category wise workouts.
            Level up you workout plan and knowledge of workouts for your whole
            body
          </p>
        </div>
      </div>

      <h1 className="text-3xl font-bold uppercase my-10">
        List of all exercises
      </h1>

      <Exercises workouts={workouts} />
    </div>
  );
};

export default ExercisesPage;
