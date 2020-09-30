
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button'

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import {withRouter} from 'react-router-dom';
import Bags from './Bags'
import { Link as RouterLink, useHistory } from 'react-router-dom'
import logo from "../assets/logo.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

 const MenuAppBar =(props)=>{
  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
    
      <AppBar position="static">
        <Toolbar>
          <IconButton component={RouterLink} to='/' edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
<img src={logo} width ="60px" highet="10px" component={RouterLink} to='/'></img>

          </IconButton>
          <Typography variant="h6" className={classes.title}>

       </Typography>
          {auth && (
            <div>


             <Button  component={RouterLink} to="/SlideShow" color="inherit" className={classes.title}>
            SlideShow
          </Button>

           <Button  component={RouterLink} to="/contact" color="inherit" className={classes.title}>
            contact
          </Button>

              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
             <IconButton color="secondary" aria-label="add to shopping cart">
             <AddShoppingCartIcon />
             </IconButton>
                   </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose} component={RouterLink} to='/Bags'> 
                Bags 
                {/* <Link className="navbar-brand" to="/Bags">
                  
                   </Link> */}

                 </MenuItem>
                <MenuItem onClick={handleClose} component={RouterLink} to='/Bottels'>Bottles</MenuItem>
                
              </Menu>











            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default  MenuAppBar