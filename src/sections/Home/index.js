import React from "react";

import { Box, Typography, CircularProgress } from "@material-ui/core";

import * as H from "./styles";
import { Home } from "../../const";
import ProfileCard from "../../components/ProfileCard";
import RecButton from "../../components/RecButton";

const HomeSection = ({ userData }) => {
  return (
    <Box component="div" style={H.section}>
      <Box component="div" style={H.cardContainer}>
        {!userData ? (
          <CircularProgress />
        ) : (
          <ProfileCard name={userData.name} url={userData.avatar_url} />
        )}
      </Box>
      <Box component="div" style={H.infoContainer}>
        <Box style={H.textBox}>
          <Typography style={{ fontSize: "2em", marginBottom: 7 }}>
            {Home.introHeader}
          </Typography>
          <Typography style={{ fontSize: "1em", width: 290 }}>
            {Home.introDesc}
          </Typography>
          <Typography style={{ fontSize: "1.1em" }}>{Home.intrest}</Typography>
        </Box>
        <Box style={H.buttonBox}>
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
    </Box>
  );
};

export default HomeSection;
