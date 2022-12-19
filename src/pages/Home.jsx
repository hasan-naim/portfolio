import React from "react";
import Navbar from "../components/Navbar/Navbar";
import AboutMe from "../components/Sections/AboutMe/AboutMe";
import Banner from "../components/Sections/Banner/Banner";
import Footer from "../components/Sections/Footer/Footer";
import ProjectsSection from "../components/Sections/ProjectsSection/ProjectsSection";

function Home() {
  return (
    <div id="home">
      <Navbar />
      <Banner />
      <ProjectsSection />
      <AboutMe />
      <Footer />
    </div>
  );
}

export default Home;
