import React from "react";
import Devider from "../ui/Devider";
import Container from "./../ui/Container";
import Title from "./../ui/Title";

const Services = () => {
  return (
    <Container id="services">
      <Title>Our Services</Title>
      <Devider half />
      <div className="flex flex-col gap-3 lg:grid lg:grid-cols-3 lg:gap-5">
        <Service
          img="s1.png"
          title="Machine learning"
          p="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores."
        />
        <Service
          img="s2.png"
          title="Machine learning"
          p="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores."
        />
        <Service
          img="s3.png"
          title="Machine learning"
          p="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores."
        />
      </div>
    </Container>
  );
};

export default Services;

function Service({ img, title, p }) {
  return (
    <div
      className="flex gap-5 items-center bg-white p-4 rounded-md lg:flex-col lg:items-start lg:p-10"
      style={{
        boxShadow: "0px 12px 38px 17px rgba(24, 92, 255, 0.1)",
      }}
    >
      <img
        src={`/icons/${img}`}
        alt=""
        className="aspect-square flex-[0_0_70px]"
      />
      <div className="flex flex-col">
        <h2 className="text-[20px] text-black">{title}</h2>
        <p className="text-[10px] text-left lg:text-sm lg:mt-2">{p}</p>
      </div>
    </div>
  );
}
