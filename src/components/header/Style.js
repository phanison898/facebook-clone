import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  header: {
    widows: "100%",
    height: "100%",
  },
  header__logo: {
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
    backgroundColor: "lightgrey",
    borderRadius: 999,
    flexShrink: 1,
    "& > input": {
      flex: 1,
      outlineWidth: 0,
      border: 0,
      backgroundColor: "transparent",
    },
  },
  header__nav: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    padding: 4,
    color: "grey",
    "& > .MuiSvgIcon-root": {
      [theme.breakpoints.up("sm")]: {
        flex: 1,
      },
      borderRadius: 8,
      cursor: "pointer",
      transition: "all 0.5s ease",
      "&:hover": {
        backgroundColor: "lightgrey",
      },
    },
  },
  header__userinfo: {
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
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginLeft: 10,
    color: "grey",
    "& > .MuiSvgIcon-root": {
      borderRadius: 999,
      cursor: "pointer",
      fontSize: 36,
      [theme.breakpoints.down("md")]: {
        fontSize: 28,
      },
      backgroundColor: "lightgrey",
      transition: "all 0.5s ease",
      "&:hover": {
        backgroundColor: "grey",
        color: "white",
      },
    },
  },
}));
