import React from "react";
import Profile from "../components/Profile";
import Projects from "../components/Projects";

const Home = () => {
  return (
    <>
      <Profile />
      <Projects />
      <div className="flex flex-col items-center justify-center py-8">
        <h1 className="text-3xl font-semibold text-black">Ayo Berkenalan</h1>
        <p className="text-md font-normal text-gray-500 text-center px-3">
          Temukan Saya Disini
        </p>
      </div>
    </>
  );
};

export default Home;
