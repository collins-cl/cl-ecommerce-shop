import React from "react";
import "../CartIcon/CartIcon.css";
import IconButton from "@mui/material/IconButton";
import { FaShoppingBag } from "react-icons/fa";

function CartIcon() {
  return (
    <div className="carticon">
      <IconButton size="large" aria-label="profile" className="cartbadge">
        <FaShoppingBag className="cart-icon" />
        <p>1</p>
      </IconButton>
    </div>
  );
}

export default CartIcon;
