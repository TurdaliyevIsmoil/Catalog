import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer/Index";
import Devider from "../../components/ui/Devider";
import Navbar from "../../layouts/Navbar/Index";
import Catalogs from "../HomePage/Catalogs/Index";
import AllProducts from "./AllProducts/Index";
import Map from "./../../components/Map";
import { useParams } from "react-router-dom";
import { API } from "../../API";

const SubcatalogPage = () => {
  const [subcatalogs, setsubcatalogs] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    window.scrollTo({ top: 0 });
    fetch(API + "/api/v1/subcatalog/list")
      .then((i) => i.json())
      .then((i) => i.data.filter((i) => i.catalog_id === +id))
      .then((i) =>
        i.map((i) => ({
          catalogName: i.subcatalogName,
          id: i.subcatalogID,
          link: "/products/" + i.subcatalogID,
        }))
      )
      .then((i) => setsubcatalogs(i));
  }, []);
  return (
    <div>
      <Navbar />
      <Devider />
      <Catalogs data={subcatalogs} title="Explore by Subcatalog" />
      <Devider />
      {/* <AllProducts /> */}
      <Devider />
      <Map />
      <Devider />
      <Footer />
      <Devider />
    </div>
  );
};

export default SubcatalogPage;
