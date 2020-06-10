import React from "react";

import { Box, Typography } from "@material-ui/core";

import "./styles.css";

import ScrollCards from "../../MobComponents/MobScrollCards";

const SkillsView = () => {
  return (
    <Box component="div" className={`skillSection`}>
      <Box className={`overlay`}>
        <Typography variant="h3" className={`skillText`}>
          SKILLS
        </Typography>
        <ScrollCards />
      </Box>
    </Box>
  );
};

export default SkillsView;
