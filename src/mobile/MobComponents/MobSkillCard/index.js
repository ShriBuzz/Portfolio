import React from "react";

import { Card, Typography } from "@material-ui/core";

import * as S from "./styles";

const SkillCard = ({ title, image, color }) => {
  return (
    <Card style={S.cardContainer}>
      <img alt="imae" src={image} style={S.icons} />
      <Typography style={{ fontSize: 15, fontWeight: "800", color: color }}>
        {title}
      </Typography>
    </Card>
  );
};

export default SkillCard;
