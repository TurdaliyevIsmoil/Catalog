import React from "react";
import { NavLink } from "react-router-dom";
function Link({ title, link }) {
  return (
    <NavLink
      to={`${link}`}
      className="p-1 w-full lg:w-auto text-center hover:text-red lg:font-medium duration-300"
    >
      {title}
    </NavLink>
  );
}

export default Link;
