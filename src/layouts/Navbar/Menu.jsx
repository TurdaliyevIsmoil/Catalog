import Link from "./Link";
import { HiOutlineX } from "react-icons/hi";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { useDataContext } from "../../context/context";
import { useEffect, useState } from "react";
import { API } from "../../API";
import { ScrollLink } from "react-scroll";
function Menu({ mobile, toggleMenu }) {
  const { catalogs } = useDataContext();
  const [subcatalogs, setsubcatalogs] = useState([]);
  const { t } = useTranslation();
  useEffect(() => {
    fetch(API + "/api/v1/subcatalog/list")
      .then((i) => i.json())
      .then((i) => i.data.length > 0 && setsubcatalogs(i.data));
  }, []);
  return (
    <menu
      className={`fixed lg:relative bg-[#000a] lg:bg-[#0000] lg:text-blue text-white w-screen overflow-hidden lg:overflow-visible h-screen inset-0 backdrop-blur flex flex-col lg:flex-row items-center transition-height duration-300 top-0 justify-center lg:h-auto gap-5 lg:gap-8 ${
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
      <li
        onClick={toggleMenu}
        to="#catalogs"
        className="z-[99] cursor-pointer hidden lg:block relative curso-pointer child:hidden child:hover:grid py-4"
      >
        {t("catalogs")}
        <div className="z-[99] drop-shadow-xl rounded-md absolute grid grid-cols-3 top-full pt-6 mt-0 border-t-2 border-[blue] pb-7 px-7 w-[700px] max-h-auto lg:max-h-[80vh] lg:overflow-scroll -right-[200px] inset bg-white gap-4">
          {catalogs?.map((i) => (
            <div className="capitalize text-base font-semibold">
              <NavLink className={"hover:text-red"} to={`/catalog/${i.id}`}>
                {i.catalogName}
              </NavLink>
              {subcatalogs &&
                subcatalogs?.map((n) =>
                  n.catalog_id === i.id ? (
                    <NavLink
                      to={`/products/${i.id}`}
                      className="text-sm flex font-normal mt-2 hover:text-red"
                    >
                      {n.subcatalogName}
                    </NavLink>
                  ) : (
                    ""
                  )
                )}
            </div>
          ))}
        </div>
      </li>
      <Link onClick={toggleMenu} link="news" title={t("news")} />
    </menu>
  );
}
export default Menu;
