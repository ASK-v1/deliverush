import '../styles/banners.scss';
import { useState } from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function Banners() {
  const [index, setIndex] = useState<number>(0);

  return (
    <div className="slideshow">
      {index !== 0 && (
        <button onClick={() => setIndex(0)} className="prev">
          <ArrowBackIosIcon className="prev-back" fontSize="small" />
        </button>
      )}
      {index !== 1 && (
        <button onClick={() => setIndex(1)} className="next">
          <ArrowForwardIosIcon className="next-forward" fontSize="small" />
        </button>
      )}

      <div className="slideshow-slider" style={{ transform: `translate3d(${-index * 50}%, 0, 0)` }}>
        <img
          className="slide"
          src={`/banners/banner-1.jpg`}
          alt="https://www.freepik.com/"
          width={633}
        />
        <img
          className="slide"
          src={`/banners/banner-2.jpg`}
          alt="https://www.freepik.com/"
          width={633}
        />
        <img
          className="slide"
          src={`/banners/banner-3.jpg`}
          alt="https://www.freepik.com/"
          width={633}
        />
      </div>
    </div>
  );
}
