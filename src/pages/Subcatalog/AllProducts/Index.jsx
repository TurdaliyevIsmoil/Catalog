import React from "react";
import { HiArrowDown, HiArrowNarrowRight } from "react-icons/hi";
import Devider from "../../../components/ui/Devider";
import ProductCard from "../../../components/ui/ProductCard/Index";
import Title from "../../../components/ui/Title";
import Container from "./../../../components/ui/Container";

const AllProducts = ({ data }) => {
  console.log(data);
  return (
    <Container>
      <div className="flex justify-between">
        <Title>All Products</Title>
        <div className="rounded-md px-7 rounded-md  flex items-center"></div>
      </div>
      <Devider half />
      <div className="grid lg:grid-cols-4 gap-7 grid-cols-1">
        {data !== null && data.map((i) => <ProductCard {...i} />)}
      </div>
      <Devider half />
      {/* <div className="flex justify-center gap-3 items-center">
        <div className="p-2">1</div>
        <div className="p-2">2</div>
        <div className="p-2">3</div>
        <div className="p-2">4</div>
        <div className="p-2">
          <HiArrowNarrowRight />
        </div>
      </div> */}
    </Container>
  );
};

export default AllProducts;
