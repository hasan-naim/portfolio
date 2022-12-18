import React, { useEffect, useState } from "react";
import HeadLine from "../HeadLine/HeadLine";
import yourKitch from "../../assets/yourKitch.png";
import ProjectCard from "../ProjectCard/ProjectCard";

// const data = [
//   {
//     id: 1,
//     title: "Your Kitch",
//     desc: "Something for now Something for now Something for now Something for now Something for now",
//     images: [yourKitch],
//     liveLink: "https://your-kitch-ph-assignment-11.web.app/",
//     clientLink: "https://github.com/hasan-naim/your-kitch-client",
//     serverLink: "https://github.com/hasan-naim/your-kitch-backend",
//   },
//   {
//     id: 2,
//     title: "Your Kitch",
//     desc: "Something for now Something for now Something for now Something for now Something for now",
//     images: [yourKitch],
//     liveLink: "https://your-kitch-ph-assignment-11.web.app/",
//     clientLink: "https://github.com/hasan-naim/your-kitch-client",
//     serverLink: "https://github.com/hasan-naim/your-kitch-backend",
//   },
//   {
//     id: 3,
//     title: "Your Kitch",
//     desc: "Something for now Something for now Something for now Something for now Something for now",
//     images: [yourKitch],
//     liveLink: "https://your-kitch-ph-assignment-11.web.app/",
//     clientLink: "https://github.com/hasan-naim/your-kitch-client",
//     serverLink: "https://github.com/hasan-naim/your-kitch-backend",
//   },
//   {
//     id: 4,
//     title: "Your Kitch",
//     desc: "Something for now Something for now Something for now Something for now Something for now",
//     images: [yourKitch],
//     liveLink: "https://your-kitch-ph-assignment-11.web.app/",
//     clientLink: "https://github.com/hasan-naim/your-kitch-client",
//     serverLink: "https://github.com/hasan-naim/your-kitch-backend",
//   },
// ];

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
