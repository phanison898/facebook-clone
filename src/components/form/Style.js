import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  upload: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    padding: "0 10px",
    borderRadius: 10,
    boxShadow: "0px 5px 17px -10px rgba(0,0,0,0.7)",
  },
  upload__header: {
    flex: 6,
    display: "flex",
    alignItems: "center",
  },
  header__form: {
    flex: 1,
    height: "50%",
    display: "flex",
    alignItems: "center",
    marginLeft: 10,
    borderRadius: 999,
    backgroundColor: "lightgrey",
    overflow: "hidden",
    "& > input": {
      height: "100%",
      flex: 1,
      border: 0,
      outlineWidth: 0,
      paddingLeft: 10,
      backgroundColor: "transparent",
    },
    "& > button": {
      height: "100%",
      display: "flex",
      alignItems: "center",
      padding: "0 10px",
      border: 0,
      outlineWidth: 0,
      backgroundColor: "#2e81f4",
      color: "white",
      cursor: "pointer",
      fontWeight: 600,
    },
  },
  selectedFile: {
    display: "flex",
    alignItems: "center",
    paddingBottom: 10,
    paddingLeft: 60,
  },
  upload__media: {
    flex: 4,
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    margin: "0 10px",
  },
  media__options: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    borderRadius: 10,
    transition: "all 0.4s ease",
    "&:hover": {
      backgroundColor: "lightgrey",
    },
    "& >h4": {
      marginLeft: 10,
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },
  },
}));