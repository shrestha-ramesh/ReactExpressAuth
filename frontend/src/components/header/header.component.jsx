import {
  Toolbar,
  Typography,
  AppBar,
  makeStyles,
  IconButton,
  Button,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import axios from "axios";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginRight: 10,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));
const Header = function () {
  useEffect(() => {
    verifyUser();
  }, []);

  const verifyUser = async() => {
    const token = localStorage.getItem("Auth");
    console.log(token)
    if (!token) {
      return window.location.href = "/login";
    }
    const config = {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
    }
      try{
        const result = await axios.get("http://localhost:5000/auth", config);
        console.log(result);
        if(result.data !== 'SUCCESS'){
          window.location.href="/login";
        }
      }catch(e){
        console.log(e);
      }
  }
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            <Link
              to="/"
              style={{
                fontWeight: "bold",
                color: "red",
                textDecoration: "none",
              }}
            >
              First page
            </Link>
          </Typography>
          <Typography variant="h6" className={classes.title}>
            <Link
              to="/second"
              style={{
                fontWeight: "bold",
                color: "red",
                textDecoration: "none",
              }}
            >
              Second Page
            </Link>
          </Typography>
          <Button
            color="inherit"
            onClick={() => {
              localStorage.clear();
              window.location.href = "/login";
            }}
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default Header;
