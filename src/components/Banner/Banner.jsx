import React from "react";
import PrimaryButton from "../PrimaryButton/PrimaryButton";

function Banner() {
  return (
    <div>
      <div className="container">
        <div className="min-h-[80vh] flex justify-center items-center text-center">
          <div className="text-center">
            <div className="text-center space-y-3">
              <h4 className="text-left text-2xl font-bold text-gray-200 lg:ml-3">
                Hi! I'm{" "}
                <span className="text-primarySkyBlue-800"> Hasan Naim</span>
              </h4>
              <h1 className="text-6xl text-left lg:text-center text-gray-100 font-bold font-inter">
                A Front-end Developer
              </h1>
              <a
                rel="noreferrer"
                href="https://drive.google.com/file/d/1Xel4JxgekURyJtXEUk3m3jJMqUCwW48h/view?usp=sharing"
                target={"_blank"}
                className="inline-block"
              >
                <PrimaryButton text={"Get Resume"} styles={"rounded-[39px]"} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
