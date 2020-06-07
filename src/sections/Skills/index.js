import React from "react";

import { Box, Typography } from "@material-ui/core";

import * as S from "./styles";
import ScrollCards from "../../components/ScrollCards";

const Skills = () => {
  return (
    <Box component="div" style={S.section}>
      <Typography variant="h3" style={S.header}>
        Skills
      </Typography>
      <ScrollCards />
    </Box>
  );
};

export default Skills;
