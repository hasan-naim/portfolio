import React, { useEffect, useState } from "react";
import HeadLine from "../../HeadLine/HeadLine";
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2 gap-y-8">
            {data.map((project) => (
              /// Card
              <ProjectCard project={project} key={project.id} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
