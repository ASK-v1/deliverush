import '../styles/search.scss';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const cities = ['San Francisco', 'Los Angeles', 'Chicago', 'Boston', 'Seattle'];

export default function Search() {
  const [val, setVal] = useState<string | null>('');
  const [inputVal, setInputVal] = useState('');

  return (
    <div className="search">
      <h1>Order food to your door</h1>
      <div className="search-auto-find">
        <Autocomplete
          className="auto"
          value={val}
          onChange={(event: any, newValue: string | null) => {
            setVal(newValue);
          }}
          inputValue={inputVal}
          onInputChange={(event, newInputValue) => {
            setInputVal(newInputValue);
          }}
          options={cities}
          renderInput={(params) => (
            <TextField variant="outlined" {...params} placeholder="Enter delivery address" />
          )}
        />
        <button className="find">Find Food</button>
      </div>
    </div>
  );
}
