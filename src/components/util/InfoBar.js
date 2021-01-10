import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const Style = makeStyles((theme) => ({
  infobar: {
    width: "100%",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 8,
    margin: "8 0",
    cursor: "pointer",
    borderRadius: 12,
    transition: "all 0.5s ease",
    "& > h4": {
      flex: 1,
      display: "flex",
      justifyContent: "flex-start",
      alignContent: "center",
      marginLeft: 8,
    },
    "&:hover": {
      backgroundColor: "lightgrey",
      transform: "scale(1.02)",
    },
  },
  infobar__source: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
  },
}));

const InfoBar = ({ Source, title }) => {
  const classes = Style();
  return (
    <div className={classes.infobar}>
      <div className={classes.infobar__source}>{Source}</div>
      <h4>{title}</h4>
    </div>
  );
};

export default InfoBar;
