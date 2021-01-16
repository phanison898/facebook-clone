import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import { darkSecondary } from "../../assets/Colors";

const InfoBar = ({ Source, title, onClick, online, lastSeen, noTransform }) => {
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
        backgroundColor: theme.palette.type === "dark" ? darkSecondary : "lightgrey",
        transform: noTransform ? "" : "scale(1.02)",
      },
    },
    infobar__source: {
      position: "relative",
      display: "flex",
      justifyContent: "center",
      alignContent: "center",
    },
    online: {
      position: "absolute",
      bottom: -3,
      right: lastSeen ? -3 : 0,
      transition: "all 0.5s ease",
      "& > .MuiSvgIcon-root": {
        borderRadius: 999,
        backgroundColor: "black",
        color: "#56c700",
        fontSize: 10,
      },
    },
    lastSeen: {
      borderRadius: 999,
      padding: "0 5px",
      backgroundColor: "black",
      color: "#56c700",
      fontSize: 10,
      fontWeight: 800,
    },
  }));
  const classes = Style();
  return (
    <div className={classes.infobar} onClick={onClick}>
      <div className={classes.infobar__source}>
        {Source}
        {online && (
          <div className={classes.online}>
            {lastSeen ? (
              <div className={classes.lastSeen}>{lastSeen}</div>
            ) : (
              <FiberManualRecordIcon />
            )}
          </div>
        )}
      </div>
      <h4>{title}</h4>
    </div>
  );
};

export default InfoBar;
