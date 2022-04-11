import Navbar from '../components/Navbar';
import '../styles/restaurants.scss';

export default function Restaurants() {
  return (
    <div className="restaurants">
      <div restaurants-navbar>
        <Navbar />
      </div>

      <div restaurants-filters>
        <h1>Filters</h1>
      </div>

      <div restaurants-banners>
        <h1>Banners</h1>
      </div>
    </div>
  );
}
