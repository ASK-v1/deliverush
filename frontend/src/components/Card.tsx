import '../styles/card.scss';
import StarIcon from '@mui/icons-material/Star';
import CircleIcon from '@mui/icons-material/Circle';

export default function Card() {
  return (
    <div className="card">
      <div>
        {Array.from(Array(40).keys()).map((index) => (
          <div className="card-items">
            <img
              src="https://res.cloudinary.com/dpsbq1odp/image/upload/v1649237152/alan-hardman-SU1LFoeEUkk-unsplash_tv8nr0.jpg"
              alt="card"
              key={index}
              width={300}
              height={200}
            />
            <div className="card-items-title">Happy Pizza</div>
            <div className="card-items-lower">
              <div className="card-items-lower-left">
                <div className="card-items-lower-left-rating">
                  4.5 <StarIcon sx={{ fontSize: '15px' }} />
                </div>
                <div className="card-items-lower-left-type">(300+)</div>
              </div>
              <div className="card-items-lower-right">
                <div className="card-items-lower-right-price">$$</div>
                <div className="card-items-lower-right-price">
                  <CircleIcon sx={{ fontSize: '5px', marginBottom: '2px' }} />
                </div>
                <div className="card-items-lower-right-type">Pizza</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="card-more">Show More</button>
    </div>
  );
}
