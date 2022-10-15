import React, { useState } from "react";
import logo from "../../images/logo.png";
import Link from "./Link";
import Container from "./../../components/ui/Container";
import Menu from "./Menu";
import Actions from "./Actions";

const Navbar = () => {
  const [mobile, setmobile] = useState(false);
  const toggleMenu = () => setmobile((i) => !i);
  return (
    <Container className="py-2.5 mx-auto flex items-center justify-between">
      <img src={logo} alt="" />
      <Menu mobile={mobile} toggleMenu={toggleMenu} />
      <Actions toggleMenu={toggleMenu} />
    </Container>
  );
};

export default Navbar;
