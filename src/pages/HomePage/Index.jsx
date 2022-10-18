import React, { useEffect, useState } from "react";
import Navbar from "../../layouts/Navbar/Index";
import Banner from "./Banner";
import Catalogs from "./Catalogs/Index";
import Devider from "./../../components/ui/Devider";
import TopProducts from "./TopProducts/Index";
import About from "../../components/About/Index";
import Why from "../../components/Why/Index";
import Services from "../../components/Services/Index";
import OurNews from "./News/Index";
import Map from "../../components/Map";
import Footer from "../../components/Footer/Index";
import { useDataContext } from "../../context/context";
import { useTranslation } from "react-i18next";

const HomePage = () => {
  const { news, catalogs } = useDataContext();
  const { t } = useTranslation();
  const [data, setdata] = useState([]);
  useEffect(() => {
    window.scrollTo({ top: 0 });
    if (catalogs)
      setdata(() => {
        return catalogs.map((i) => ({
          catalogName: i.catalogName,
          id: i.id,
          link: "/catalog/" + i.id,
        }));
      });
  }, [news, catalogs]);
  return (
    <div>
      <Navbar />
      <Banner />
      <Devider />
      <Catalogs data={data} title={t("explore_category")} />
      <Devider />
      <TopProducts />
      <Devider />
      <About />
      <Devider />
      <Why />
      <Devider />
      <Services />
      <Devider />
      <OurNews news={news} />
      <Devider />
      <Map />
      <Devider />
      <Footer />
      <Devider />
    </div>
  );
};

export default HomePage;
