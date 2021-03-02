import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid, Hidden, Avatar, Tooltip, Paper, Badge } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { HomeOutlined } from "@material-ui/icons";
import { PlayCircleFilledWhiteOutlined } from "@material-ui/icons";
import { StoreMallDirectoryOutlined } from "@material-ui/icons";
import { SupervisedUserCircleOutlined } from "@material-ui/icons";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import BrightnessHighIcon from "@material-ui/icons/BrightnessHigh";
import NotificationsNoneOutlinedIcon from "@material-ui/icons/NotificationsNoneOutlined";
import ArrowDropDownRoundedIcon from "@material-ui/icons/ArrowDropDownRounded";
import AddIcon from "@material-ui/icons/Add";
import TelegramIcon from "@material-ui/icons/Telegram";
import Zoom from "@material-ui/core/Zoom";
import logo from "../../assets/images/logo.png";
import { ToggleTheme } from "../../store/actions/util";
import { auth } from "../../firebase";
import Style from "./Style";

const Header = () => {
  const classes = Style();
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.util);
  const { photoURL } = useSelector((state) => state.user);

  const changeTheme = () => {
    dispatch(ToggleTheme());
  };

  const logout = () => {
    auth.signOut();
  };

  return (
    <Paper elevation={0} style={{ borderRadius: 0, width: "100%", height: "100%" }}>
      <Grid container className={classes.header}>
        {/*----Logo & Search icon--------*/}
        <Hidden xsDown>
          <Grid item className={classes.header__logo} sm={2} md={3}>
            <img className={classes.logo__image} src={logo} alt="facebook-logo" />
            <Hidden smDown>
              <div className={classes.logo__search}>
                <SearchIcon />
                <input placeholder="Search facebook ..." />
              </div>
            </Hidden>
          </Grid>
        </Hidden>
        {/*----Nav-Bar--------*/}
        <Grid item className={classes.header__nav} xs={12} sm={8} md={6}>
          <div className={`${classes.nav__links} ${classes.nav__links__specail}`}>
            <Avatar src={logo} />
          </div>
          <div className={classes.nav__links}>
            <HomeOutlined />
          </div>
          <div className={classes.nav__links}>
            <PlayCircleFilledWhiteOutlined />
          </div>
          <Hidden xsDown>
            <div className={classes.nav__links}>
              <StoreMallDirectoryOutlined />
            </div>
            <div className={classes.nav__links}>
              <SupervisedUserCircleOutlined />
            </div>
          </Hidden>
          <div className={classes.nav__links} onClick={changeTheme}>
            {mode ? <Brightness4Icon /> : <BrightnessHighIcon />}
          </div>
          <div className={`${classes.nav__links} ${classes.nav__links__specail}`}>
            <Avatar src={photoURL} onClick={logout} />
          </div>
        </Grid>
        {/*----Userinfo and options--------*/}
        <Hidden xsDown>
          <Grid item className={classes.header__userinfo} sm={2} md={3}>
            <Tooltip
              placement="left"
              TransitionComponent={Zoom}
              TransitionProps={{ timeout: 300 }}
              title={"logout"}
              arrow
            >
              <Avatar src={photoURL} onClick={logout} />
            </Tooltip>
            <Hidden smDown>
              <div className={classes.userinfo__options}>
                <AddIcon />
                <TelegramIcon />
                <Badge badgeContent={10} max={9} {...defaultProps} />

                <ArrowDropDownRoundedIcon />
              </div>
            </Hidden>
          </Grid>
        </Hidden>
      </Grid>
    </Paper>
  );
};

const defaultProps = {
  color: "secondary",
  children: <NotificationsNoneOutlinedIcon />,
};

export default Header;
