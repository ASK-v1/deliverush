import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Restaurants from './pages/Restaurants';
import Checkout from './pages/Checkout';
import { Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/restaurants" element={<Restaurants />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </div>
  );
}
