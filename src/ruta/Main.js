import React, { useState } from "react";

import { makeStyles, createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "styled-components";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import RefreshIcon from "@material-ui/icons/Refresh";
import Brightness3Icon from "@material-ui/icons/Brightness3";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Btn from "./btn";
import * as bloque from "./btns";
import AllData from "./App";
import Card2 from "./cards/Card2";
import { useDarkMode } from "./styles/useDarkMode";
import { GlobalStyles } from "./styles/Globalstyle";
import { lightTheme, darkTheme } from "./styles/Themes";
import Toggle from "./styles/Toggler";
import "./styles/App.css";

import Titulo from "./titulo";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import { indigo } from "@material-ui/core/colors";

/*const isDark = window.matchMedia("(prefers-color-scheme:dark)").matches;
const lightTheme = {
  backgroundColor: "white",
  color: "black"
};

const darkTheme = {
  backgroundColor: "#35353a",
  color: "white"
};*/

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1)
    }
  },
  margin: {
    margin: theme.spacing(1)
  },
  extendedIcon: {
    marginRight: theme.spacing(1)
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center"
  }
}));

export default function MainJS() {
  const classes = useStyles();
  const [theme, themeToggler, mountedComponent] = useDarkMode();

  const themeMode = theme === "light" ? lightTheme : darkTheme;

  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <div className="App">
        <React.Fragment>
          <CssBaseline />
          <Container>
            <Toggle theme={theme} toggleTheme={themeToggler} />
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <Typography variant="h5" component="h5">
                  Calendario {datef}
                </Typography>
                <Titulo />
              </Paper>
            </Grid>
            <div className={classes.root}>
              <Button
                variant="outlined"
                color="secondary"
                onClick={refreshPage}
              >
                <RefreshIcon />
              </Button>
              <Divider />
            </div>{" "}
            <Typography gutterBottom variant="h5" component="h2">
              Todos los eventos
            </Typography>
            <AllData />
          </Container>
        </React.Fragment>
      </div>
    </ThemeProvider>
  );
}
export const light = {
  palette: {
    type: "light"
  }
};
export const dark = {
  palette: {
    type: "dark"
  }
};
