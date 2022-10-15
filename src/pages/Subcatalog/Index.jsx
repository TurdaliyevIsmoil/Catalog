import React, { useEffect } from "react";
import Footer from "../../components/Footer/Index";
import Devider from "../../components/ui/Devider";
import Navbar from "../../layouts/Navbar/Index";
import Catalogs from "../HomePage/Catalogs/Index";
import AllProducts from "./AllProducts/Index";
import Map from "./../../components/Map";

const SubcatalogPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <div>
      <Navbar />
      <Devider />
      <Catalogs />
      <Devider />
      <AllProducts />
      <Devider />
      <Map />
      <Devider />
      <Footer />
      <Devider />
    </div>
  );
};

export default SubcatalogPage;
