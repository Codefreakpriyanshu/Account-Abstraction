import React from 'react'
import { FaArrowRight } from 'react-icons/fa6'
import "./CSS/components.css";
export default function OrderDetailsSideNavbar() {
  return (
    <div className='OrderSideNavbar'>
        <div className="Discount-Section">
            Discounts
            <div className="Coupon-Code">
                <form role="input">
                  <input
                    className="Coupon-Code-form"
                    type="search"
                    placeholder="Apply Coupon Here"
                    aria-label="Search"
                  />
                </form>
                <button><FaArrowRight className="Discount-arrow"/></button>
              </div>
        </div>
        <div className="Bill-Section">
            Bill-Section
            <div className="Bill-Setion-order-value">
                <span>Order Value</span>
                <span>Rs 2997.00</span>
            </div>
            <div className="Bill-Setion-Delivery-value">
                <span>Delivery</span>
                <span>Rs 149.00</span>
            </div>
            <hr />
            <div className="Bill-Setion-Total-value">
                <span>Total Amount</span>
                <span>Rs 3149.00</span>
            </div>
        </div>
        <div className="terms-conditions">
        By continuing, you agree to 
         <br /><a href="">Fliperb’s Terms & conditions</a>
        </div>
        <button className='CheckOut-button'>
            Continue to Checkout
        </button>
        <div className="refund-policy">
        15 Days Free Return Policy <br />
        Read More about <a href="">return and refund policy</a> 
        </div>
        <div className="message">
        Customers would receive an SMS/WhatsApp notifications
        regarding deliveries on the registered phone number
        </div>
    </div>
  )
}
