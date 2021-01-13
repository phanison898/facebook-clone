import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Style from "./Style";

function Story({ profileImage, bgImage, title }) {
  const classes = Style();
  return (
    <div className={classes.story} style={{ backgroundImage: `url(${bgImage})` }}>
      <Avatar src={profileImage} className={classes.profilePic} />
      <h4>{title}</h4>
    </div>
  );
}

export default Story;
