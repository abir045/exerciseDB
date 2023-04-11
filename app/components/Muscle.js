import React from "react";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.API_KEY,
    "X-RapidAPI-Host": process.env.API_HOST,
  },
};

async function fetchWorkoutsByMuscle(muscle) {
  const response = await fetch(
    `https://exercisedb.p.rapidapi.com/exercises/target/${muscle}`,
    options
  );

  const workout = await response.json();

  //console.log(workout);

  return workout;
}

const Workouts = async ({ muscle }) => {
  const workouts = await fetchWorkoutsByMuscle(muscle);

  return (
    <div className="flex flex-col w-full">
      {workouts.slice(0, 10).map((workout) => (
        <div key={workout.id}>
          <h2 className="text-3xl font-bold my-5 capitalize">{workout.name}</h2>
          <img src={workout.gifUrl} alt={workout.name} className="w-[400px]" />

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
  );
};

export default Workouts;
