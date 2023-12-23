import React from 'react'
import "./CSS/components.css";
import fliperbLogo from "../assets/icons/fliperb_logo.png";
import tshirtLogo from "../assets/icons/t_shirt.png";
import hoodieLogo from "../assets/icons/hoodie.png";  
import cart from "../assets/icons/cart.png";
import OrderDetailsSideNavbar from './OrderDetailsSideNavbar';
import Footer from './Footer';
import OrderItem from './OrderItem';

export default function CartHome() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid left-nav-item d-flex justify-content-between">
          <a className="navbar-brand" href="#">
            <img src={fliperbLogo} alt="" />
          </a>
          <div
            className="collapse navbar-collapse d-flex cloth-types"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active " aria-current="page" href="#">
                  <img src={tshirtLogo} alt="" /> T-SHIRTS
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <img src={hoodieLogo} alt="" /> HOODIES
                </a>
              </li>
            </ul>
            <div className="right-nav-item d-flex ">
              <div className="searchbar">
                <form role="search">
                  <input
                    className="form-control "
                    type="search"
                    placeholder="Search by brand, category or collection"
                    aria-label="Search"
                  />
                </form>
              </div>
              <div className="like ">
                <span>{/* <img src={heart} alt="" /> */}</span>
              </div>
              <div className="cart">
                <span>
                  <img src={cart} alt="" />
                </span>
              </div>
              <div className="Profile-Display-picture">
                S
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="CartHome-Cart">
        <div>
        <div className="Cart-Home-Product-Specs-Info">
        <div id="bag">Your Bag</div>
        <div className="Cart-Home-Specs-Amount">
          <div id="Price">Price</div>
          <div id="Quantity">Quantity</div>
        </div>
      </div>
      <div className="CartHome-Order-Items">
      <OrderItem/>
      <OrderItem/>
      <OrderItem/>
      <OrderItem/>
      <OrderItem/>
      <OrderItem/>

      </div>
        </div>
        <OrderDetailsSideNavbar/>
      </div>
      <Footer/>
    </>    
  )
}
