import React from "react";
import { Avatar, Tooltip, Paper, Divider } from "@material-ui/core";
import { Scrollbars } from "react-custom-scrollbars";
import SearchIcon from "@material-ui/icons/Search";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import InfoBar from "../util/InfoBar";
import Style from "./Style";

const Contacts = () => {
  const classes = Style();

  return (
    <Paper elevation={0} className={classes.contacts}>
      <Scrollbars autoHide autoHideDuration={200}>
        <Divider />
        <div className={classes.contacts__tab}>
          <h4>Your Pages</h4>
          {/* <Avatar style={{ position: "relative" }}>
            <FiberManualRecordIcon style={{ color: "green", position: "absolute", bottom: 3, right: 3, fontSize: 14 }} />
          </Avatar> */}
          <MoreHorizIcon />
        </div>
        <Divider />
        <div className={classes.contacts__tab}>
          <h4>Contacts</h4>
          <SearchIcon />
          <MoreHorizIcon />
        </div>
        {usernames.map((username, n) => (
          <InfoBar
            key={n}
            Source={
              <Tooltip placement="left" title={username} arrow>
                <Avatar src={`https://randomuser.me/api/portraits/men/${n + 1}.jpg`} />
              </Tooltip>
            }
            title={username}
          />
        ))}
      </Scrollbars>
    </Paper>
  );
};

const usernames = ["Walter White", "Jessy Pinkman", "Hank Schreder", "Skinny Peet", "Badger", "Mike", "Gus Fring", "Hector", "Toco", "Tommy Shelby", "Arthur", "John", "Finn", "Alfie"];

export default Contacts;
