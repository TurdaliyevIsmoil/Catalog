import React from "react";
import img from "../../images/video.png";
import Container from "./../ui/Container";
import Devider from "./../ui/Devider";
import Button from "./../ui/Button";
import Title from "../ui/Title";

const Why = () => {
  return (
    <Container id="why" className={"flex flex-col items-center lg:flex-row-reverse lg:gap-14"}>
      <div className="flex flex-col items-center lg:items-start">
        <Title>Why Customers Love Us</Title>
        <Devider half />
        <p className="lg:text-left">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo.
        </p>
        <Devider half />
        <Button>Learn more</Button>
        <Devider half />
      </div>
      <img src={img} alt="" />
    </Container>
  );
};

export default Why;
