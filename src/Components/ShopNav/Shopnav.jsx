import React, { useState } from "react";
import "../ShopNav/Shopnav.css"
import ProfileIcon from "../ProfileIcon/ProfileIcon";
import CartIcon from "../CartIcon/CartIcon";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function Shopnav() {
  const [navwrapper, setNavWrapper] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 40) {
      setNavWrapper(true);
    } else {
      setNavWrapper(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  const [open, setOpen] = useState(false);
  const handleClick = () => setOpen(!open);
  const closeMobile = () => setOpen(false);

  const hamburgerOpen = (
    <FaBars className="hamburger" onClick={() => setOpen(!open)} />
  );

  const hamburgerClose = (
    <FaTimes className="hamburger" onClick={() => setOpen(!open)} />
  );

  return (
    <div className="nav">
      <div className={navwrapper ? "navwrapper" : "navwrapper active"}>
        <div className="first-nav">
          <div className="hamburger" onClick={handleClick}>
            {open ? hamburgerClose : hamburgerOpen}
          </div>
          <div className="logo">
            <a href="/">CL COMESTIBLES</a>
          </div>
          <div className="icons-events">
            <ProfileIcon />
            <CartIcon />
          </div>
        </div>

        <div className={open ? "secondshopnav" : "secondshopnav active"}>
          <Link to="/" onClick={closeMobile}>
            RICE
          </Link>
          <Link to="/shop/#pasta" onClick={closeMobile}>
            PASTA
          </Link>
          <Link to="/" onClick={closeMobile}>
            PANCAKES
          </Link>
          <Link to="/" onClick={closeMobile}>
            KETONE-DIETS
          </Link>
          <Link className="bhome" to="/" onClick={closeMobile}>
            BACK HOME
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Shopnav;
