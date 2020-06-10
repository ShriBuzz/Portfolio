import React from "react";

import { Box } from "@material-ui/core";

import HomeIcon from "@material-ui/icons/Home";
import FolderOpenIcon from "@material-ui/icons/FolderOpen";
import BuildIcon from "@material-ui/icons/Build";

import "./styles.css";

const MobNav = ({ active, setActive }) => {
  return (
    <Box className={`Mobcontainer`}>
      <a
        href="#M_Home"
        className={active === 1 ? `Moblink active` : `Moblink`}
        onClick={() => setActive(1)}
      >
        <HomeIcon style={{ fontSize: 30 }} />
      </a>
      <a
        href="#M_Skill"
        className={active === 2 ? `Moblink active` : `Moblink`}
        onClick={() => setActive(2)}
      >
        <BuildIcon style={{ fontSize: 30 }} />
      </a>
      <a
        href="#M_Project"
        className={active === 3 ? `Moblink active` : `Moblink`}
        onClick={() => setActive(3)}
      >
        <FolderOpenIcon style={{ fontSize: 30 }} />
      </a>
    </Box>
  );
};

export default MobNav;
