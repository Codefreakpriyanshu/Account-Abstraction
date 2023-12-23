import React from 'react'
import "./CSS/components.css";
import tshirt from '../assets/icons/T-Shirt.png'
export default function OrderItem() {
  return (
    <div>
      <div className="Cart-Item">
        <div className="Cart-Item-Details">
        <img src={tshirt} alt="" />
        <div className="Cart-Item-details">
            <div className="Cart-Item-Name">
                SILVIA S14 - Nissan
            </div>
            <div className="Cart-Item-Style">
            Automotive Style T-shirt
            </div>
            <div className="Cart-Item-Specs">
                Size:M <br />
                Article No. :000522
            </div>
            <div className="Cart-Item-Color">
                <div className="Cart-Item-Color-Spot"></div>
                <div className="Cart-Item-Color-Name">Black</div>
            </div>
        </div>

        </div>
        <div className="Cart-Item-Price">
            Rs. 999.00
        </div>
        <div className="Cart-Item-Quantity">
            <button>-</button><span>2</span><button>+</button>
        </div>
      </div>
    </div>
  )
}
