import React from 'react'
import "./CSS/components.css";
import Arrow from '../assets/icons/Arrow 6.png'

export default function PriceRangeSection() {
  return (
    <div>
      <div className="Price-Range-Text">
      LOOKING SOMETHING ON YOUR PRICE RANGE?
      </div>
      <div className="Price-Range-Section-1">
        <div className="PriceSection-1">
          <div className="Under-Text ">
            UNDER
            <div className="price">
            ₹599
            </div>
          </div>
          <div className="Buy">
          <a href="">BUY <img src={Arrow} alt="" /></a>
          </div>
        </div>
        <div className="PriceSection-2">
          <div className="Under-Text">
            UNDER
            <div className="price">
            ₹699
            </div>
          </div>
          <div className="Buy">
              <a href="">BUY <img src={Arrow} alt="" /></a>
          </div>
        </div>
      </div>
      <div className="Price-Range-Section-1">
        <div className="PriceSection-1">
          <div className="Under-Text">
            UNDER
            <div className="price">
            ₹799
            </div>
          </div>
          <div className="Buy">
          <a href="">BUY <img src={Arrow} alt="" /></a>
          </div>
        </div>
        <div className="PriceSection-2">
          <div className="Under-Text">
            UNDER
            <div className="price">
            ₹999
            </div>
          </div>
          <div className="Buy">
              <a href="">BUY <img src={Arrow} alt="" /></a>
          </div>
        </div>
      </div>
    </div>
  )
}
