import { makeStyles } from "@material-ui/core/styles";
import { darkSecondary, darkPrimary } from "../../assets/Colors";

export default makeStyles((theme) => ({
  header: {
    widows: "100%",
    height: "100%",
    backgroundColor: theme.palette.type === "dark" && darkPrimary,
  },
  header__logo: {
    height: "100%",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 10,
  },
  logo__image: {
    height: 40,
    [theme.breakpoints.down("xs")]: {
      height: 32,
    },
  },
  logo__search: {
    flex: 0.7,
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    marginLeft: 10,
    padding: 6,
    backgroundColor: theme.palette.type === "dark" ? darkSecondary : "lightgrey",
    borderRadius: 999,
    flexShrink: 1,
    "& > input": {
      flex: 1,
      outlineWidth: 0,
      border: 0,
      backgroundColor: "transparent",
      color: theme.palette.type === "dark" && "lightgrey",
      "&::placeholder": {
        color: theme.palette.type === "dark" && "lightgrey",
      },
    },
  },
  header__nav: {
    display: "flex",
    height: "100%",
    justifyContent: "space-evenly",
    alignItems: "center",
    padding: "4px 60px",
    [theme.breakpoints.down("md")]: {
      padding: "4px 30px",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "4px 10px",
    },
    [theme.breakpoints.down("xs")]: {
      padding: 4,
    },
    color: "grey",
  },

  nav__links: {
    flex: 1,
    display: "flex",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    cursor: "pointer",
    transition: "all 0.5s ease",
    color: theme.palette.type === "dark" && "lightgrey",
    "& > .MuiSvgIcon-root": {
      fontSize: 30,
    },
    "&:hover": {
      backgroundColor: theme.palette.type === "dark" ? darkSecondary : "lightgrey",
    },
    [theme.breakpoints.down("xs")]: {
      justifyContent: "space-evenly",
      "&:hover": {
        backgroundColor: "transparent",
      },
    },
  },

  nav__links__specail: {
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
    "& > *": {
      width: 30,
      height: 30,
    },
  },

  header__userinfo: {
    height: "100%",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    padding: 10,
    "& > .MuiAvatar-root": {
      cursor: "pointer",
      width: 40,
      height: 40,
      [theme.breakpoints.down("xs")]: {
        width: 32,
        height: 32,
      },
    },
  },
  userinfo__options: {
    flex: 0.8,
    height: "100%",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginLeft: 10,
    color: theme.palette.type === "dark" ? "lightgrey" : "grey",
    "& > *": {
      borderRadius: 999,
      cursor: "pointer",
      fontSize: 30,
      [theme.breakpoints.down("md")]: {
        fontSize: 24,
      },
      backgroundColor: theme.palette.type === "dark" ? darkSecondary : "lightgrey",
      transition: "all 0.3s ease",
      "&:hover": {
        backgroundColor: "grey",
        color: "white",
      },
    },
  },
}));
