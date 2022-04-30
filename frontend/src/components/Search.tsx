import '../styles/search.scss';
import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';

const cities = ['San Francisco', 'Los Angeles', 'Chicago', 'Boston', 'Seattle'];

export default function Search() {
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState<Array<string>>([]);

  useEffect(() => {
    let active = true;

    (async () => {
      if (active) {
        setOptions(cities);
      }
    })();

    return () => {
      active = false;
    };
  });

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
          selectOnFocus
          autoHighlight
          clearIcon={false}
          popupIcon={false}
          renderInput={(params) => (
            <TextField
              {...params}
              placeholder="Enter delivery address"
              InputProps={{
                ...params.InputProps,
                startAdornment: <SearchIcon style={{ marginRight: '5px' }} fontSize="large" />,
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
