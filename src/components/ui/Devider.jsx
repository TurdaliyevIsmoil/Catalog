import React from "react";

const Devider = ({ half }) => {
  return <div className={`w-full ${half ? "py-3 lg:py-5" : "py-4 lg:py-8"}`}></div>;
};

export default Devider;
