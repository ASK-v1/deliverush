import '../styles/filters.scss';
import { FiltersInterface, FiltersPriceInterface } from '../interfaces';
import { useState } from 'react';
import StarIcon from '@mui/icons-material/Star';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Menu from '@mui/material/Menu';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { styled } from '@mui/material/styles';

export default function Filters() {
  const [filter, setFilter] = useState<FiltersInterface>({
    burgers: false,
    chicken: false,
    desserts: false,
    fastFood: false,
    coffee: false,
    mexican: false,
    sandwiches: false,
    soup: false,
    healthy: false,
    breakfast: false,
    asian: false,
    american: false,
    alcohol: false,
    barbecue: false,
  });

  const handleClick = (prop: keyof FiltersInterface) => () => {
    setFilter({
      burgers: false,
      chicken: false,
      desserts: false,
      fastFood: false,
      coffee: false,
      mexican: false,
      sandwiches: false,
      soup: false,
      healthy: false,
      breakfast: false,
      asian: false,
      american: false,
      alcohol: false,
      barbecue: false,
      [prop]: !filter[prop],
    });
  };

  const [under, setUnder] = useState<boolean>(false);

  const [anchorElPrice, setAnchorElPrice] = useState<null | HTMLElement>(null);
  const [anchorElRating, setAnchorElRating] = useState<null | HTMLElement>(null);
  const openPrice = Boolean(anchorElPrice);
  const openRating = Boolean(anchorElRating);

  const marks = [
    {
      value: 3.5,
      label: '3.5',
    },
    {
      value: 4,
      label: '4',
    },
    {
      value: 4.5,
      label: '4.5',
    },
    {
      value: 5,
      label: '5',
    },
  ];

  const RatingSlider = styled(Slider)({
    color: '#0f0f0f',
    height: 8,
    '& .MuiSlider-track': {
      border: 'none',
    },
    '& .MuiSlider-thumb': {
      height: 24,
      width: 24,
      backgroundColor: '#0f0f0f',
      border: '2px solid currentColor',
      '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
        boxShadow: 'inherit',
      },
      '&:before': {
        display: 'none',
      },
    },
    '& .MuiSlider-valueLabel': {
      lineHeight: 1.2,
      fontSize: 12,
      background: 'unset',
      padding: 0,
      width: 32,
      height: 32,
      borderRadius: '50% 50% 50% 0',
      backgroundColor: '#52af77',
      transformOrigin: 'bottom left',
      transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
      '&:before': { display: 'none' },
      '&.MuiSlider-valueLabelOpen': {
        transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
      },
      '& > *': {
        transform: 'rotate(45deg)',
      },
    },
  });

  const [rating, setRating] = useState<number>(3.5);

  const handleSliderChange = (event: Event, newValue: number) => {
    setRating(newValue);
  };

  const [price, setPrice] = useState<FiltersPriceInterface>({
    low: false,
    medium: false,
    high: false,
    veryHigh: false,
  });

  const handlePrice = (prop: keyof FiltersPriceInterface) => () => {
    setPrice({
      ...price,
      [prop]: !price[prop],
    });
  };

  return (
    <div className="filters">
      <div className="filters-upper">
        {filter.burgers ? (
          <div onClick={handleClick('burgers')} className="filters-upper-active">
            <img src="/icons/Burgers.png" alt="Burgers" width={35} />
            <h5>Burgers</h5>
          </div>
        ) : (
          <div onClick={handleClick('burgers')} className="filters-upper-inactive">
            <img src="/icons/Burgers.png" alt="Burgers" width={35} />
            <h5>Burgers</h5>
          </div>
        )}
        {filter.healthy ? (
          <div onClick={handleClick('healthy')} className="filters-upper-active">
            <img src="/icons/Healthy.png" alt="Healthy" width={35} />
            <h5>Healthy</h5>
          </div>
        ) : (
          <div onClick={handleClick('healthy')} className="filters-upper-inactive">
            <img src="/icons/Healthy.png" alt="Healthy" width={35} />
            <h5>Healthy</h5>
          </div>
        )}
        {filter.chicken ? (
          <div onClick={handleClick('chicken')} className="filters-upper-active">
            <img src="/icons/Chicken.png" alt="Chicken" width={35} />
            <h5>Chicken</h5>
          </div>
        ) : (
          <div onClick={handleClick('chicken')} className="filters-upper-inactive">
            <img src="/icons/Chicken.png" alt="Chicken" width={35} />
            <h5>Chicken</h5>
          </div>
        )}
        {filter.desserts ? (
          <div onClick={handleClick('desserts')} className="filters-upper-active">
            <img src="/icons/Desserts.png" alt="Desserts" width={35} />
            <h5>Desserts</h5>
          </div>
        ) : (
          <div onClick={handleClick('desserts')} className="filters-upper-inactive">
            <img src="/icons/Desserts.png" alt="Desserts" width={35} />
            <h5>Desserts</h5>
          </div>
        )}
        {filter.coffee ? (
          <div onClick={handleClick('coffee')} className="filters-upper-active">
            <img src="/icons/Coffee.png" alt="Coffee" width={35} />
            <h5>Coffee</h5>
          </div>
        ) : (
          <div onClick={handleClick('coffee')} className="filters-upper-inactive">
            <img src="/icons/Coffee.png" alt="Coffee" width={35} />
            <h5>Coffee</h5>
          </div>
        )}
        {filter.soup ? (
          <div onClick={handleClick('soup')} className="filters-upper-active">
            <img src="/icons/Soup.png" alt="Soup" width={35} />
            <h5>Soup</h5>
          </div>
        ) : (
          <div onClick={handleClick('soup')} className="filters-upper-inactive">
            <img src="/icons/Soup.png" alt="Soup" width={35} />
            <h5>Soup</h5>
          </div>
        )}
        {filter.fastFood ? (
          <div onClick={handleClick('fastFood')} className="filters-upper-active">
            <img src="/icons/Fast Food.png" alt="Fast Food" width={35} />
            <h5>Fast Food</h5>
          </div>
        ) : (
          <div onClick={handleClick('fastFood')} className="filters-upper-inactive">
            <img src="/icons/Fast Food.png" alt="Fast Food" width={35} />
            <h5>Fast Food</h5>
          </div>
        )}
        {filter.mexican ? (
          <div onClick={handleClick('mexican')} className="filters-upper-active">
            <img src="/icons/Mexican.png" alt="Mexican" width={35} />
            <h5>Mexican</h5>
          </div>
        ) : (
          <div onClick={handleClick('mexican')} className="filters-upper-inactive">
            <img src="/icons/Mexican.png" alt="Mexican" width={35} />
            <h5>Mexican</h5>
          </div>
        )}
        {filter.sandwiches ? (
          <div onClick={handleClick('sandwiches')} className="filters-upper-active">
            <img src="/icons/Sandwiches.png" alt="Sandwiches" width={35} />
            <h5>Sandwiches</h5>
          </div>
        ) : (
          <div onClick={handleClick('sandwiches')} className="filters-upper-inactive">
            <img src="/icons/Sandwiches.png" alt="Sandwiches" width={35} />
            <h5>Sandwiches</h5>
          </div>
        )}
        {filter.asian ? (
          <div onClick={handleClick('asian')} className="filters-upper-active">
            <img src="/icons/Asian.png" alt="Asian" width={35} />
            <h5>Asian</h5>
          </div>
        ) : (
          <div onClick={handleClick('asian')} className="filters-upper-inactive">
            <img src="/icons/Asian.png" alt="Asian" width={35} />
            <h5>Asian</h5>
          </div>
        )}
        {filter.alcohol ? (
          <div onClick={handleClick('alcohol')} className="filters-upper-active">
            <img src="/icons/Alcohol.png" alt="Alcohol" width={35} />
            <h5>Alcohol</h5>
          </div>
        ) : (
          <div onClick={handleClick('alcohol')} className="filters-upper-inactive">
            <img src="/icons/Alcohol.png" alt="Alcohol" width={35} />
            <h5>Alcohol</h5>
          </div>
        )}
        {filter.american ? (
          <div onClick={handleClick('american')} className="filters-upper-active">
            <img src="/icons/American.png" alt="American" width={35} />
            <h5>American</h5>
          </div>
        ) : (
          <div onClick={handleClick('american')} className="filters-upper-inactive">
            <img src="/icons/American.png" alt="American" width={35} />
            <h5>American</h5>
          </div>
        )}
        {filter.breakfast ? (
          <div onClick={handleClick('breakfast')} className="filters-upper-active">
            <img src="/icons/Breakfast.png" alt="Breakfast" width={35} />
            <h5>Breakfast</h5>
          </div>
        ) : (
          <div onClick={handleClick('breakfast')} className="filters-upper-inactive">
            <img src="/icons/Breakfast.png" alt="Breakfast" width={35} />
            <h5>Breakfast</h5>
          </div>
        )}
        {filter.barbecue ? (
          <div onClick={handleClick('barbecue')} className="filters-upper-active">
            <img src="/icons/Barbecue.png" alt="Barbecue" width={35} />
            <h5>Barbecue</h5>
          </div>
        ) : (
          <div onClick={handleClick('barbecue')} className="filters-upper-inactive">
            <img src="/icons/Barbecue.png" alt="Barbecue" width={35} />
            <h5>Barbecue</h5>
          </div>
        )}
      </div>
      <div className="filters-lower">
        {openRating ? (
          <button
            onClick={(event) => setAnchorElRating(event.currentTarget)}
            className="filters-lower-active"
          >
            Over {rating} <StarIcon className="filters-lower-active-star" />
            <KeyboardArrowDownIcon className="filters-lower-active-arrow" />
          </button>
        ) : (
          <button
            onClick={(event) => setAnchorElRating(event.currentTarget)}
            className="filters-lower-inactive"
          >
            Over {rating} <StarIcon className="filters-lower-inactive-star" />
            <KeyboardArrowDownIcon className="filters-lower-inactive-arrow" />
          </button>
        )}

        {openPrice ? (
          <button
            onClick={(event) => setAnchorElPrice(event.currentTarget)}
            className="filters-lower-active"
          >
            Price <KeyboardArrowDownIcon className="filters-lower-active-arrow" />
          </button>
        ) : (
          <button
            onClick={(event) => setAnchorElPrice(event.currentTarget)}
            className="filters-lower-inactive"
          >
            Price <KeyboardArrowDownIcon className="filters-lower-inactive-arrow" />
          </button>
        )}

        {under ? (
          <button onClick={() => setUnder(false)} className="filters-lower-active">
            Under 30 min
          </button>
        ) : (
          <button onClick={() => setUnder(true)} className="filters-lower-inactive">
            Under 30 min
          </button>
        )}
      </div>

      <Menu
        open={openPrice}
        anchorEl={anchorElPrice}
        onClose={() => setAnchorElPrice(null)}
        className="filters-menu"
      >
        <h3 className="filters-menu-title">Price</h3>

        <div className="filters-menu-price">
          {price.low ? (
            <button onClick={handlePrice('low')} className="filters-menu-price-active-low">
              <AttachMoneyIcon fontSize="small" />
            </button>
          ) : (
            <button onClick={handlePrice('low')} className="filters-menu-price-inactive-low">
              <AttachMoneyIcon fontSize="small" />
            </button>
          )}
          {price.medium ? (
            <button onClick={handlePrice('medium')} className="filters-menu-price-active-medium">
              <AttachMoneyIcon fontSize="small" />
              <AttachMoneyIcon fontSize="small" />
            </button>
          ) : (
            <button onClick={handlePrice('medium')} className="filters-menu-price-inactive-medium">
              <AttachMoneyIcon fontSize="small" />
              <AttachMoneyIcon fontSize="small" />
            </button>
          )}
          {price.high ? (
            <button onClick={handlePrice('high')} className="filters-menu-price-active-high">
              <AttachMoneyIcon fontSize="small" />
              <AttachMoneyIcon fontSize="small" />
              <AttachMoneyIcon fontSize="small" />
            </button>
          ) : (
            <button onClick={handlePrice('high')} className="filters-menu-price-inactive-high">
              <AttachMoneyIcon fontSize="small" />
              <AttachMoneyIcon fontSize="small" />
              <AttachMoneyIcon fontSize="small" />
            </button>
          )}
          {price.veryHigh ? (
            <button
              onClick={handlePrice('veryHigh')}
              className="filters-menu-price-active-very-high"
            >
              <AttachMoneyIcon fontSize="small" />
              <AttachMoneyIcon fontSize="small" />
              <AttachMoneyIcon fontSize="small" />
              <AttachMoneyIcon fontSize="small" />
            </button>
          ) : (
            <button
              onClick={handlePrice('veryHigh')}
              className="filters-menu-price-inactive-very-high"
            >
              <AttachMoneyIcon fontSize="small" />
              <AttachMoneyIcon fontSize="small" />
              <AttachMoneyIcon fontSize="small" />
              <AttachMoneyIcon fontSize="small" />
            </button>
          )}
        </div>

        <div className="filters-menu-line" />

        <div className="filters-menu-items">
          <button onClick={() => setAnchorElPrice(null)} className="filters-menu-items-cancel">
            Cancel
          </button>
          <button onClick={() => setAnchorElPrice(null)} className="filters-menu-items-results">
            View Results
          </button>
        </div>
      </Menu>

      <Menu
        open={openRating}
        anchorEl={anchorElRating}
        onClose={() => setAnchorElRating(null)}
        className="filters-menu"
      >
        <h3 className="filters-menu-title">Ratings</h3>
        <h3 className="filters-menu-title-over">Over {rating}</h3>

        <Box className="filters-menu-slider">
          <RatingSlider
            value={typeof rating === 'number' ? rating : 3.5}
            onChange={handleSliderChange}
            defaultValue={0}
            step={0.5}
            marks={marks}
            max={5}
            min={3.5}
          />
        </Box>

        <div className="filters-menu-line" />

        <div className="filters-menu-items">
          <button onClick={() => setAnchorElRating(null)} className="filters-menu-items-cancel">
            Cancel
          </button>
          <button onClick={() => setAnchorElRating(null)} className="filters-menu-items-results">
            View Results
          </button>
        </div>
      </Menu>

      <div className="filters-rr">
        <h2 className="filters-rr-results">136 results</h2>
        <button className="filters-rr-reset">Reset</button>
      </div>
    </div>
  );
}
