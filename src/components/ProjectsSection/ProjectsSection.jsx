import React from "react";
import HeadLine from "../HeadLine/HeadLine";

function ProjectsSection() {
  return (
    <main>
      <div className="container">
        <HeadLine text={"Projects"} />
        <div className="mt-4">
          {/* Card */}
          <div className="grid lg:grid-cols-3 gap-2">
            <div className=""></div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ProjectsSection;
