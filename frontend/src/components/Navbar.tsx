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
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import DeleteIcon from '@mui/icons-material/Delete';

type Anchor = 'left' | 'right';

function sleep(delay = 0) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

const option = ['1', '2', '3', '4', '5'];

export default function Navbar() {
  const [amount, setAmount] = useState('1');

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
          <h2>3</h2>
        </button>

        <Drawer anchor={'right'} open={state['right']} onClose={toggleDrawer('right', false)}>
          <Box sx={{ width: 350 }} onKeyDown={toggleDrawer('right', false)}>
            <CloseIcon onClick={toggleDrawer('right', false)} className="navbar-close" />
            <div className="navbar-right-title">
              <div className="navbar-right-title-first">Your cart from</div>
              <div className="navbar-right-title-second">
                Happy Pizza <ArrowForwardIosIcon style={{ fontSize: '12px', marginTop: '9px' }} />
              </div>
            </div>
            <button className="navbar-right-checkout">
              Checkout <div className="navbar-right-checkout-price">$103.50</div>
            </button>

            <div className="navbar-right-divider-out" />

            {[1, 2, 3].map(() => (
              <div>
                <div className="navbar-right-cart">
                  <img
                    src="https://res.cloudinary.com/dpsbq1odp/image/upload/v1649237152/alan-hardman-SU1LFoeEUkk-unsplash_tv8nr0.jpg"
                    alt="cart"
                    width={132}
                    height={88}
                  />
                  <div className="navbar-right-cart-mid">
                    <div>
                      <div className="navbar-right-cart-mid-title">Ultimate Pepperoni</div>
                      <div className="navbar-right-cart-mid-type">
                        10 Inch Original Pepperoni Pizza
                      </div>
                    </div>

                    <div className="navbar-right-cart-mid-p-a">
                      <div className="navbar-right-cart-mid-p-a-price">$34.50</div>
                      <div className="navbar-right-cart-mid-p-a-amount">
                        <Select
                          sx={{
                            width: '53.3px',
                            height: '21.3px',
                            borderRadius: '20px',
                            fontSize: '12.5px',
                            backgroundColor: 'white',
                          }}
                          value={amount}
                          onChange={(event) => setAmount(event.target.value)}
                          autoWidth
                          placeholder={amount}
                        >
                          <MenuItem value={1}>1</MenuItem>
                          <MenuItem value={2}>2</MenuItem>
                          <MenuItem value={3}>3</MenuItem>
                          <MenuItem value={4}>4</MenuItem>
                          <MenuItem value={5}>5</MenuItem>
                          <MenuItem value={6}>6</MenuItem>
                          <MenuItem value={7}>7</MenuItem>
                          <MenuItem value={8}>8</MenuItem>
                          <MenuItem value={9}>9</MenuItem>
                        </Select>
                      </div>
                      <div className="navbar-right-cart-mid-p-a-delete">
                        <DeleteIcon
                          fontSize="small"
                          sx={{
                            borderRadius: '20px',
                            fontSize: '12.5px',
                            color: 'white',
                            backgroundColor: 'gray',
                            padding: '3px',
                            marginTop: '2px',
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="navbar-right-divider-in" />
              </div>
            ))}
          </Box>
        </Drawer>
      </div>
    </div>
  );
}
