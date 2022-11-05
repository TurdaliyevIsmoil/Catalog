import React from "react";
import Button from "../../../components/ui/Button";
import Container from "./../../../components/ui/Container";
import { useTranslation } from "react-i18next";
import Calculator from "../Calculator";

const Details = ({
  productName,
  productDescriptions,
  productImageName,
  productIsActive,
  productPrice,
  productId,
  productTemplateId
}) => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col items-stretch">
      <Container className={"grid gap-5 lg:grid-cols-2 lg:gap-8"}>
        <img
          src={productImageName?.String}
          alt=""
          className="rounded-md aspect-square object-cover h-full"
        />
        <div className="flex flex-col gap-3 items-start">
          <div className="flex items-center w-full justify-between">
            <h1 className="text-lg lg:text-2xl">
              {t("price")}:{" "}
              <span className="text-cerulean">{productPrice} <sub>uzs</sub></span>
            </h1>
            <h1 className="text-cerulean text-lg lg:text-2xl">
              {productIsActive ? t("stock") : ""}
            </h1>
          </div>
          <h1 className="text-xl lg:text-[36px] leading-normal">
            {productName}
          </h1>
          <p className="text-left">{productDescriptions}</p>
          <Button className={"lg:mt-auto"}>{t("tel")}</Button>
        </div>
      </Container>
      <Calculator id={productTemplateId} productPrice={+productPrice} />
    </div>
  );
};

export default Details;
