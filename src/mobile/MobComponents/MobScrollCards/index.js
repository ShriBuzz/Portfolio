import React from "react";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

import { skillList } from "../../../const";

import SkillCard from "../MobSkillCard";

const ScrollCards = () => {
  return (
    <Carousel dots slidesPerPage="2" autoPlay="2000" infinite>
      {skillList.map((data, key) => {
        return (
          <SkillCard
            title={data.title.toUpperCase()}
            image={data.image}
            key={data.title}
            color={data.color}
          />
        );
      })}
    </Carousel>
  );
};

export default ScrollCards;
