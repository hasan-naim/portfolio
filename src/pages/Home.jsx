import React from "react";
import Banner from "../components/Banner/Banner";
import Navbar from "../components/Navbar/Navbar";
import ProjectsSection from "../components/ProjectsSection/ProjectsSection";

function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <ProjectsSection />
    </>
  );
}

export default Home;
