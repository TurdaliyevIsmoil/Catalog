import React from "react";

const Title = ({ children, className, ...rest }) => {
  return (
    <h1
      className={
        "text-xl font-bold text-blue text-center lg:text-3xl lg:text-left " +
        className
      }
    >
      {children}
      <br />
      <span className="mx-auto w-20 flex border-b-2 mt-2.5 border-blue lg:mr-auto lg:mx-0"></span>
    </h1>
  );
};

export default Title;
