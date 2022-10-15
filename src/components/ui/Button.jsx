import React from "react";

const Button = ({ className, children, ...rest }) => {
  return (
    <a
      href="tel:+998993667639"
      className={
        "flex items-center cursor-pointer justify-center font-medium bg-cerulean text-white py-4  px-8 rounded-md shadow text-xs lg:whitespace-nowrap text-sm " +
        className
      }
      {...rest}
      style={{
        boxShadow: "0px 4px 33px rgba(36, 79, 121, 0.35",
      }}
    >
      {children}
    </a>
  );
};

export default Button;
