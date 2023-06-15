import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="ui secondary pointing menu massive">
      <div className="ui item header">Shopping Site</div>
      <NavLink to="/" className={`item ${({ isActive }) => (isActive ? 'active' : 'inactive')}`}>
        Home
      </NavLink>
      <NavLink to="/cart" className={`item ${({ isActive }) => (isActive ? 'active' : 'inactive')}`}>
        Cart
      </NavLink>
      <NavLink to="/about" className={`item ${({ isActive }) => (isActive ? 'active' : 'inactive')}`}>
        About
      </NavLink>
    </div>
  );
}

export default Header;