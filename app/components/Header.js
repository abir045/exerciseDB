import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex justify-center items-center space-x-5 bg-[#0047ab] p-4  border-b-[5px] border-white">
      <div className="container ">
        <div className="logo space-x-5 ">
          <Link href="/"> Exercises DB </Link>
          <Link href="/about/team"> About </Link>
          <Link href="/exercises/all"> Exercises </Link>
          <Link href="/muscles/all"> List of Target Muscles </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
