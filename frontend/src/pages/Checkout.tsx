import '../styles/checkout.scss';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from 'react';

export default function Checkout() {
  const navigate = useNavigate();
  const [amount, setAmount] = useState('1');

  return (
    <div className="checkout">
      <div className="checkout-bar">
        <div onClick={() => navigate('/restaurants')} className="checkout-bar-left">
          <ArrowBackIcon fontSize="medium" />
          <h1 className="checkout-bar-left-back">Back to Store</h1>
        </div>
        <img
          onClick={() => navigate('/')}
          className="checkout-bar-logo"
          src="/images/logo.png"
          width={175}
          alt="logo"
        />
      </div>
      <div className="checkout-left">
        <div className="checkout-left-items">
          <h1 className="checkout-left-items-title">ADDRESS</h1>
          <div className="checkout-left-items-address">
            <div className="checkout-left-items-address-map">MAP</div>
            <h1 className="checkout-left-items-address-your">San Francisco, CA, USA</h1>
          </div>
        </div>

        <div className="checkout-left-line" />

        <div className="checkout-left-items">
          <h1 className="checkout-left-items-title">PHONE NUMBER</h1>
          <h1 className="checkout-left-items-phone">0533 333 332 33</h1>
        </div>

        <div className="checkout-left-line" />

        <div className="checkout-left-items">
          <h1 className="checkout-left-items-title">PAYMENT</h1>
          <div className="checkout-left-items-payment">
            <div className="checkout-left-items-payment-cc">
              <div className="checkout-left-items-payment-cc-left">
                <img src="./icons/cc-solid.svg" alt="credit/debit" width={30} /> Credit/Debit Card
              </div>
              <ArrowForwardIosIcon fontSize="small" />
            </div>

            <div className="checkout-left-items-payment-cc">
              <div className="checkout-left-items-payment-cc-left">
                <img src="./icons/cc-paypal.svg" alt="paypal" width={30} /> PayPal
              </div>
              <ArrowForwardIosIcon fontSize="small" />
            </div>

            <button className="checkout-left-items-payment-code">Add Promo Code</button>
          </div>
        </div>

        <div className="checkout-left-line" />

        <div className="checkout-left-items">
          <h1 className="checkout-left-items-title">SUMMARY</h1>
          <div className="checkout-left-items-summary">
            {[1, 2, 3].map(() => (
              <div>
                <div className="checkout-left-items-summary-cart">
                  <img
                    src="https://res.cloudinary.com/dpsbq1odp/image/upload/v1649237152/alan-hardman-SU1LFoeEUkk-unsplash_tv8nr0.jpg"
                    alt="cart"
                    width={132}
                    height={88}
                  />
                  <div className="checkout-left-items-summary-cart-mid">
                    <div>
                      <div className="checkout-left-items-summary-cart-mid-title">
                        Ultimate Pepperoni
                      </div>
                      <div className="checkout-left-items-summary-cart-mid-type">
                        10 Inch Original Pepperoni Pizza
                      </div>
                    </div>

                    <div className="checkout-left-items-summary-cart-mid-p-a">
                      <div className="checkout-left-items-summary-cart-mid-p-a-price">$34.50</div>
                      <div className="checkout-left-items-summary-cart-mid-p-a-amount">
                        <Select
                          sx={{
                            width: '53.3px',
                            height: '21.3px',
                            borderRadius: '20px',
                            fontSize: '12.5px',
                            backgroundColor: 'white',
                          }}
                          value={amount}
                          onChange={(event) => setAmount(event.target.value)}
                          autoWidth
                          placeholder={amount}
                        >
                          <MenuItem value={1}>1</MenuItem>
                          <MenuItem value={2}>2</MenuItem>
                          <MenuItem value={3}>3</MenuItem>
                          <MenuItem value={4}>4</MenuItem>
                          <MenuItem value={5}>5</MenuItem>
                          <MenuItem value={6}>6</MenuItem>
                          <MenuItem value={7}>7</MenuItem>
                          <MenuItem value={8}>8</MenuItem>
                          <MenuItem value={9}>9</MenuItem>
                        </Select>
                      </div>
                      <div className="checkout-left-items-summary-cart-mid-p-a-delete">
                        <DeleteIcon
                          fontSize="small"
                          sx={{
                            borderRadius: '20px',
                            fontSize: '12.5px',
                            color: 'white',
                            backgroundColor: 'gray',
                            padding: '3px',
                            marginTop: '2px',
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button className="checkout-left-order">Place Order</button>
      </div>

      <div className="checkout-right-line" />

      <div className="checkout-right">
        <div className="checkout-right-title">
          <h1 className="checkout-right-title-logo">H</h1>
          <div className="checkout-right-title-from">
            <h1 className="checkout-right-title-from-order">ORDER FROM</h1>
            <h1 className="checkout-right-title-from-restaurant">Happy Pizza</h1>
          </div>
        </div>
        <button className="checkout-right-order">Place Order</button>
      </div>
    </div>
  );
}
