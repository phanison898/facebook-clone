import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100%",
    borderRadius: 0,
  },
  app__header: {
    height: "8vh",
    borderBottom: "1px solid rgba(212, 212, 212,0.2)",
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
    height: "220px",
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
    height: "auto",
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
