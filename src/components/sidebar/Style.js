import { makeStyles } from "@material-ui/core/styles";
import { lightPrimary } from "../../assets/Colors";

export default makeStyles((theme) => ({
  sidebar: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    padding: "0 8",
    borderRadius: 0,
    backgroundColor: theme.palette.type === "light" && lightPrimary,
  },
}));
