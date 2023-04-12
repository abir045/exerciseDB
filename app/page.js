import React from "react";
import Link from "next/link";
import ExercisesPage from "./exercises/all/page";

const HomePage = () => {
  return (
    <div>
      <ul>
        <li>
          <Link href="/">
            <ExercisesPage />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default HomePage;
