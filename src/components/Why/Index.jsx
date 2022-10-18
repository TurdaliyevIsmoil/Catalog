import React from "react";
import img from "../../images/video.png";
import Container from "./../ui/Container";
import Devider from "./../ui/Devider";
import Button from "./../ui/Button";
import Title from "../ui/Title";
import { useTranslation } from "react-i18next";

const Why = () => {
  const { t } = useTranslation();
  return (
    <Container
      id="why"
      className={"flex flex-col items-center lg:flex-row-reverse lg:gap-14"}
    >
      <div className="flex flex-col items-center lg:items-start">
        <Title>{t("why_love")}</Title>
        <Devider half />
        <p className="lg:text-left">{t("about_title")}</p>
        <Devider half />
        <Button>{t("more")}</Button>
        <Devider half />
      </div>
      <img src={img} alt="" />
    </Container>
  );
};

export default Why;
