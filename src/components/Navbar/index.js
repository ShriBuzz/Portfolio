import React, { useState, useEffect } from "react";

import { AppBar, Box } from "@material-ui/core";

import "./styles.css";

import Logo from "../../assets/logo.png";

const Navbar = ({ active, setActive }) => {
  const [setPosition] = useState(0);

  useEffect(() => {
    const onScroll = (e) => {
      setPosition(e.target.documentElement.scrollTop);
    };
    window.addEventListener("scroll", onScroll);
  }, []);

  return (
    <AppBar className={`navBar`}>
      <img alt="Logo" src={Logo} className={`logo`} />
      <Box component="div" className={`list`}>
        <a
          href="#Home"
          className={active === 1 ? `link active` : `link`}
          onClick={() => setActive(1)}
        >
          HOME
        </a>
        <a
          href="#Skill"
          className={active === 2 ? `link active` : `link`}
          onClick={() => setActive(2)}
        >
          SKILLS
        </a>
        <a
          href="#Project"
          className={active === 3 ? `link active` : `link`}
          onClick={() => setActive(3)}
        >
          PROJECTS
        </a>
      </Box>
    </AppBar>
  );
};

export default Navbar;
