import React from "react";
import { Grid, Avatar, Tooltip, Paper } from "@material-ui/core";
import { Scrollbars } from "react-custom-scrollbars";
import InfoBar from "../util/InfoBar";
import Style from "./Style";

const Contacts = () => {
  const classes = Style();
  return (
    <Paper elevation={0} className={classes.contacts}>
      <Scrollbars autoHide autoHideDuration={200}>
        <InfoBar
          Source={
            <Tooltip title="phanison" placement="left" arrow>
              <Avatar />
            </Tooltip>
          }
          title={"Phanison"}
        />
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

export default Contacts;
