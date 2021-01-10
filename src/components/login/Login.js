import React from "react";
import { useDispatch } from "react-redux";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Logo from "../../images/logo.png";
import TextLogo from "../../images/fb_text.png";
import { auth, provider } from "../../firebase";
import { LoginAction } from "../../store/actions/auth";

const Login = () => {
  const classes = Style();
  const dispatch = useDispatch();
  const login = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch(LoginAction(result.user));
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className={classes.login}>
      <img src={Logo} style={{ height: 200 }} />
      <img src={TextLogo} style={{ width: 100 }} />
      <Button onClick={login}>Login with Google</Button>
    </div>
  );
};

const Style = makeStyles((theme) => ({
  login: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    "& > *": {
      margin: 20,
    },
    "& >.MuiButtonBase-root": {
      backgroundColor: "#2e81f4",
      color: "white",
      transition: "all 0.3s ease",
    },
  },
}));

export default Login;
