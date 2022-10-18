import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const NewsCard = ({ newsTitle, NewsImageLink, NewsDate, newsBody }) => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col gap-3">
      <img src={NewsImageLink} alt="" className="aspect-[16/10] rounded" />
      <div className="flex flex-col gap-2">
        <div className="flex justify-start items-center">
          <p className="font-normal text-[14px]">
            {new Date(NewsDate).toDateString()}
          </p>
        </div>
        <h1 className="text-[20px] text-black">{newsBody}</h1>
        <NavLink to="#" className="text-cerulean flex items-center gap-1">
          {t("more")} <HiArrowNarrowRight />
        </NavLink>
      </div>
    </div>
  );
};

export default NewsCard;
