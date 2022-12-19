import React from "react";
import { BsBoxArrowUpRight } from "react-icons/bs";
import PrimaryButton from "../../PrimaryButton/PrimaryButton";

function Banner() {
  return (
    <section className="my-12">
      <div className="container">
        <div className="min-h-[65vh] flex justify-center items-center text-center">
          <div className="text-center">
            <div className="text-center space-y-3">
              <h4 className="text-left text-2xl font-bold text-gray-200 lg:ml-3">
                Hi! I'm{" "}
                <span
                  className="text-primarySkyBlue-800 underline underline-offset-2"
                  title="Hasan Naim"
                >
                  {" "}
                  Hasan Naim
                </span>
                <span className="animate-pulse inline-block">&#128526;</span>
              </h4>
              <h1 className="text-4xl md:text-5xl lg:text-6xl text-left md:text-center text-gray-100 font-bold font-inter ">
                A Passionate Front-end <br></br> Developer
              </h1>
              <a
                rel="noreferrer"
                href="https://drive.google.com/file/d/1Xel4JxgekURyJtXEUk3m3jJMqUCwW48h/view?usp=sharing"
                target={"_blank"}
                className="inline-block "
              >
                <PrimaryButton
                  text={
                    <span className="flex gap-2 items-center font-medium">
                      <span>Get Resume</span>
                      <BsBoxArrowUpRight className="font-medium" />
                    </span>
                  }
                  styles={"rounded-[39px]"}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
