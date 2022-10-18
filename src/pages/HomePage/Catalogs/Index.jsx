import React from "react";
import Title from "./../../../components/ui/Title";
import Container from "./../../../components/ui/Container";
import Devider from "../../../components/ui/Devider";
import Item from "./Item";
import List from "./List";

const Catalogs = ({ data, title }) => {
  console.log("ss",data)
  return (
    <Container id="catalogs">
      <Title>{title} </Title>
      <Devider half />
      <List data={data} />
    </Container>
  );
};

export default Catalogs;
