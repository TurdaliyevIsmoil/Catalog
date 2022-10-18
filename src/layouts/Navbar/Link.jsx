import React from "react";
import { Link as Navlink } from "react-scroll";
function Link({ title, link, ...rest }) {
  return (
    <Navlink
      to={`${link}`}
      {...rest}
      className="p-1 cursor-pointer w-full lg:w-auto text-center hover:text-red lg:font-medium duration-300"
    >
      {title}
    </Navlink>
  );
}

export default Link;
