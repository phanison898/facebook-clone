import { makeStyles } from "@material-ui/core/styles";
import { darkPrimary, darkSecondary, FacebookBlue, textDark } from "../../assets/Colors";

export default makeStyles((theme) => ({
  upload: {
    width: "100%",
    height: "auto",
    display: "flex",
    flexDirection: "column",
    marginTop: 10,
    padding: "0 10px",
    borderRadius: 10,
    backgroundColor: theme.palette.type === "dark" && darkPrimary,
    [theme.breakpoints.down("xs")]: {
      borderRadius: 0,
      border: 0,
      boxShadow: "none",
    },
  },
  upload__header: {
    height: "80px",
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
    backgroundColor: theme.palette.type === "dark" ? darkSecondary : "lightgrey",
    overflow: "hidden",
    [theme.palette.type === "light"]: {},
    "& > input": {
      height: "100%",
      flex: 1,
      border: 0,
      outlineWidth: 0,
      paddingLeft: 15,
      color: theme.palette.type === "dark" && "lightgrey",
      fontSize: 14,
      fontWeight: 600,
      backgroundColor: "transparent",
      "&::placeholder": {
        fontWeight: 600,
        fontSize: 15,
        color: theme.palette.type === "dark" && textDark,
        [theme.breakpoints.down("xs")]: {
          fontWeight: 600,
          fontSize: 12,
        },
      },
    },
    "& > button": {
      height: "100%",
      display: "flex",
      alignItems: "center",
      padding: "0 10px",
      border: 0,
      outlineWidth: 0,
      backgroundColor: FacebookBlue,
      color: "white",
      cursor: "pointer",
      fontWeight: 600,
      [theme.breakpoints.down("xs")]: {
        fontSize: 14,
      },
    },
  },
  selectedFile: {
    display: "flex",
    alignItems: "center",
    paddingBottom: 10,
    paddingLeft: 52,
  },
  uploading: {
    display: "flex",
    alignItems: "center",
    marginBottom: 10,
    "& > p": {
      fontSize: 12,
      fontWeight: 600,
    },
  },
  progress: {
    flex: 1,
    height: 8,
    marginRight: 5,
    borderRadius: 10,
    backgroundColor: theme.palette.type === "dark" ? darkSecondary : "lightgrey",
    "& > *": {
      backgroundColor: FacebookBlue,
    },
  },
  upload__media: {
    height: "50px",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    padding: "2px 0",
  },
  media__options: {
    flex: 1,
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    borderRadius: 4,
    transition: "all 0.4s ease",
    "&:hover": {
      backgroundColor: theme.palette.type === "dark" ? darkSecondary : "lightgrey",
    },
    "& > h4": {
      color: theme.palette.type === "dark" && textDark,
      marginLeft: 10,
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },
  },
}));
