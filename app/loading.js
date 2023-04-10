import React from "react";

const LoadingPage = () => {
  return (
    <div className="flex justify-center items-center h-[100vh] border-[#000] opacity-10 ">
      <div className="border-2 rounded-full w-[40px] h-[40px] animate-spin  "></div>
    </div>
  );
};

export default LoadingPage;
