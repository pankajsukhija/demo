import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Home from "./Components/home/home";
import Detail from "./Components/detail/detail";
const useStyles = makeStyles({
  root: {
    flexGrow: 1
  }
});

function App() {
  const classes = useStyles();
  return (
    <Router>
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Toolbar>
            <Typography variant="h6" color="inherit">
              Demo App
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
      <Route path="/" exact component={Home} />
      <Route path="/Home" component={Home} />
      <Route path="/details/" component={Detail} />
    </Router>
  );
}

export default App;
