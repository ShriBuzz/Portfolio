import React from "react";

import { Button } from "@material-ui/core";

import "./styles.css";

const RecButton = ({ title, link, image, color }) => {
  return (
    <Button
      variant="contained"
      className={`container`}
      onClick={() => {
        window.open(link);
      }}
    >
      <img alt="facebook" src={image} className={`icon`} />
      <p style={{ color: color }}>{title}</p>
    </Button>
  );
};

export default RecButton;
