import React, { useState, useEffect } from "react";

import { AppBar, Link, Box } from "@material-ui/core";

import * as N from "./styles";

import Logo from "../../assets/logo.png";

const Navbar = ({ active, setActive, onHome, onSkill, onProject }) => {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const onScroll = (e) => {
      setPosition(e.target.documentElement.scrollTop);
    };
    window.addEventListener("scroll", onScroll);
  }, []);

  return (
    <AppBar position="fixed" style={position === 0 ? N.nav : N.u_nav}>
      <img alt="Logo" src={Logo} style={position === 0 ? N.logo : N.u_logo} />
      <Box component="div" style={position === 0 ? N.list : N.u_list}>
        <Link
          style={
            position === 0
              ? active === 1
                ? N.linkActive
                : N.link
              : active === 1
              ? N.u_linkActive
              : N.u_link
          }
          onClick={() => {
            setActive(1);
            onHome();
          }}
        >
          HOME
        </Link>
        <Link
          style={
            position === 0
              ? active === 2
                ? N.linkActive
                : N.link
              : active === 2
              ? N.u_linkActive
              : N.u_link
          }
          onClick={() => {
            setActive(2);
            onSkill();
          }}
        >
          SKILLS
        </Link>
        <Link
          style={
            position === 0
              ? active === 3
                ? N.linkActive
                : N.link
              : active === 3
              ? N.u_linkActive
              : N.u_link
          }
          onClick={() => {
            setActive(3);
            onProject();
          }}
        >
          PROJECTS
        </Link>
      </Box>
    </AppBar>
  );
};

export default Navbar;
