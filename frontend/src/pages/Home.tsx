import '../styles/home.scss';
import Search from '../components/Search';
import Footer from '../components/Footer';
import Slider from '../components/Slider';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="home">
      <div className="home-navbar">
        <div className="home-navbar-logo-btn">
          <Link to="/">
            <img className="logo" src="/images/logo.png" width={250} alt="logo" />
          </Link>
          <div className="home-navbar-logo-btn-login-signup">
            <Link to="/login">
              <button className="login">Log in</button>
            </Link>
            <Link to="/signup">
              <button className="signup">Sign up</button>
            </Link>
          </div>
        </div>
        <Search />
      </div>
      <Slider />
      <Footer />
    </div>
  );
}
