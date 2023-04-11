import React from "react";
import Link from "next/link";
import ExercisesPage from "./exercises/all/page";

const HomePage = () => {
  return (
    <div>
      {/* <h1>Welcome </h1> */}
      <ul>
        <li>
          <Link href="/">
            <ExercisesPage />
          </Link>
        </li>
        {/* <li>
          <Link href="/about">About</Link>{" "}
        </li>
        <li>
          <Link href="/about/team">Team</Link>{" "}
        </li> */}
      </ul>
    </div>
  );
};

export default HomePage;
