import { Link } from 'react-router-dom';
import '../styles/signup.scss';
import Footer from '../components/Footer';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import OutlinedInput from '@mui/material/OutlinedInput';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';

export default function Signup() {
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
    <div className="signup">
      <div className="signup-bar">
        <Link to="/">
          <img className="logo" src="/images/logo.png" width={175} alt="logo" />
        </Link>
      </div>

      <h1 className="signup-title">SIGN UP</h1>

      <div className="signup-have-account">
        <h3 className="signup-have-account-text">Already have an account?</h3>
        <Link to="/login">
          <button className="signup-have-account-login">
            <h3 className="signup-have-account-login-btn">Log In</h3>
          </button>
        </Link>
      </div>

      <form className="signup-form">
        <div className="signup-form-name">
          <div className="signup-form-name-first">
            <h3>First Name</h3>
            <TextField style={{ width: '14.5rem' }} required />
          </div>
          <div className="signup-form-name-last">
            <h3>Last Name</h3>
            <TextField style={{ width: '14.5rem' }} required />
          </div>
        </div>

        <div className="signup-form-email">
          <h3>Email</h3>
          <TextField style={{ width: '30rem' }} required />
        </div>

        <div className="signup-form-number">
          <h3>Mobile Number</h3>
          <TextField style={{ width: '30rem' }} required />
        </div>

        <div className="signup-form-password">
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

        <button className="signup-button" type="submit">
          Sign Up
        </button>
      </form>

      <Footer />
    </div>
  );
}
