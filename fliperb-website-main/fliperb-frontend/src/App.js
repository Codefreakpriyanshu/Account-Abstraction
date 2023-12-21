import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Authentication from "./pages/Authentication.tsx";
import Profile from "./pages/Profile.tsx";
import Home from "./pages/Home.tsx";
import Cart from "./pages/Cart.tsx";

import Login from "./pages/Login";
import OrderItem from "./components/OrderItem";
import OrderDetailsSideNavbar from "./components/OrderDetailsSideNavbar";
import CartHome from "./components/CartHome";
import CartCheckout from "./components/CartCheckout";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/cart" element={<CartHome />} />
          <Route path="/cartCheckout" element={<CartCheckout />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
