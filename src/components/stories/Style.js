import { makeStyles } from "@material-ui/core/styles";
import { FacebookBlue, darkSecondary } from "../../assets/Colors";

const Style = makeStyles((theme) => ({
  stories: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    overflow: "auto",
    "&::-webkit-scrollbar": {
      height: 7,
    },
    "&::-webkit-scrollbar-track": {},
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: theme.palette.type === "dark" ? darkSecondary : "lightgrey",
      borderRadius: 10,
    },
  },
  story: {
    position: "relative",
    minWidth: "100px",
    height: "90%",
    margin: "0 5px",
    borderRadius: "10px",
    cursor: "pointer",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    transition: "transform 0.3s ease",
    boxShadow: "0px 5px 10px -7px rgba(0, 0, 0, 0.75)",
    "& > h4": {
      position: "absolute",
      bottom: "20px",
      left: "20px",
      color: "white",
      fontWeight: "600",
    },
    "&:hover": {
      transform: "scale(1.07)",
    },
  },
  profilePic: {
    margin: "5px",
    border: `5px solid ${FacebookBlue}`,
  },
}));

export default Style;
