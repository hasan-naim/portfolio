import React from "react";
import { BsBoxArrowUpRight } from "react-icons/bs";
import NavbarButton from "../NavbarButton/NavbarButton";

function Navbar() {
  return (
    <header className="bg-primaryDark-800 py-3 shadow-xl z-10 sticky top-0 left-0">
      <div className="container">
        <div className="flex justify-between items-center ">
          <div>
            <h3 className="font-inter font-bold text-2xl text-gray-100">
              Hasan Naim
            </h3>
          </div>
          <div className="hidden lg:block">
            <ul className="flex gap-6 text-gray-300">
              <li>
                <a href="#home" className="hover:text-white duration-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white duration-300">
                  Projects
                </a>
              </li>
              <li>
                <a href="#aboutMe" className="hover:text-white duration-300">
                  About Me
                </a>
              </li>
            </ul>
          </div>
          <div>
            <a
              rel="noreferrer"
              href="https://drive.google.com/file/d/1Xel4JxgekURyJtXEUk3m3jJMqUCwW48h/view?usp=sharing"
              target={"_blank"}
            >
              <NavbarButton
                text={
                  <span className="flex gap-2 items-center font-medium">
                    <span>Resume</span>
                    <BsBoxArrowUpRight className="font-medium" />
                  </span>
                }
                title={"View My Resume"}
              />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
