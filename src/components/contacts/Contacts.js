import React, { useState, useEffect } from "react";
import { Avatar, Tooltip, Paper, Divider } from "@material-ui/core";
import { Scrollbars } from "react-custom-scrollbars";
import SearchIcon from "@material-ui/icons/Search";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import InfoBar from "../util/InfoBar";
import Style from "./Style";
import axios from "axios";

const Contacts = () => {
  const classes = Style();

  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await axios.get("https://breakingbadapi.com/api/characters");
      setUsers(response.data);
    };
    fetchUsers();
  }, []);

  return (
    <Paper elevation={0} className={classes.contacts}>
      <Scrollbars autoHide autoHideDuration={200}>
        <Divider />
        <div className={classes.contacts__tab}>
          <h4>Your Pages</h4>
          <MoreHorizIcon />
        </div>
        <Divider />
        <div className={classes.contacts__tab}>
          <h4>Contacts</h4>
          <SearchIcon />
          <MoreHorizIcon />
        </div>
        {users.map(({ char_id, name, img }) => (
          <InfoBar
            key={char_id}
            Source={
              <Tooltip placement="left" title={name} arrow>
                <Avatar src={img} size={100} />
              </Tooltip>
            }
            title={name}
            online={true}
            lastSeen={
              Math.floor(Math.random() * (3 - 1 + 1)) + 1 === 2 &&
              `${Math.floor(Math.random() * 10) + 1} h`
            }
            noTransform={true}
          />
        ))}
      </Scrollbars>
    </Paper>
  );
};

export default Contacts;
