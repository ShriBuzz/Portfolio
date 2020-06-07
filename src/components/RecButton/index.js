import React from "react";

import { Button } from "@material-ui/core";

import * as B from "./styles";

const RecButton = ({ title, link, image, color }) => {
  return (
    <Button
      variant="contained"
      style={B.container}
      onClick={() => {
        window.open(link);
      }}
    >
      <img alt="facebook" src={image} style={B.icon} />
      <p style={{ color: color }}>{title}</p>
    </Button>
  );
};

export default RecButton;
