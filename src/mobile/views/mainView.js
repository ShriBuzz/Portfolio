import React from "react";

import Nav from "../MobComponents/Mobnav";
import Home from "./MobHome";
import Skill from "./MobSkills";
import Project from "./MobProjects";
import MobFotter from "./MobFotter";

const mainView = ({ userData, active, setActive }) => {
  return (
    <>
      <Nav active={active} setActive={setActive} />
      <div id="M_Home" style={{ marginTop: 65 }}>
        <Home userData={userData} />
      </div>
      <div id="M_Skill">
        <Skill />
      </div>
      <div id="M_Project">
        <Project />
      </div>
      <MobFotter />
    </>
  );
};

export default mainView;
