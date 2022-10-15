import React from "react";

import img from "../../images/who-we-are.png";
import Container from "../ui/Container";
import Title from "./../ui/Title";
import Devider from "./../ui/Devider";
import Button from "../ui/Button";

const About = () => {
  return (
    <Container id="about" className={"flex flex-col items-center lg:flex-row lg:gap-20"}>
      <div className="flex flex-col items-center lg:items-start">
        <Title>About Us</Title>
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
      <img src={img} alt="" className="lg:max-w-3xl" />
    </Container>
  );
};

export default About;
