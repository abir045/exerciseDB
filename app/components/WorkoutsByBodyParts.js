"use client";

import React from "react";
import { sliceStartAtom, sliceEndAtom, currentPageAtom } from "../storage/atom";
import { useAtom } from "jotai";

const WorkoutsByBodyParts = ({ workouts }) => {
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
      <div>
        {workouts.slice(currentSliceStart, currentSliceEnd).map((workout) => (
          <div key={workout.id}>
            <h2 className="text-3xl font-bold my-5 capitalize">
              {workout.name}
            </h2>
            <img
              src={workout.gifUrl}
              alt={workout.name}
              className="w-[400px]"
            />

            <div className="flex justify-between mt-5 font-medium capitalize">
              <span>Body Part Involved</span>
              <p className=""> {workout.bodyPart}</p>
            </div>

            <div className="flex justify-between mt-5 font-medium capitalize">
              <span>Equipment Needed</span>
              <p> {workout.equipment}</p>
            </div>

            <div className="flex justify-between mt-5 font-medium capitalize">
              <span>target muscle</span>
              <p>{workout.target}</p>
            </div>
          </div>
        ))}
      </div>

      {currentSliceStart >= 10 && (
        <button
          className="bg-white text-black px-6 py-4 rounded-lg font-semibold capitalize my-5"
          onClick={previousPage}
        >
          previous page
        </button>
      )}
      {currentSliceEnd < workouts.length && (
        <button
          className="bg-white text-black px-6 py-4 rounded-lg font-semibold capitalize my-5"
          onClick={nextPage}
        >
          next page
        </button>
      )}
    </>
  );
};

export default WorkoutsByBodyParts;
