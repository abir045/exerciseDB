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

  // make  a set timeout wait 1 sec

  await new Promise((resolve) => setTimeout(resolve, 1000));

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
              <div className="bg-stone-100 rounded-lg w-[350px] h-[100px] hover:translate-x-4  flex justify-center items-center">
                <p className="hover:scale-110 text-[20px] hover:ease-in-out text-black capitalize font-bold">
                  {muscle}
                </p>
              </div>
            </Link>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default MusclesPage;
