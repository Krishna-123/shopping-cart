import React from "react";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import CameraIcon from "@material-ui/icons/PhotoCamera";

const useStyles = makeStyles((theme) => ({
  icon: { marginRight: theme.spacing(2) },
}));

const Header = (props) => {
  const classes = useStyles();
  return (
    <>
      <AppBar position="relative">
        <Toolbar>
          <CameraIcon className={classes.icon} />
          <Typography variant="h6" color="inherit" noWrap>
            {props.children}
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
