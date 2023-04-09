import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex justify-center items-center bg-[#0047ab] p-4  border-b-[5px] border-white">
      <div className="container ">
        <div className="logo px-15">
          <Link href="/"> Exercises DB </Link>
          <Link href="/about/team"> About </Link>
          <Link href="/exercises/all"> Exercises </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
