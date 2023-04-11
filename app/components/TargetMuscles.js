import React from "react";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.API_KEY,
    "X-RapidAPI-Host": process.env.API_HOST,
  },
};

async function fetchTargetMuscles() {
  const response = await fetch(
    "https://exercisedb.p.rapidapi.com/exercises/targetList",
    options
  );

  const muscles = await response.json();

  return muscles;
}

const TargetMuscles = async () => {
  const target = await fetchTargetMuscles();

  console.log(target);

  return <div>target</div>;
};

export default TargetMuscles;
