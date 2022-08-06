import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import "../Style/navbar.css";

const Navbar = () => {
  const [openNavMobile, setOpenNavMobile] = useState(false);

  return (
    <div className="header">
      <div
        className={`meniu-text-mobile ${openNavMobile ? "menu-open" : ""}`}
        onClick={() => setOpenNavMobile(!openNavMobile)}
      >
        <span>menu</span>
      </div>
      <nav className={`navigation ${openNavMobile ? "menu-open" : ""}`}>
        <Link to="/movie-project/">home</Link>
        <Link to="/movie-project/favorites">favorites</Link>
      </nav>
    </div>
  );
};

export default Navbar;
