import React from "react";

import { Card, Box, Avatar, Typography } from "@material-ui/core";

import * as P from "./styles";

import { Home } from "../../const";

const ProfileCard = ({ name, url }) => {
  return (
    <Card style={P.cardContainer} elevation={4}>
      <Avatar alt="Profile image" src={url} style={P.avatar} />
      <Typography style={P.name}>{name}</Typography>
      <Box component="div" style={P.textBox}>
        <Typography style={P.text}>{Home.description}</Typography>
      </Box>
    </Card>
  );
};

export default ProfileCard;
