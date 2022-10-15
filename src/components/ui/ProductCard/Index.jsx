import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { NavLink } from 'react-router-dom';

const ProductCard = () => {
  return (
    <div className="flex flex-col gap-3">
      <img
        src={
          "https://www.redken.com/~/media/redken-commerce/images/haircare/all-soft/all-soft/redken-2020-all-soft-shampoo-retail-amazon-benefits-list.jpg?h=420&w=420&hash=34B1B18E469C4C15C743909DD3846F4524F74554"
        }
        alt=""
        className="aspect-[16/10] rounded"
      />
      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <p className="font-normal text-[14px]">Designing</p>
          <b className="text-lg font-medium">$48</b>
        </div>
        <h1 className="text-[20px] text-black">
          Staffing software: key capabilities and top products
        </h1>
        <NavLink to="/details" className="text-cerulean flex items-center gap-1">
          Read more <HiArrowNarrowRight />
        </NavLink>
      </div>
    </div>
  );
};

export default ProductCard;
