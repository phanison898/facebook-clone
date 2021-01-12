import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Chip, Paper, useTheme, Divider } from "@material-ui/core";
import imageCompression from "browser-image-compression";
import Avatar from "@material-ui/core/Avatar";
import VideocamRoundedIcon from "@material-ui/icons/VideocamRounded";
import PhotoRoundedIcon from "@material-ui/icons/PhotoRounded";
import EmojiEmotionsOutlinedIcon from "@material-ui/icons/EmojiEmotionsOutlined";
import firebase from "firebase";
import db from "../../firebase";
import Styles from "./Style";

const Form = () => {
  const classes = Styles();
  const theme = useTheme();
  const { displayName, photoURL } = useSelector((state) => state.user);

  const [uploadData, setUploadData] = useState({
    description: "",
    file: {
      type: "",
      name: "",
      data: "",
    },
  });

  const handleSubmitButton = (e) => {
    e.preventDefault();
    // firebase logic
    if (uploadData.description || uploadData.file.data) {
      db.collection("posts").add({
        profile: photoURL,
        username: displayName,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        description: uploadData.description,
        fileType: uploadData.file.type,
        fileName: uploadData.file.name,
        fileData: uploadData.file.data,
      });
      resetState();
    } else {
      alert("please enter something..");
    }
  };

  const imageUploadHandler = async (e) => {
    const inputFile = e.target.files[0];
    const inputFileType = inputFile.type.split("/")[0];
    const inputFileName = inputFile.name;

    let compressedInputFile = inputFile;
    if (inputFileType === "image") {
      //compression algorithm
      const compressionOptions = {
        maxSizeMB: 1,
        maxWidthOrHeight: 1920,
        useWebWorker: true,
      };

      try {
        compressedInputFile = await imageCompression(inputFile, compressionOptions);
      } catch (error) {
        alert(error);
      }
    }

    let inputFileDataBase64;
    const file = new FileReader();
    if (compressedInputFile) {
      file.onloadend = (fileLoadedEvent) => {
        inputFileDataBase64 = fileLoadedEvent.target.result;
        setUploadData({
          ...uploadData,
          file: {
            type: inputFileType,
            name: inputFileName,
            data: inputFileDataBase64,
          },
        });
      };
      file.readAsDataURL(compressedInputFile);
    }
  };

  const resetState = () => {
    setUploadData({
      description: "",
      file: {
        type: "",
        name: "",
        data: "",
      },
    });
  };

  return (
    <Paper className={classes.upload}>
      <div className={classes.upload__header}>
        <Avatar src={photoURL} />
        <form className={classes.header__form} onSubmit={handleSubmitButton}>
          <input placeholder={`What's on your mind, ${displayName}?`} value={uploadData.description} onChange={(e) => setUploadData({ ...uploadData, description: e.target.value })} />
          <input id="upload-image" type="file" accept="image/*,image/heif,image/heic,video/*,video/mp4,video/x-m4v,video/x-matroska,.mkv" hidden onChange={imageUploadHandler} />
          <button type="submit">Post</button>
        </form>
      </div>
      {uploadData.file.name && (
        <div className={classes.selectedFile}>
          <Chip color="primary" size="small" onDelete={resetState} icon={uploadData.file.type === "image" ? <PhotoRoundedIcon /> : <VideocamRoundedIcon />} label={uploadData.file.name} />
        </div>
      )}
      <Divider />

      <div className={classes.upload__media}>
        <div className={classes.media__options}>
          <VideocamRoundedIcon style={{ color: "red" }} />
          <h4>Live video</h4>
          {console.log(theme.palette.type)}
        </div>
        <label htmlFor="upload-image" className={classes.media__options}>
          <PhotoRoundedIcon style={{ color: "green" }} />
          <h4>Photo/Video</h4>
        </label>
        <div className={classes.media__options}>
          <EmojiEmotionsOutlinedIcon style={{ color: "orange" }} />
          <h4>Feeling/Activity</h4>
        </div>
      </div>
    </Paper>
  );
};

export default Form;
