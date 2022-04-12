import Navbar from '../components/Navbar';
import Filters from '../components/Filters';
import '../styles/restaurants.scss';

export default function Restaurants() {
  return (
    <div className="restaurants">
      <div className="restaurants-navbar">
        <Navbar />
      </div>

      <div className="restaurants-filters">
        <Filters />
      </div>
    </div>
  );
}
