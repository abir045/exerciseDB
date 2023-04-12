import React from "react";
import Link from "next/link";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.API_KEY,
    "X-RapidAPI-Host": process.env.API_HOST,
  },
};

async function fecthBodyParts() {
  const response = await fetch(
    "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
    options
  );

  const bodyParts = await response.json();

  return bodyParts;
}

const BodyPartsPage = async () => {
  const bodyParts = await fecthBodyParts();
  console.log(bodyParts);

  return (
    <div className="flex flex-col justify-center items-center my-10 space-y-10">
      {bodyParts.map((bodyPart) => (
        <Link href={`/bodyparts/all/${bodyPart}`}>
          <div
            key={bodyPart}
            className="bg-stone-100 rounded-lg w-[350px] h-[100px] hover:translate-x-4  flex justify-center items-center my-5"
          >
            <p className="hover:scale-110 text-[20px] hover:ease-in-out text-black capitalize font-bold">
              {bodyPart}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default BodyPartsPage;
