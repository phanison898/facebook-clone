import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Avatar, Paper, Divider } from "@material-ui/core";
import { Scrollbars } from "react-custom-scrollbars";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { FacebookPages, FacebookCovid, FacebookFriends, FacebookGroups, FacebookMarketplace } from "../../images/images";
import { FacebookAdCenter, FacebookAdsManager, FacebookBloodDonation, FacebookBuyAndSell } from "../../images/images";
import { FacebookCrisis, FacebookEvents, FacebookFavourites, FacebookFilms } from "../../images/images";
import { FacebookFriendList, FacebookFundrisers, FacebookGames, FacebookGameVideos } from "../../images/images";
import { ReactNative, ReactJs, NodeJs, Javascript } from "../../images/images";
import InfoBar from "../util/InfoBar";
import Style from "./Style";

const Sidebar = () => {
  const classes = Style();

  const [open, setOpen] = useState(false);

  const { photoURL, displayName } = useSelector((state) => state.user);

  const toggle = () => {
    setOpen(!open);
  };

  return (
    <Paper elevation={0} className={classes.sidebar}>
      <Scrollbars autoHide autoHideDuration={200}>
        {/* User info */}
        <InfoBar Source={<Avatar src={photoURL} />} title={displayName} />
        {/* Top item */}
        <InfoBar Source={<Avatar src={FacebookPages} />} title={"Pages"} />
        <InfoBar Source={<Avatar src={FacebookCovid} />} title={"Covid Information Center"} />
        <InfoBar Source={<Avatar src={FacebookFriends} />} title={"Friends"} />
        <InfoBar Source={<Avatar src={FacebookGroups} />} title={"Groups"} />
        <InfoBar Source={<Avatar src={FacebookMarketplace} />} title={"Marketplace"} />
        {/* Bottom item */}
        {open && (
          <>
            <InfoBar Source={<Avatar src={FacebookAdCenter} />} title={"Ad Center"} />
            <InfoBar Source={<Avatar src={FacebookAdsManager} />} title={"Ads Manager"} />
            <InfoBar Source={<Avatar src={FacebookBloodDonation} />} title={"Blood Donation"} />
            <InfoBar Source={<Avatar src={FacebookBuyAndSell} />} title={"Buy and Cell"} />
            <InfoBar Source={<Avatar src={FacebookCrisis} />} title={"Crisis Response"} />
            <InfoBar Source={<Avatar src={FacebookEvents} />} title={"Events"} />
            <InfoBar Source={<Avatar src={FacebookFavourites} />} title={"Favourites"} />
            <InfoBar Source={<Avatar src={FacebookFilms} />} title={"Films"} />
            <InfoBar Source={<Avatar src={FacebookFriendList} />} title={"Friend List"} />
            <InfoBar Source={<Avatar src={FacebookFundrisers} />} title={"Fundrisers"} />
            <InfoBar Source={<Avatar src={FacebookGames} />} title={"Games"} />
            <InfoBar Source={<Avatar src={FacebookGameVideos} />} title={"Game Videos"} />
          </>
        )}
        {/* Toggle button */}
        <InfoBar
          Source={
            <Avatar>
              <ExpandMoreIcon style={{ transform: open && "rotate(180deg)" }} />
            </Avatar>
          }
          title={open ? "See Less" : "See More"}
          onClick={toggle}
        />
        <Divider style={{ margin: "5px 10px" }} />
        <h4 style={{ margin: "10px 10px" }}>Your short cuts</h4>
        <InfoBar Source={<Avatar src={ReactNative} />} title={"React Native Developer Community"} />
        <InfoBar Source={<Avatar src={ReactJs} />} title={"React.JS developers -2021"} />
        <InfoBar Source={<Avatar src={NodeJs} />} title={"NodeJS developers"} />
        <InfoBar Source={<Avatar src={Javascript} />} title={"Javascript"} />
      </Scrollbars>
    </Paper>
  );
};

export default Sidebar;
