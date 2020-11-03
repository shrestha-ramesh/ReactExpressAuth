import {
    Toolbar,
    Typography,
    AppBar,
    makeStyles,
    IconButton,
    Button,
  } from "@material-ui/core";
  import MenuIcon from "@material-ui/icons/Menu";
  import React,{useEffect} from "react";
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
      const getName = localStorage.getItem("Auth");
      if (!getName) {
        console.log("Did not find name");
      }
    }, []);
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
            <Button color="inherit" onClick={() => localStorage.clear()}>
              Logout
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  };
  export default Header;
  