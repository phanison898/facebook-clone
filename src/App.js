import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Grid, Hidden, Paper } from "@material-ui/core";
import Login from "./components/login/Login";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import Contacts from "./components/contacts/Contacts";
import Stories from "./components/stories/Stories";
import Form from "./components/form/Form";
import Posts from "./components/posts/Posts";
import { LoginAction, LogoutAction } from "./store/actions/auth";
import { auth } from "./firebase";
import { lightPrimary } from "./assets/Colors";
import Style from "./Style";

const App = () => {
  const dispatch = useDispatch();

  const { displayName } = useSelector((state) => state.user);

  const mode = useSelector((state) => state.util);

  const muiTheme = createMuiTheme({
    palette: {
      type: mode ? "dark" : "light",
    },
  });

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(LoginAction(authUser));
      } else {
        dispatch(LogoutAction());
      }
    });
  }, [dispatch]);

  const classes = Style();
  return (
    <ThemeProvider theme={muiTheme}>
      <Paper
        elevation={0}
        className={classes.root}
        style={{ backgroundColor: !mode && lightPrimary }}
      >
        {!displayName ? (
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
