import React from "react";
import img from "../../images/video.png";
import Container from "./../ui/Container";
import Devider from "./../ui/Devider";
import Button from "./../ui/Button";
import Title from "../ui/Title";
import video from "../../video/video.mp4";
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
        <p className="lg:text-left text-base">{t("why_desc")}</p>
        <Devider half />
        <Button>{t("more")}</Button>
        <Devider half />
      </div>
      <video width="320" className="aspect-16/10 w-full object-cover rounded lg:w-[500px]" height="240" poster={img} controls>
        <source src={video} type="video/mp4" />
        <source src="movie.ogg" type="video/ogg" />
        Your browser does not support the video tag.
      </video>
    </Container>
  );
};

export default Why;
