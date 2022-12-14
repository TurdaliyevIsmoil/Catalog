import React, { useState } from "react";
import logo from "../../images/logo.png";
import Container from "./../../components/ui/Container";
import Menu from "./Menu";
import Actions from "./Actions";
import {  useNavigate } from "react-router-dom";

const Navbar = () => {
  const [mobile, setmobile] = useState(false);
  const navigate = useNavigate();
  const toggleMenu = () => setmobile((i) => !i);
  return (
    <Container className="py-2.5 mx-auto flex items-center justify-between relative z-[9999]">
      <img src={logo} onClick={() => navigate("/")} alt="" />
      <Menu mobile={mobile} toggleMenu={toggleMenu} />
      <Actions toggleMenu={toggleMenu} />
    </Container>
  );
};

export default Navbar;
