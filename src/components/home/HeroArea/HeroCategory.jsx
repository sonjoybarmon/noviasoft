import { Card, Typography } from "@material-ui/core";
import React from "react";
import SliceText from "../../../utils/SliceText";
const HeroCategory = ({ data }) => {
  return (
    <Card className="Card_wrapper">
      <span>{data.image}</span>
      <Typography variant="subtitle1" color="initial">
        <SliceText number={15}>{data.title}</SliceText>
      </Typography>
    </Card>
  );
};

export default HeroCategory;
