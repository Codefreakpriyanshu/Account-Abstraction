import React, { useState } from "react";
import CartHome from "../components/CartHome";
import CartCheckout from "../components/CartCheckout";
function Cart() {
  const [checkedOut, setCheckedOut] = useState(false);
  return (
    <div>
      <div className="cart-bottom">
        <div className="main-container">
          <CartHome />
          {checkedOut ? <CartCheckout /> : null}
          <div className="sidebar"></div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
