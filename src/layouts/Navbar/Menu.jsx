import Link from "./Link";
import { HiOutlineX } from "react-icons/hi";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
function Menu({ mobile, toggleMenu }) {
  const { t } = useTranslation();
  return (
    <menu
      className={`fixed lg:relative bg-[#000a] lg:bg-[#0000] lg:text-blue text-white w-screen h-screen inset-0 backdrop-blur flex flex-col lg:flex-row items-center overflow-hidden transition-height duration-300 top-0 justify-center lg:h-auto gap-5 lg:gap-8 ${
        mobile ? "h-screen" : "h-0"
      }`}
      onClick={toggleMenu}
    >
      <HiOutlineX className="absolute lg:hidden top-6 right-5 text-3xl" />
      <NavLink
        to={`/`}
        className="p-1 cursor-pointer w-full lg:w-auto text-center hover:text-red lg:font-medium duration-300"
      >
        {t("home")}
      </NavLink>
      <Link onClick={toggleMenu} link="services" title={t("services")} />
      <Link onClick={toggleMenu} link="catalogs" title={t("products")} />
      <Link onClick={toggleMenu} link="about" title={t("about")} />
      <Link onClick={toggleMenu} link="why" title={t("why")} />
      <Link onClick={toggleMenu} link="catalogs" title={t("catalogs")} />
      <Link onClick={toggleMenu} link="news" title={t("news")} />
    </menu>
  );
}
export default Menu;
