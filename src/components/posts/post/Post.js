import React, { forwardRef } from "react";
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
import Style from "./Style";

const Post = forwardRef(({ profile, username, timestamp, description, fileType, fileData }, ref) => {
  const classes = Style();
  return (
    <Paper elevation={2} ref={ref} className={classes.post}>
      <div className={classes.post__header}>
        <Avatar src={profile} />
        <div className={classes.header__info}>
          <h4>{username}</h4>
          <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
        </div>
        <MoreHorizOutlinedIcon />
      </div>
      <div className={classes.post__body}>
        <div className={classes.body__description}>
          <p>{description}</p>
        </div>
        {fileData && <div className={classes.body__image}>{fileType === "image" ? <img src={fileData} /> : <ReactPlayer url={fileData} controls={true} />}</div>}
      </div>
      <div className={classes.post__footer}>
        <div className={classes.footer__stats}>
          <FavoriteIcon style={{ color: "red", zIndex: 1 }} />
          <EmojiEmotionsIcon style={{ color: "orange", zIndex: 2 }} />
          <ThumbUpAltIcon style={{ color: " #2e81f4", zIndex: 3 }} />
          <h4>8</h4>
        </div>
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
            <ReplyOutlinedIcon />
            <h4>Share</h4>
          </div>
        </div>
      </div>
    </Paper>
  );
});

export default Post;
