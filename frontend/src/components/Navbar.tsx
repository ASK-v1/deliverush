import { Link } from 'react-router-dom';
import '../styles/navbar.scss';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import React, { useState, useEffect } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CloseIcon from '@mui/icons-material/Close';
import Autocomplete from '@mui/material/Autocomplete';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import CircularProgress from '@mui/material/CircularProgress';

type Anchor = 'left' | 'right';

function sleep(delay = 0) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

const option = ['1', '2', '3', '4', '5'];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState<Array<string>>([]);
  const loading = open && options.length === 0;

  useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    (async () => {
      await sleep(1000);

      if (active) {
        setOptions(option);
      }
    })();

    return () => {
      active = false;
    };
  }, [loading]);

  useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  const [state, setState] = useState({
    left: false,
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }
      setState({ ...state, [anchor]: open });
    };

  return (
    <div className="navbar">
      <div className="navbar-left">
        <Button onClick={toggleDrawer('left', true)}>
          <MenuIcon className="navbar-menu-icon" />
        </Button>
        <Drawer anchor={'left'} open={state['left']} onClose={toggleDrawer('left', false)}>
          <Box sx={{ width: 350 }} onKeyDown={toggleDrawer('left', false)}>
            <CloseIcon onClick={toggleDrawer('left', false)} className="navbar-close" />
            <List>
              <ListItem button key={'Home'}>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary={'Home'} />
              </ListItem>
              <Divider />
              <ListItem button key={'Log In'}>
                <ListItemIcon>
                  <AccountCircleIcon />
                </ListItemIcon>
                <ListItemText primary={'Log In'} />
              </ListItem>
              <Divider />
              <ListItem button key={'Sign Up'}>
                <ListItemIcon>
                  <AccountCircleIcon />
                </ListItemIcon>
                <ListItemText primary={'Sign Up'} />
              </ListItem>
            </List>
          </Box>
        </Drawer>

        <Autocomplete
          sx={{
            bgcolor: 'background.paper',
            minWidth: 300,
          }}
          noOptionsText="Sorry, we couldn't find that restaurant."
          size="small"
          onOpen={() => {
            setOpen(true);
          }}
          onClose={() => {
            setOpen(false);
          }}
          open={open}
          isOptionEqualToValue={(option, value) => option === value}
          getOptionLabel={(option) => option}
          options={options}
          loading={loading}
          selectOnFocus
          popupIcon={false}
          autoHighlight
          clearIcon={false}
          renderInput={(params) => (
            <TextField
              {...params}
              placeholder="Search"
              InputProps={{
                ...params.InputProps,
                startAdornment: <SearchIcon style={{ marginRight: '5px' }} fontSize="medium" />,
                endAdornment: (
                  <React.Fragment>
                    {loading ? <CircularProgress color="inherit" size={20} /> : null}
                    {params.InputProps.endAdornment}
                  </React.Fragment>
                ),
              }}
            />
          )}
        />
      </div>

      <Link to="/">
        <img className="navbar-logo" src="/images/logo.png" width={175} alt="logo" />
      </Link>

      <div className="navbar-right">
        <Link to="/login">
          <button className="navbar-login">Log In</button>
        </Link>
        <button className="navbar-cart" onClick={toggleDrawer('right', true)}>
          <ShoppingCartIcon />
          <h2>0</h2>
        </button>

        <Drawer anchor={'right'} open={state['right']} onClose={toggleDrawer('right', false)}>
          <Box sx={{ width: 350 }} onKeyDown={toggleDrawer('right', false)}>
            <CloseIcon onClick={toggleDrawer('right', false)} className="navbar-close" />
            <h1>Your cart is empty Add items to get started</h1>
          </Box>
        </Drawer>
      </div>
    </div>
  );
}
