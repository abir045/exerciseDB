import React from "react";
import Activities from "./Activities";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.API_KEY,
    "X-RapidAPI-Host": process.env.API_HOST,
  },
};

async function fetchWorkoutsByBodyPart(bodyPart) {
  const response = await fetch(
    `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
    options
  );

  //wait 1 sec
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const workouts = await response.json();

  return workouts;
}

const BodyPartWorkouts = async ({ bodyPart }) => {
  const workouts = await fetchWorkoutsByBodyPart(bodyPart);

  return (
    <div>
      <Activities workouts={workouts} />
    </div>
  );
};

export default BodyPartWorkouts;
