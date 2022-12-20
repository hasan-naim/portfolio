import React from "react";
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";

function Footer() {
  return (
    <footer className="mb-12">
      <div className="container">
        <div className="w-[220px] h-[6px] bg-gray-600 rounded-3xl mx-auto mb-6"></div>
        <div className="mx-auto w-fit flex gap-3 text-gray-300 mb-3">
          <a
            rel="noreferrer"
            target={"_blank"}
            href="https://github.com/hasan-naim"
          >
            <BsGithub
              className="w-6 h-6 cursor-pointer hover:text-primaryBlue-900 duration-200"
              title="Github"
            />
          </a>
          <a
            rel="noreferrer"
            target={"_blank"}
            href="https://www.linkedin.com/in/hasannaim/"
          >
            <BsLinkedin
              className="w-6 h-6 cursor-pointer hover:text-primaryBlue-900 duration-200"
              title="Linkedin"
            />
          </a>
          <a
            rel="noreferrer"
            target={"_blank"}
            href="https://twitter.com/HasanNaim20"
          >
            <BsTwitter
              className="w-6 h-6 cursor-pointer hover:text-primaryBlue-900 duration-200"
              title="Twitter"
            />
          </a>
        </div>
        <div className="w-fit mx-auto text-center">
          <p className="font-medium text-sm text-gray-300">
            Copyright © 2022 <span className="font-bold"> Hasan Naim</span> All
            rights reserved.
          </p>
          <p className="font-medium text-sm text-gray-300">
            contact:{" "}
            <a
              className="font-bold text-md hover:text-primaryBlue-900 duration-200"
              href="mailto:hasannaim6246@gmail.com"
            >
              hasannaim6246@gmail.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
