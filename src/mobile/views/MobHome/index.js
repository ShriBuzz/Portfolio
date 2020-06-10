import React from "react";

import { Box, CircularProgress } from "@material-ui/core";

import ProfileCard from "../../../components/ProfileCard";
import RecButton from "../../../components/RecButton";

import { Home } from "../../../const";

import "./styles.css";

const homeView = ({ userData }) => {
  return (
    <>
      <Box className={`profile`}>
        {userData ? (
          <ProfileCard name={userData.name} url={userData.avatar_url} />
        ) : (
          <CircularProgress color="primary" />
        )}
      </Box>
      <Box className={`socialsBox`}>
        <Box className={`buttonContainer`}>
          <RecButton
            title={Home.button.git.title}
            image={Home.button.git.image}
            link={Home.button.git.link}
            color={Home.button.git.color}
          />
          <RecButton
            title={Home.button.linkedin.title}
            image={Home.button.linkedin.image}
            link={Home.button.linkedin.link}
            color={Home.button.linkedin.color}
          />
          <RecButton
            title={Home.button.fb.title}
            image={Home.button.fb.image}
            link={Home.button.fb.link}
            color={Home.button.fb.color}
          />
        </Box>
      </Box>
    </>
  );
};

export default homeView;
