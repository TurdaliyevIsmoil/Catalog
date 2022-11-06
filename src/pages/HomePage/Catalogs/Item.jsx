import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

function Item({ title, id, link }) {
  const { t } = useTranslation();
  return (
    <NavLink
      to={`${link}`}
      className="border cursor-pointer hover:text-white hover:bg-blue duration-150 rounded-md py-4 px-3 flex flex-col items-center gap-1.5"
      style={{
        border: "1px solid #DFDFDF",
      }}
    >
      <h2 className="lg:text-xl text-base  text-center">{title}</h2>
      <p className="text-lg">{t("catalog")}</p>
    </NavLink>
  );
}

export default Item;
