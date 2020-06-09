import React from "react";

import { Card, Box, Avatar, Typography } from "@material-ui/core";

import "./styles.css";

import { Home } from "../../const";

const ProfileCard = ({ name, url }) => {
  return (
    <Card className={`cardContainer`} elevation={4}>
      <Avatar alt="Profile image" src={url} className={`avatar`} />
      <Typography className={`title`}>{name}</Typography>
      <Box component="div" className={`textBox`}>
        <Typography className={`text`}>{Home.description}</Typography>
      </Box>
    </Card>
  );
};

export default ProfileCard;
