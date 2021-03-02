import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Avatar, Paper, Divider } from "@material-ui/core";
import { Scrollbars } from "react-custom-scrollbars";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import * as images from "../../assets/images/images";
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
        <InfoBar key={displayName} Source={<Avatar src={photoURL} />} title={displayName} />
        {/* Top item */}
        {topRows.map(({ src, title }, i) => (
          <InfoBar
            key={`info-top-${i}`}
            Source={<Avatar src={src} />}
            title={title}
            transform={true}
          />
        ))}
        {/* Bottom items (display only when clicks show more button) */}
        {open && (
          <>
            {bottomRows.map(({ src, title }, i) => (
              <InfoBar key={`info-bottom-${i}`} Source={<Avatar src={src} />} title={title} />
            ))}
          </>
        )}
        {/* Toggle button (show more /show less) */}
        <InfoBar
          key={"expand-icon"}
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
          {yourLinks.map(({ src, title }, i) => (
            <InfoBar key={`info-links-${i}`} Source={<Avatar src={src} />} title={title} />
          ))}
        </>

        <Divider style={{ margin: "5px 10px" }} />

        {/* About Author */}
        <div className={classes.about__author}>
          <h4>Contact Developer</h4>
          <div>
            {author.map(({ src, url }, i) => (
              <a href={`${url}`} key={`author-link-${i}`} rel="noreferrer nofollow" target="_blank">
                {src}
              </a>
            ))}
          </div>
        </div>
      </Scrollbars>
    </Paper>
  );
};

const author = [
  { src: <GitHubIcon />, url: "https://github.com/phanison898" },
  { src: <LinkedInIcon />, url: "https://www.linkedin.com/in/phanison225/" },
  { src: <YouTubeIcon />, url: "https://www.youtube.com/channel/UC4FAldAo2Ow_2F447yggcqA" },
  { src: <InstagramIcon />, url: "https://www.instagram.com/phanison225/" },
  { src: <TwitterIcon />, url: "https://twitter.com/phanison225" },
];

const topRows = [
  { src: images.FacebookPages, title: "Pages" },
  { src: images.FacebookCovid, title: "Covid Information Center" },
  { src: images.FacebookFriends, title: "Friends" },
  { src: images.FacebookGroups, title: "Groups" },
  { src: images.FacebookMarketplace, title: "Marketplace" },
];

const bottomRows = [
  { src: images.FacebookAdCenter, title: "Ad Center" },
  { src: images.FacebookAdsManager, title: "Ads Manager" },
  { src: images.FacebookBloodDonation, title: "Blood Donation" },
  { src: images.FacebookBuyAndSell, title: "Buy and Cell" },
  { src: images.FacebookCrisis, title: "Crisis Response" },
  { src: images.FacebookEvents, title: "Events" },
  { src: images.FacebookFavourites, title: "Favourites" },
  { src: images.FacebookFilms, title: "Films" },
  { src: images.FacebookFriendList, title: "Friend List" },
  { src: images.FacebookFundrisers, title: "Fundrisers" },
  { src: images.FacebookGames, title: "Games" },
  { src: images.FacebookGameVideos, title: "Game Videos" },
];

const yourLinks = [
  { src: images.ReactNative, title: "React Native Developer Community" },
  { src: images.ReactJs, title: "React.JS developers -2021" },
  { src: images.NodeJs, title: "NodeJS developers" },
  { src: images.Javascript, title: "Javascript" },
];

export default Sidebar;
