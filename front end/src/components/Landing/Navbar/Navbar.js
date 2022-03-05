import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, IconButton, Toolbar } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { useNavigate } from 'react-router-dom';
import './navbar.css';

const useStyles = makeStyles((theme) => ({
   
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Nunito',
  },
  appbar: {
    background: 'none',
  },
  appbarWrapper: {
    width: '80%',
    margin: '0 auto',
  },
  appbarTitle: {
    flexGrow: '1',
  },
  icon: {
    color: '#fff',
    fontSize: '2rem',
  },
  colorText: {
    color: '#5AFF3D',
  },
  colorText2: {
    color: '#FFFFFF',
  },
}));
export default function Navbar() {
  const classes = useStyles();

  const navigate = useNavigate();

  function handleClickHome() {
    navigate("/");
  }
  function handleClickSingnin() {
    navigate("/signin");
  }
  function handleClickSignout() {
    navigate("/signup");
  }
  
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className={classes.root} id="header">
      <AppBar className={classes.appbar}  color="transparent" elevation={0}>
        <Toolbar className={classes.appbarWrapper}>
          <h1 className={classes.appbarTitle} id="titleHome" onClick={handleClickHome}>
            <span className={classes.colorText2}>Resume</span><span className={classes.colorText}>Builder.</span>
          </h1>
          <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
          <IconButton>
            <AccountCircleIcon className={classes.icon} />
          </IconButton>
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClickSingnin}>Sign in</MenuItem>
        <MenuItem onClick={handleClickSignout}>Register</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
        </Toolbar>
      </AppBar>

    </div>
  );
}
