import { makeStyles } from "@material-ui/core/styles";
import { blue, green, red } from "@material-ui/core/colors";

export default makeStyles((theme) => ({
  app: {},
  app__header: {
    height: "8vh",
    boxShadow: "0px 5px 17px -10px rgba(0,0,0,0.75)",
    zIndex: 100,
  },
  app__body: {
    height: "92vh",
    display: "flex",
    justifyContent: "center",
    overflow: "hidden",
  },
  body__left: {
    width: "100%",
    height: "100%",
  },
  body__feed: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignContent: "flex-start",
    overflowY: "scroll",
    "&::-webkit-scrollbar": {
      width: 0,
      background: "transparent",
    },
  },

  feed__stories: {
    width: "85%",
    [theme.breakpoints.down("md")]: {
      width: "90%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "95%",
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
    height: "35%",
    overflow: "hidden",
  },

  feed__form: {
    width: "85%",
    [theme.breakpoints.down("md")]: {
      width: "90%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "95%",
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
    height: "20%",
  },

  feed__posts: {
    width: "85%",
    [theme.breakpoints.down("md")]: {
      width: "90%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "95%",
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
    height: "auto",
    paddingBottom: 10,
  },
  body__right: {
    width: "100%",
    height: "100%",
  },
}));
