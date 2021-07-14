import { Card, Typography } from "@material-ui/core";
import React from "react";
import SeeMore from "../../../utils/SeeMore";

const SingleCard = ({ data }) => {
  return (
    <Card className="single__card">
      <div>
        <div className="single_card_img">
          <img src={data?.image} alt="" />
        </div>
        <Typography variant="h4" color="initial">
          {data?.title}
        </Typography>
        <Typography variant="subtitle1" color="initial">
          <SeeMore number={25}>{data?.subtitle}</SeeMore>
        </Typography>
      </div>
    </Card>
  );
};

export default SingleCard;
