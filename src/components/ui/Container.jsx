import React from "react";

const Container = ({ children, className, ...rest }) => {
  return <div className={"px-5 max-w-6xl mx-auto " + className}>{children}</div>;
};

export default Container;
