import { Link } from 'react-router-dom';
import '../styles/login.scss';
import Footer from '../components/Footer';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import OutlinedInput from '@mui/material/OutlinedInput';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';

export default function Login() {
  const [log, setLog] = useState({
    password: '',
    email: '',
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setLog({ ...log, showPassword: !log.showPassword });
  };

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <div className="login">
      <div className="login-bar">
        <Link to="/">
          <img className="logo" src="/images/logo.png" width={175} alt="logo" />
        </Link>
      </div>

      <h1 className="login-title">LOG IN</h1>

      <div className="login-new">
        <h3 className="login-new-text">New to deliverush?</h3>
        <Link to="/signup">
          <button className="login-new-signup">
            <h3 className="login-new-signup-btn">Sign Up</h3>
          </button>
        </Link>
      </div>

      <form className="login-form">
        <div className="login-form-email">
          <h3>Email</h3>
          <TextField style={{ width: '30rem' }} required />
        </div>

        <div className="login-form-password">
          <h3>Password</h3>
          <OutlinedInput
            style={{ width: '30rem' }}
            type={log.showPassword ? 'text' : 'password'}
            value={log.password}
            autoComplete="false"
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {log.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            required
          />
        </div>

        <button className="login-button" type="submit">
          Log In
        </button>
      </form>

      <Footer />
    </div>
  );
}
