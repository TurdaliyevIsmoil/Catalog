import React from "react";
import Title from "./../../../components/ui/Title";
import Container from "./../../../components/ui/Container";
import Devider from "../../../components/ui/Devider";
import Item from "./Item";
import List from "./List";

const Catalogs = () => {
  return (
    <Container id="catalogs">
      <Title>Explore by Catalog </Title>
      <Devider half />
      <List />
    </Container>
  );
};

export default Catalogs;
