import React from "react";

import Landing from "../components/Landing";
import Skills from "../components/Skills";
import ProjectsPreview from "../components/ProjectsPreview";

const Home = () => {
  return(
    <div>
      <Landing />
      <Skills />
      <ProjectsPreview />
    </div>
  )
};

export default Home;