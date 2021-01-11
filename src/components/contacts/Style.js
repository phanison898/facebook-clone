import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  contacts: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    padding: 8,
    borderRadius: 0,
    overflowY: "auto",
    overflowX: "hidden",
  },
  contacts__tab: {
    display: "flex",
    alignItems: "center",
    padding: 10,
    "& > h4": {
      flex: 1,
    },
    "& > .MuiSvgIcon-root": {
      marginLeft: 10,
      cursor: "pointer",
    },
  },
}));
