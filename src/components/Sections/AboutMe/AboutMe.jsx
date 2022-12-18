import React from "react";
import HeadLine from "../../HeadLine/HeadLine";
import MyImg from "../../../assets/hasan-naim.png";

function AboutMe() {
  return (
    <section id="aboutMe">
      <div className="container">
        <HeadLine text={"About Me"} />
        <div className="flex gap-6 flex-col md:flex-row justify-center items-center">
          <div className="w-full">
            <div>
              <img src={MyImg} alt="" className="w-2/3 mx-auto" />
            </div>
          </div>
          <div className="w-full text-gray-300">
            <p className="w-2/3 text-xl font-medium">
              I am Hasan Naim. A front-end developer from Bangladesh. Learning
              and building projects. Growing myself everyday. Trying to
              establish myself as a software-enginer in the tech industry.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
