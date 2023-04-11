import React from "react";
import Link from "next/link";

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

const MusclesPage = async () => {
  const muscles = await fetchTargetMuscles();

  return (
    <div className="flex flex-col justify-center items-center my-10 space-y-10">
      {muscles.map((muscle) => (
        <ul>
          <li key={muscle.id}>
            <Link href={`/muscles/all/${muscle}`}>
              <p>{muscle}</p>
            </Link>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default MusclesPage;
