import React from "react";
import image from "../../../images/KRM4S.jpg";
import TextImage from "../../Common/TextImage/TextImage";

const GreatIdeas = () => {
  return (
    <div>
      <TextImage
        title="Celebrating great Ideas."
        subtitle="Check out ground-breaking NavieaSoft TechEd announcements – including new process automation tools and enhancements to the NavieaSoft Business Technology Platform – designed for all developer skill levels and jobs."
        btnText="Read the press release"
        image={image}
        btnStyle={{
          background: "#9aaab11c",
          boxShadow: "0px 0px 10px 0px #00000042",
        }}
      />
    </div>
  );
};

export default GreatIdeas;
