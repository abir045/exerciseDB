"use client";

import React from "react";
import Link from "next/link";
import { BiBody, BiTargetLock } from "react-icons/bi";
import { AiOutlineTool } from "react-icons/ai";
import { sliceStartAtom, sliceEndAtom, currentPageAtom } from "../storage/atom";
import { useAtom } from "jotai";

const Exercises = ({ workouts }) => {
  // using a global state from jotai for setting our slice values
  const [currentSliceStart, setCurrentSliceStart] = useAtom(sliceStartAtom);
  const [currentSliceEnd, SetCurrentSliceEnd] = useAtom(sliceEndAtom);
  const [currentPage, setCurrentPage] = useAtom(currentPageAtom);

  const nextPage = () => {
    setCurrentSliceStart(currentSliceStart + 10);
    SetCurrentSliceEnd(currentSliceEnd + 10);
    setCurrentPage(currentPage + 1);
  };

  const previousPage = () => {
    setCurrentSliceStart(currentSliceStart - 10);
    SetCurrentSliceEnd(currentSliceEnd - 10);
    setCurrentPage(currentPage - 1);
  };

  return (
    <>
      <div className="">
        <ul className="flex flex-col space-y-5 w-full ">
          {workouts.slice(currentSliceStart, currentSliceEnd).map((workout) => (
            <li
              className="flex  text-black list-none mx-auto my-auto"
              key={workout.id}
            >
              <Link href={`/exercises/all/${workout.id}`}>
                <div className="flex flex-col bg-gray-100 px-6 py-4 rounded w-[350px] ">
                  <h3 className="text-xl font-bold text-center">
                    {workout.name}
                  </h3>

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

      {currentSliceStart >= 10 && (
        <button
          className="bg-white text-black px-6 py-4 rounded-lg font-semibold capitalize"
          onClick={previousPage}
        >
          previous page
        </button>
      )}
      {currentSliceEnd < workouts.length && (
        <button
          className="bg-white text-black px-6 py-4 rounded-lg font-semibold capitalize"
          onClick={nextPage}
        >
          next page
        </button>
      )}
    </>
  );
};

export default Exercises;
