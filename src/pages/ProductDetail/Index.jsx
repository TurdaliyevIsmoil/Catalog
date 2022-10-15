import React, { useEffect } from "react";
import Devider from "../../components/ui/Devider";
import Navbar from "../../layouts/Navbar/Index";
import TopProducts from "../HomePage/TopProducts/Index";
import Details from "./Detail/Index";
import Map from "./../../components/Map";
import Footer from "../../components/Footer/Index";

const ProductDetail = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <div>
      <Navbar />
      <Devider half />
      <Details />
      <Devider />
      <TopProducts />
      <Devider />
      <Map />
      <Devider />
      <Footer />
      <Devider />
    </div>
  );
};

export default ProductDetail;
