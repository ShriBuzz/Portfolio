import React from "react";

import { Box, Link } from "@material-ui/core";

import Logo from "../../assets/logo.png";

import CircleButton from "../../components/CircleButton";

import { Home } from "../../const";

import * as F from "./styles";

const Fotter = () => {
  return (
    <Box style={F.container}>
      <img alt="logo" src={Logo} style={F.Logo} />
      <Box style={F.socialGroup}>
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
      <Link style={F.Link} onClick={() => window.scrollTo(0, 0)}>
        BACK TO TOP
      </Link>
    </Box>
  );
};

export default Fotter;
