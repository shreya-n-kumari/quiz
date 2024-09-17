import React from "react";
import Slide from "./Slide";
const Home = () => {

    
  return (
    <>
      <div class="bg-gradient-to-l from-orange-300 flex px-20 h-screen space-x-6 justify-center items-center">
        <div className="w-2/5">
          <h1 className="text-5xl font-semibold pb-8">Play Quiz</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam
          </p>
        </div>
        <div>
            <img src="head-img.png" className="w-96"/>
        </div>
      </div>
      <Slide />
    </>
  );
};

export default Home;
