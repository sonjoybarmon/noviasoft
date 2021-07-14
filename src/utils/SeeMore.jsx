import React, { useState } from "react";
import Button from "@material-ui/core/Button";

const SeeMore = ({ children, number }) => {
  const [isShowMore, setisShowMore] = useState(false);

  const showMoreHandler = () => {
    setisShowMore(!isShowMore);
  };
  return (
    <>
      {children && children.length > number ? (
        <span>
          {`${isShowMore ? children : children.slice(0, number)}
            ${isShowMore ? " " : "..."}`}
          <span onClick={showMoreHandler} className="readMore">
            {isShowMore ? (
              <Button variant="outlined" color="default" size="small">
                Show Less
              </Button>
            ) : (
              <Button variant="outlined" color="default" size="small">
                Show More
              </Button>
            )}
          </span>
        </span>
      ) : (
        children
      )}
    </>
  );
};

export default SeeMore;
