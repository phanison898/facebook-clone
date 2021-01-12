import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Grid, Hidden, Paper } from "@material-ui/core";
import Login from "./components/login/Login";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import Contacts from "./components/contacts/Contacts";
import Stories from "./components/stories/Stories";
import Form from "./components/form/Form";
import Posts from "./components/posts/Posts";
import Style from "./Style";

const App = () => {
  const { displayName, photoURL } = useSelector((state) => state.user);
  const mode = useSelector((state) => state.util);

  const [userData, setUserData] = useState({
    username: displayName,
    profileImage: photoURL,
  });

  useEffect(() => {
    setUserData({
      username: displayName,
      profileImage: photoURL,
    });
  }, [displayName]);

  const theme = createMuiTheme({
    palette: {
      type: mode ? "dark" : "light",
    },
  });
  const classes = Style();
  return (
    <ThemeProvider theme={theme}>
      <Paper elevation={0} className={classes.root}>
        {!userData.username ? (
          <Login />
        ) : (
          <Grid className={classes.app}>
            <Grid item container className={classes.app__header}>
              {/* ----Header---- */}
              <Header />
            </Grid>
            <Grid item container className={classes.app__body}>
              {/* ----Body---- */}
              <Hidden smDown>
                <Grid item container className={classes.body__left} md={3}>
                  {/* ----Sidebar---- */}
                  <Sidebar />
                </Grid>
              </Hidden>
              <Grid item container className={classes.body__feed} xs={12} sm={8} md={6}>
                {/* ----Feed---- */}
                <Grid item container className={classes.feed__stories}>
                  {/* ----Stories---- */}
                  <Stories />
                </Grid>
                <Grid item container className={classes.feed__form}>
                  {/* ----Upload Form---- */}
                  <Form />
                </Grid>
                <Grid item container className={classes.feed__posts}>
                  {/* ----Posts---- */}
                  <Posts />
                </Grid>
              </Grid>
              <Hidden smDown>
                <Grid item container className={classes.body__right} md={3}>
                  {/* ----Right sidebar---- */}
                  <Contacts />
                </Grid>
              </Hidden>
            </Grid>
          </Grid>
        )}
      </Paper>
    </ThemeProvider>
  );
};

export default App;
