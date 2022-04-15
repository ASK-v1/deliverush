import Navbar from '../components/Navbar';
import Filters from '../components/Filters';
import Banners from '../components/Banners';
import Footer from '../components/Footer';
import Card from '../components/Card';
import '../styles/restaurants.scss';

export default function Restaurants() {
  return (
    <div className="restaurants">
      <div className="restaurants-navbar">
        <Navbar />
      </div>

      <div className="restaurants-banners">
        <Banners />
      </div>

      <div className="restaurants-filters">
        <Filters />
      </div>

      <div className="restaurants-card">
        <Card />
      </div>

      <div style={{ marginTop: '20rem' }} className="restaurants-footer">
        <Footer />
      </div>
    </div>
  );
}
