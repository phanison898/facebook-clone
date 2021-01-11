import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  post: {
    width: "100%",
    height: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: 10,
    //borderRadius: 10,
    //boxShadow: "0px 5px 10px -7px rgba(0,0,0,0.75)",
  },
  post__header: {
    width: "100%",
    height: "auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    "& > .MuiAvatar-root": {
      cursor: "pointer",
    },
    "& > .MuiSvgIcon-root": {
      cursor: "pointer",
      borderRadius: 999,
      transition: "all 0.3s ease",
      "&:hover": {
        backgroundColor: "grey",
      },
    },
  },
  header__info: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginLeft: 10,
    "& > h4": {
      fontSize: 18,
      fontWeight: 700,
    },
    "& > p": {
      color: "grey",
      fontSize: 12,
    },
  },
  post__body: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },
  body__description: {
    display: "flex",
    alignItems: "center",
    padding: 10,
    paddingTop: 0,
  },
  body__image: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    overflow: "hidden",
    "& > img": {
      width: "100%",
      height: "auto",
      objectFit: "contain",
      transition: "all 0.5s ease",
      "&:hover": {
        transform: "scale(1.1)",
      },
    },
  },
  post__footer: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: 10,
    paddingBottom: 0,
  },
  footer__stats: {
    display: "flex",
    alignItems: "center",
    paddingBottom: 10,
    borderBottom: "1px solid lightgrey",
    "& > .MuiSvgIcon-root": {
      fontSize: 16,
    },
  },
  footer__actions: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    padding: 4,
  },
  action__icons: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 2,
    padding: "5px 0",
    borderRadius: 4,
    cursor: "pointer",
    transition: "all 0.3s ease",
    color: "grey",
    "&:hover": {
      backgroundColor: "lightgrey",
    },
    "& > h4": {
      marginLeft: 4,
    },
  },
}));