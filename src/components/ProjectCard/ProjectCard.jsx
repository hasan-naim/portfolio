import React from "react";
import { BsBoxArrowUpRight, BsGithub } from "react-icons/bs";
import { BiServer } from "react-icons/bi";
function ProjectCard({ project }) {
  return (
    <div className="bg-primaryDark-800 w-100 overflow-hidden rounded-3xl h-auto pb-6  hover:shadow-lg md:hover:bg-gray-800   duration-500">
      {/* Image div */}
      <div className="p-6 rounded-xl overflow-hiddden h-auto">
        <img
          className="w-full h-full min-h-full  rounded-xl"
          src={project.images[0]}
          alt="your kitch"
        />
      </div>
      {/* description of card */}
      <div className="px-6 space-y-2 max-w-full">
        <div className="text-3xl font-medium text-gray-100 flex items-center justify-between gap-3">
          {/* {project.title} */}
          <span className="break-words basis-full block overflow-hidden">
            {project.title}
          </span>
          <div className="flex gap-2">
            {project.clientLink && (
              <a
                rel="noreferrer"
                href={project.clientLink}
                target={"_blank"}
                title="Live"
              >
                <BsGithub className="w-6 h-6 sacle-[2] cursor-pointer text-gray-300 duration-200 hover:text-primarySkyBlue-800 hover:scale-[1.2]" />
              </a>
            )}
            {project.serverLink && (
              <a
                rel="noreferrer"
                href={project.serverLink}
                target={"_blank"}
                title="Live"
              >
                <BiServer className="w-6 h-6 sacle-[2] cursor-pointer text-gray-300 duration-200 hover:text-primarySkyBlue-800 hover:scale-[1.2]" />
              </a>
            )}
            {project.liveLink && (
              <a
                rel="noreferrer"
                href={project.liveLink}
                target={"_blank"}
                title="Live"
              >
                <BsBoxArrowUpRight className="w-6 h-6 sacle-[2] cursor-pointer text-gray-300 duration-200 hover:text-primarySkyBlue-800 hover:scale-[1.2]" />
              </a>
            )}
          </div>
        </div>
        <p className="text-md font-normal text-gray-300">{project.desc}</p>
      </div>
    </div>
  );
}

export default ProjectCard;
