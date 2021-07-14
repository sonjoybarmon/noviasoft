import React from "react";
import TextImage from "../../Common/TextImage/TextImage";
import image from "../../../images/zm0ci.jpg";
const Codes = () => {
  return (
    <div>
      <TextImage
        title="Low-code/No-code? No problem."
        subtitle="Low-code/No-code? No problem."
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

export default Codes;
