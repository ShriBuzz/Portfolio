import React from "react";

import { IconButton } from "@material-ui/core";

const CircleButton = ({ url, link }) => {
  return (
    <IconButton component="span" onClick={() => window.open(link)}>
      <img alt="title" src={url} style={{ height: 23 }} />
    </IconButton>
  );
};

export default CircleButton;
