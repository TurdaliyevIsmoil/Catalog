import React from "react";
import Button from "../../../components/ui/Button";
import Container from "./../../../components/ui/Container";
import { useTranslation } from "react-i18next";

const Details = ({
  productName,
  productDescriptions,
  productImageName,
  productIsActive,
  productPrice,
}) => {
  const { t } = useTranslation();
  return (
    <Container className={"grid gap-5 lg:grid-cols-2 lg:gap-8"}>
      <img
        src={productImageName?.String}
        alt=""
        className="rounded-md aspect-square object-cover h-full"
      />
      <div className="flex flex-col gap-3 items-start">
        <div className="flex items-center w-full justify-between">
          <h1 className="text-lg lg:text-2xl">
            {t("price")}: <span className="text-cerulean">${productPrice}</span>
          </h1>
          <h1 className="text-cerulean text-lg lg:text-2xl">
            {productIsActive ? t("stock") : ""}
          </h1>
        </div>
        <h1 className="text-xl lg:text-[36px] leading-normal">{productName}</h1>
        <p className="text-left">{productDescriptions}</p>
        <Button className={"lg:mt-auto"}>{t("tel")}</Button>
      </div>
    </Container>
  );
};

export default Details;
