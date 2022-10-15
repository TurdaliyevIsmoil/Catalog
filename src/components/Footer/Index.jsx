import React from "react";
import Container from "./../ui/Container";
import img from "../../images/logo.png";

const Footer = () => {
  return (
    <Container className={"flex flex-col gap-7 justify-between items-center lg:flex-row"}>
      <img src={img} alt="" className="lg:order-2" />
      <p className="lg:order-1" >© 2022 — MIPRINT Inc</p>
      <p  className="lg:order-3">Privacy Policy</p>
    </Container>
  );
};

export default Footer;
