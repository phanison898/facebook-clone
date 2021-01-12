import React from "react";
import { ProfilePic } from "../../images/images";
import Story from "./Story";
import Style from "./Style";

const Stories = () => {
  const classes = Style();
  return (
    <div className={classes.stories}>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
        <Story key={i} bgImage={ProfilePic} profileImage={ProfilePic} title="phanison" />
      ))}
    </div>
  );
};

export default Stories;
