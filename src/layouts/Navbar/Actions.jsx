import React from "react";
import { useTranslation } from "react-i18next";
import { HiGlobeAlt, HiOutlineMenu } from "react-icons/hi";
import Button from "./../../components/ui/Button";
import i18next from "i18next";

const Actions = ({ toggleMenu }) => {
  const { t } = useTranslation();
  return (
    <div className="flex text-blue items-center gap-5 ">
      <div
        className="flex items-center gap-1 uppercase cursor-pointer"
        onClick={() =>
          i18next.changeLanguage(i18next.language === "ru" ? "uz" : "ru")
        }
      >
        <HiGlobeAlt className="text-2xl" />
        {i18next.language}
      </div>
      <div className="flex lg:hidden">
        <HiOutlineMenu className="text-3xl" onClick={toggleMenu} />
      </div>
      <Button className={"bg-red hidden md:flex"}>{t("tel")}</Button>
    </div>
  );
};

export default Actions;
