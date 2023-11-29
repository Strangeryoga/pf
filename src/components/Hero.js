import React from "react";

// import image
import Img from "../assets/img/banner-woman2.webp";

const Hero = () => {
  return (
    <section
      id="home"
      className="lg:h-[85vh] flex items-center bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden"
    >
      <div className="container mx-auto h-full">
        <div className="flex items-center h-full pt-12">
          {/* left */}
          <div className="flex-1 flex flex-col items-center lg:items-start">
            <p className="text-cyan-500 mb-[20px] pt-6">Hey, I'm Tejas 👋</p>
            <h1 className="text-4xl leading-[44px] md:text-5xl md:leading-tight lg:text-5xl lg:heading-[1.2] font-bold md:tracking-[-2px]">
              I Build & Design <br /> Websites
            </h1>
            <p className="pt-4 pb-8 md:text-1xl md:pb-12 max-w-[500px] text-lg text-center lg:text-left">
            Eager to contribute innovative solutions and collaborate in a dynamic team environment to drive digital excellence and achieve client objectives.
            </p>
            <button className="btn btn-md bg-cyan-500 hover:bg-cyan-700 md:btn-lg transition-all">
              Work with Me
            </button>
          </div>
          {/* right */}
          <div className="hidden lg:flex flex-1 justify-end items-end h-full">
            <img className="h-3/4" src={Img} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
