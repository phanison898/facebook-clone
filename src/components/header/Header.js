import React from "react";
import { Grid, Hidden, Avatar, Tooltip, Paper } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { Home, HomeOutlined } from "@material-ui/icons";
import { PlayCircleFilledWhite, PlayCircleFilledWhiteOutlined } from "@material-ui/icons";
import { Store, StoreMallDirectoryOutlined } from "@material-ui/icons";
import { SupervisedUserCircle, SupervisedUserCircleOutlined } from "@material-ui/icons";
import { SportsEsports, SportsEsportsOutlined } from "@material-ui/icons";
import NotificationsNoneOutlinedIcon from "@material-ui/icons/NotificationsNoneOutlined";
import ArrowDropDownRoundedIcon from "@material-ui/icons/ArrowDropDownRounded";
import AddIcon from "@material-ui/icons/Add";
import TelegramIcon from "@material-ui/icons/Telegram";
import Zoom from "@material-ui/core/Zoom";
import logo from "../../images/logo.png";
import Style from "./Style";
const Header = () => {
  const classes = Style();
  return (
    <Paper elevation={0} style={{ borderRadius: 0, width: "100%", height: "100%" }}>
      <Grid container className={classes.header}>
        {/*----Logo & Search icon--------*/}
        <Grid item className={classes.header__logo} xs={1} sm={2} md={3}>
          <img className={classes.logo__image} src={logo} />
          <Hidden smDown>
            <div className={classes.logo__search}>
              <SearchIcon />
              <input placeholder="Search facebook ..." />
            </div>
          </Hidden>
        </Grid>
        {/*----Nav-Bar--------*/}
        <Grid item className={classes.header__nav} xs={10} sm={8} md={6}>
          <HomeOutlined fontSize="large" />
          <PlayCircleFilledWhiteOutlined fontSize="large" />
          <StoreMallDirectoryOutlined fontSize="large" />
          <SupervisedUserCircleOutlined fontSize="large" />
          <SportsEsportsOutlined fontSize="large" />
        </Grid>
        {/*----Userinfo and options--------*/}
        <Grid item className={classes.header__userinfo} xs={1} sm={2} md={3}>
          <Tooltip placement="left" TransitionComponent={Zoom} TransitionProps={{ timeout: 300 }} title="phanison" arrow>
            <Avatar>P</Avatar>
          </Tooltip>
          <Hidden smDown>
            <div className={classes.userinfo__options}>
              <AddIcon />
              <TelegramIcon />
              <NotificationsNoneOutlinedIcon />
              <ArrowDropDownRoundedIcon />
            </div>
          </Hidden>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Header;
