import React from "react";
import Navbar from "../components/Navbar/Navbar";
import AboutMe from "../components/Sections/AboutMe/AboutMe";
import Banner from "../components/Sections/Banner/Banner";
import ContactMe from "../components/Sections/ContactMe/ContactMe";
import Footer from "../components/Sections/Footer/Footer";
import ProjectsSection from "../components/Sections/ProjectsSection/ProjectsSection";

function Home() {
  return (
    <div id="home">
      <Navbar />
      <Banner />
      <ProjectsSection />
      <AboutMe />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default Home;
