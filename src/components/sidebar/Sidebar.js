import React from "react";
import { Grid, Avatar, Paper } from "@material-ui/core";
import { Scrollbars } from "react-custom-scrollbars";
import InfoBar from "../util/InfoBar";
import Style from "./Style";

const Sidebar = () => {
  const classes = Style();
  return (
    <Paper elevation={0} className={classes.sidebar}>
      <Scrollbars autoHide autoHideDuration={200}>
        <InfoBar Source={<Avatar />} title={"Phanison"} />
        <InfoBar Source={<Avatar />} title={"Phanison"} />
        <InfoBar Source={<Avatar />} title={"Phanison"} />
        <InfoBar Source={<Avatar />} title={"Phanison"} />
        <InfoBar Source={<Avatar />} title={"Phanison"} />
        <InfoBar Source={<Avatar />} title={"Phanison"} />
        <InfoBar Source={<Avatar />} title={"Phanison"} />
        <InfoBar Source={<Avatar />} title={"Phanison"} />
        <InfoBar Source={<Avatar />} title={"Phanison"} />
        <InfoBar Source={<Avatar />} title={"Phanison"} />
        <InfoBar Source={<Avatar />} title={"Phanison"} />
        <InfoBar Source={<Avatar />} title={"Phanison"} />
        <InfoBar Source={<Avatar />} title={"Phanison"} />
        <InfoBar Source={<Avatar />} title={"Phanison"} />
        <InfoBar Source={<Avatar />} title={"Phanison"} />
        <InfoBar Source={<Avatar />} title={"Phanison"} />
        <InfoBar Source={<Avatar />} title={"Phanison"} />
        <InfoBar Source={<Avatar />} title={"Phanison"} />
        <InfoBar Source={<Avatar />} title={"Phanison"} />
        <InfoBar Source={<Avatar />} title={"Phanison"} />
        <InfoBar Source={<Avatar />} title={"Phanison"} />
        <InfoBar Source={<Avatar />} title={"Phanison"} />
        <InfoBar Source={<Avatar />} title={"Phanison"} />
      </Scrollbars>
    </Paper>
  );
};

export default Sidebar;
