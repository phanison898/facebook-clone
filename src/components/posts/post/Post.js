import React, { forwardRef, useEffect, useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Paper from "@material-ui/core/Paper";
import MoreHorizOutlinedIcon from "@material-ui/icons/MoreHorizOutlined";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import ReplyOutlinedIcon from "@material-ui/icons/ReplyOutlined";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ReactPlayer from "react-player";
import ReactTimeago from "react-timeago";
import Style from "./Style";

const Post = forwardRef(
  ({ profile, username, timestamp, description, fileType, fileData }, ref) => {
    const classes = Style();

    const [likesCount, setLikesCount] = useState(1);
    const [heartIcontOrder, setHeartIcontOrder] = useState(1);
    const [smileIconOrder, setSmileIconOrder] = useState(1);
    const [thumsUpIconOrder, setThumsUpIconOrder] = useState(1);

    useEffect(() => {
      setLikesCount(Math.floor(Math.random() * 1000) + 1);
      setHeartIcontOrder(Math.floor(Math.random() * (3 - 1 + 1)) + 1);
      setSmileIconOrder(Math.floor(Math.random() * (3 - 1 + 1)) + 1);
      setThumsUpIconOrder(Math.floor(Math.random() * (3 - 1 + 1)) + 1);
    }, []);

    const Reactions = () => {
      return (
        <div className={classes.footer__stats}>
          <div>
            <FavoriteIcon style={{ color: "red", order: `${heartIcontOrder} ` }} />
            <EmojiEmotionsIcon style={{ color: "orange", order: `${smileIconOrder} ` }} />
            <ThumbUpAltIcon style={{ color: " #2e81f4", order: `${thumsUpIconOrder} ` }} />
          </div>
          <h4>{likesCount}</h4>
        </div>
      );
    };

    return (
      <Paper ref={ref} className={classes.post}>
        <div className={classes.post__header}>
          <Avatar src={profile} />
          <div className={classes.header__info}>
            <h4>{username}</h4>
            <p>
              <ReactTimeago date={new Date(timestamp?.toDate()).toUTCString()} units="minute" />
            </p>
          </div>
          <MoreHorizOutlinedIcon />
        </div>
        <div className={classes.post__body}>
          <div className={classes.body__description}>
            <p>{description}</p>
          </div>
          {fileData && (
            <div className={classes.body__image}>
              {fileType === "image" ? (
                <img src={fileData} alt="post" />
              ) : (
                <ReactPlayer url={fileData} controls={true} />
              )}
            </div>
          )}
        </div>
        <div className={classes.post__footer}>
          <Reactions />
          <div className={classes.footer__actions}>
            <div className={classes.action__icons}>
              <ThumbUpAltOutlinedIcon />
              <h4>Like</h4>
            </div>
            <div className={classes.action__icons}>
              <ChatBubbleOutlineOutlinedIcon />
              <h4>Comment</h4>
            </div>
            <div className={classes.action__icons}>
              <ReplyOutlinedIcon style={{ transform: "scaleX(-1)" }} />
              <h4>Share</h4>
            </div>
          </div>
        </div>
      </Paper>
    );
  }
);

export default Post;
