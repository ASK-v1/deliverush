import '../styles/search.scss';
import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import CircularProgress from '@mui/material/CircularProgress';

function sleep(delay = 0) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

const cities = ['San Francisco', 'Los Angeles', 'Chicago', 'Boston', 'Seattle'];

export default function Search() {
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
        setOptions(cities);
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

  return (
    <div className="search">
      <h1>Order food to your door</h1>
      <div className="search-auto-find">
        <Autocomplete
          className="auto"
          onOpen={() => {
            setOpen(true);
          }}
          onClose={() => {
            setOpen(false);
          }}
          open={open}
          noOptionsText="Sorry, we couldn't find that address."
          isOptionEqualToValue={(option, value) => option === value}
          getOptionLabel={(option) => option}
          options={options}
          loading={loading}
          selectOnFocus
          autoHighlight
          clearIcon
          renderInput={(params) => (
            <TextField
              {...params}
              placeholder="Enter delivery address"
              InputProps={{
                ...params.InputProps,
                startAdornment: <SearchIcon style={{ marginRight: '5px' }} fontSize="large" />,
                endAdornment: (
                  <React.Fragment>
                    {loading ? <CircularProgress color="inherit" size={25} /> : null}
                    {params.InputProps.endAdornment}
                  </React.Fragment>
                ),
              }}
            />
          )}
        />

        <Link to="/restaurants">
          <button className="find">Find Food</button>
        </Link>
      </div>
    </div>
  );
}
