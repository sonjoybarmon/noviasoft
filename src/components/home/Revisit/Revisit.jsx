import React from "react";
import TextImage from "../../Common/TextImage/TextImage";
import image from "../../../images/zXJYe.jpg";
const Revisit = () => {
  return (
    <div>
      <TextImage
        title="Revisit the NavieaSoft TechEd experience"
        subtitle="Browse 500+ sessions to find keynotes, lectures, strategy talks,
              and road maps that meet your needs and goals."
        btnText="Read More"
        image={image}
      />
    </div>
  );
};

export default Revisit;
