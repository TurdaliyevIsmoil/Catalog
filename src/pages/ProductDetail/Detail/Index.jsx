import React from "react";
import Button from "../../../components/ui/Button";
import Container from "./../../../components/ui/Container";

const Details = () => {
  return (
    <Container className={"grid gap-5 lg:grid-cols-2 lg:gap-8"}>
      <img
        src="http://appartment-rental.uz/wp-content/uploads/2022/09/apartments-2.jpg"
        alt=""
        className="rounded-md aspect-square object-cover h-full"
      />
      <div className="flex flex-col gap-3 items-start">
        <div className="flex items-center w-full justify-between">
          <h1 className="text-lg lg:text-2xl">
            Price: <span className="text-cerulean">$49.00</span>
          </h1>
          <h1 className="text-cerulean text-lg lg:text-2xl">In Stock</h1>
        </div>
        <h1 className="text-xl lg:text-[36px] leading-normal">
          Staffing software: key capabilities and top products
        </h1>
        <p className="text-left">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley. It has
          survived not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing.
        </p>
        <Button className={'lg:mt-auto'}>Call Now</Button>
      </div>
    </Container>
  );
};

export default Details;
