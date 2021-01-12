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
        {topRows.map(({ src, title }) => (
          <InfoBar Source={<Avatar src={src} />} title={title} transform={true} />
        ))}
        {/* Bottom items (display only when clicks show more button) */}
        {open && (
          <>
            {bottomRows.map(({ src, title }) => (
              <InfoBar Source={<Avatar src={src} />} title={title} />
            ))}
          </>
        )}
        {/* Toggle button (show more /show less) */}
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

        {/* Your links section */}
        <h4 style={{ margin: "10px 10px" }}>Your short cuts</h4>
        <>
          {yourLinks.map(({ src, title }) => (
            <InfoBar Source={<Avatar src={src} />} title={title} />
          ))}
        </>
      </Scrollbars>
    </Paper>
  );
};

const topRows = [
  { src: FacebookPages, title: "Pages" },
  { src: FacebookCovid, title: "Covid Information Center" },
  { src: FacebookFriends, title: "Friends" },
  { src: FacebookGroups, title: "Groups" },
  { src: FacebookMarketplace, title: "Marketplace" },
];

const bottomRows = [
  { src: FacebookAdCenter, title: "Ad Center" },
  { src: FacebookAdsManager, title: "Ads Manager" },
  { src: FacebookBloodDonation, title: "Blood Donation" },
  { src: FacebookBuyAndSell, title: "Buy and Cell" },
  { src: FacebookCrisis, title: "Crisis Response" },
  { src: FacebookEvents, title: "Events" },
  { src: FacebookFavourites, title: "Favourites" },
  { src: FacebookFilms, title: "Films" },
  { src: FacebookFriendList, title: "Friend List" },
  { src: FacebookFundrisers, title: "Fundrisers" },
  { src: FacebookGames, title: "Games" },
  { src: FacebookGameVideos, title: "Game Videos" },
];

const yourLinks = [
  { src: ReactNative, title: "React Native Developer Community" },
  { src: ReactJs, title: "React.JS developers -2021" },
  { src: NodeJs, title: "NodeJS developers" },
  { src: Javascript, title: "Javascript" },
];

export default Sidebar;
