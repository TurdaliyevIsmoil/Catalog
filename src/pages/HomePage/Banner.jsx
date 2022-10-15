import React from "react";
import img from "../../images/header.png";

const Banner = () => {
  return <img src={img} className="w-full aspect-[16/9] lg:aspect-[16/8] object-cover" alt="" />;
};

export default Banner;
