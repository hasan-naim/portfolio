import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import HeadLine from "../../HeadLine/HeadLine";
import PrimaryButton from "../../PrimaryButton/PrimaryButton";
import ProjectCard from "../../ProjectCard/ProjectCard";

function ProjectsSection() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("projectData.json")
      .then((res) => res.json())
      .then((dt) => setData(dt));
  }, []);

  return (
    <section id="projects" className="mb-24">
      <div className="container">
        <HeadLine text={"Projects"} />
        <div className="mt-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2">
            {data.map((project) => (
              /// Card
              <ProjectCard project={project} key={project.id} />
            ))}
          </div>
          <div className="mt-4 w-fit mx-auto">
            {/* <Link to={"/projects"}> */}
            <PrimaryButton
              text={
                <span className="flex gap-2 items-center font-medium">
                  <span>See All</span>
                  <FaArrowRight className="font-medium" />
                </span>
              }
              styles={"rounded-[39px] "}
            />
            {/* </Link> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
