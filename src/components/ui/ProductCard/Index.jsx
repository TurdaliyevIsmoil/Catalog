import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const ProductCard = ({
  productName,
  productImageName,
  productPrice,
  productId,
}) => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col gap-3">
      <img
        src={productImageName?.String}
        alt=""
        className="aspect-[16/10] rounded-xl shadow"
      />
      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <p className="font-normal text-[14px]">{new Date().toDateString()}</p>
          <b className="text-lg font-medium">${productPrice}</b>
        </div>
        <h1 className="text-[20px] text-black">{productName}</h1>
        <NavLink
          to={`/details/${productId}`}
          className="text-cerulean flex items-center gap-1"
        >
          {t("more")} <HiArrowNarrowRight />
        </NavLink>
      </div>
    </div>
  );
};

export default ProductCard;
