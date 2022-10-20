import React from "react";
import { useTranslation } from "react-i18next";
import Container from "./../ui/Container";
import Title from "./../ui/Title";
import Devider from "./../ui/Devider";
import { NavLink } from "react-router-dom";
import { useDataContext } from "../../context/context";

const List = () => {
  const { t } = useTranslation();
  const { list } = useDataContext();
  return (
    <Container>
      <Title>{t("list")}</Title>
      <Devider half />
      <div className="grid grid-cols-2 gap-2 lg:grid-cols-5">
        {list.map((i) => (
          <NavLink
            className={"underline py-2 text-center truncate"}
            to={`/details/${i.productId}`}
          >
            {i.productName}
          </NavLink>
        ))}
      </div>
    </Container>
  );
};

export default List;
