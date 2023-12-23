import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import fliperbLogo from "../assets/icons/fliperb_logo.png";
import { SlPencil } from "react-icons/sl";
import { FaArrowRight } from 'react-icons/fa6'
import "./CSS/components.css";
import OnlinePayment from "../assets/icons/digital-payment.png"
function CartCheckout() {
  return (
    <>
      <nav className="Checkout-NavBar">
        <div className="Back-to-shopping">
          <FaArrowLeft/>
          <span>Back to Shopping Bag</span>
        </div>
        <div className="Brand">
          <img src={fliperbLogo} alt="" />
          <div>FLIPERB <br />LIFESTYLE
          </div>
        </div>
        <div>
        </div>
      </nav>
      <hr />
      <div className="Checkout">
        CHECKOUT
      </div>
      <div className="CheckOut-Information d-flex">
        <div className="CheckOut-Customer-Information">
          <div className="CheckOut-Info"> <span>My Information</span> <span><SlPencil size={24} color="gray" /></span></div>
          <div className="CheckOut-Customer-Information-Address">
            <div className="ChekOut-Customer-Name">
              Swatik Bose
            </div>
            <div className="CheckOut-Customer-Email">
              swastikbose98@gmail.com <br />
              +91 85858 858585  
            </div>
            <div className="Customer-Address">
            25, East Kanthalpara, Nandapally, Block - A,
            Naihati, Pin - 743165
            West Bengal, India
            </div>
          </div>
        </div>
        <div className="Payment-information">
          Payment Mode
          <div className="Online-Payment">
          <input type="checkbox" name="online-payment" id="" /> Online Payment <br />
          <img src={OnlinePayment} alt="" />
          </div>
          <div className="Cash-on-delivery">
          <input type="checkbox" name="cash-on-delivery" id="" /> <span>Cash On Delivery</span> <br />

          Pay cash at your door at the time of receiving order.
          </div>
        </div>
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
            Place Order
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
      </div>
      <div className="Checkout-Order-Review">
          Your Order review
          Total items : 3

      </div>
    </>
  );
}

export default CartCheckout;
