import React from 'react';
import { Link } from 'react-router-dom';


const MenuComponent = () => {
var menulist = ["Home", "About", "Services", "Blogs"];
const menuLinks = menulist.map((item, index) => (
  index === 0 ? (
    <Link key={index} to="/">Home</Link> // Render "Home" link for the first item
  ) : (
    <Link key={index} to={`/${item.toLowerCase()}`}>{item}</Link> // Render regular link for other items
  )
));

  return (
    <div className="menu">
        {menuLinks}
    </div>
  );
};

export default MenuComponent;