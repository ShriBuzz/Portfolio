import React from "react";

import { Box, Typography } from "@material-ui/core";

import * as S from "./styles";
import ScrollCards from "../../components/ScrollCards";

const Skills = () => {
  return (
    <Box component="div" style={S.section}>
      <Box component="div" style={S.container}>
        <Typography variant="h3" style={S.header}>
          SKILLS
        </Typography>
        <ScrollCards />
      </Box>
    </Box>
  );
};

export default Skills;
