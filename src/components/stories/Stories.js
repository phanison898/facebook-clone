import React from "react";
import { ProfilePic } from "../../images/images";
import Story from "./Story";
import Style from "./Style";

const Stories = () => {
  const classes = Style();
  return (
    <div className={classes.stories}>
      <Story bgImage={ProfilePic} profileImage={ProfilePic} title="phanison" />
      <Story bgImage={ProfilePic} profileImage={ProfilePic} title="phanison" />
      <Story bgImage={ProfilePic} profileImage={ProfilePic} title="phanison" />
      <Story bgImage={ProfilePic} profileImage={ProfilePic} title="phanison" />
      <Story bgImage={ProfilePic} profileImage={ProfilePic} title="phanison" />
      <Story bgImage={ProfilePic} profileImage={ProfilePic} title="phanison" />
      <Story bgImage={ProfilePic} profileImage={ProfilePic} title="phanison" />
      <Story bgImage={ProfilePic} profileImage={ProfilePic} title="phanison" />
      <Story bgImage={ProfilePic} profileImage={ProfilePic} title="phanison" />
      <Story bgImage={ProfilePic} profileImage={ProfilePic} title="phanison" />
      <Story bgImage={ProfilePic} profileImage={ProfilePic} title="phanison" />
      <Story bgImage={ProfilePic} profileImage={ProfilePic} title="phanison" />
      <Story bgImage={ProfilePic} profileImage={ProfilePic} title="phanison" />
      <Story bgImage={ProfilePic} profileImage={ProfilePic} title="phanison" />
      <Story bgImage={ProfilePic} profileImage={ProfilePic} title="phanison" />
    </div>
  );
};

export default Stories;
