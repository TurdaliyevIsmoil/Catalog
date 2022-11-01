import React from "react";

import img from "../../images/who-we-are.png";
import Container from "../ui/Container";
import Title from "./../ui/Title";
import Devider from "./../ui/Devider";
import Button from "../ui/Button";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  return (
    <Container
      id="about"
      className={"flex flex-col items-center lg:flex-row lg:gap-20"}
    >
      <div className="flex flex-col items-center lg:items-start">
        <Title>{t("about")}</Title>
        <Devider half />
        <p className="lg:text-left text-base">{t("about_title")}</p>
        <Devider half />
        <Button>{t("more")}</Button>
        <Devider half />
      </div>
      <img src={img} alt="" className="lg:max-w-3xl" />
    </Container>
  );
};

export default About;
