import React from "react";

import { Box } from "@material-ui/core";

import Logo from "../../../assets/logo.png";

import CircleButton from "../../../components/CircleButton";

import "./styles.css";

import { Home } from "../../../const";

const MobFotter = () => {
  return (
    <Box className={`footerContainer`}>
      <img alt="logo" src={Logo} className={`footLogo`} />
      <Box>
        <CircleButton
          title={Home.button.fb.title}
          url={Home.button.fb.image}
          link={Home.button.fb.link}
        />
        <CircleButton
          title={Home.button.git.title}
          url={Home.button.git.image}
          link={Home.button.git.link}
        />
        <CircleButton
          title={Home.button.linkedin.title}
          url={Home.button.linkedin.image}
          link={Home.button.linkedin.link}
        />
        <CircleButton
          title={Home.button.insta.title}
          url={Home.button.insta.image}
          link={Home.button.insta.link}
        />
        <CircleButton
          title={Home.button.twitter.title}
          url={Home.button.twitter.image}
          link={Home.button.twitter.link}
        />
      </Box>
    </Box>
  );
};

export default MobFotter;
