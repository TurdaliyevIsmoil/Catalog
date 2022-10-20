import React, { useEffect, useState } from "react";
import Devider from "../../components/ui/Devider";
import Navbar from "../../layouts/Navbar/Index";
import TopProducts from "../HomePage/TopProducts/Index";
import Details from "./Detail/Index";
import Map from "./../../components/Map";
import Footer from "../../components/Footer/Index";
import { useParams } from "react-router-dom";
import { useDataContext } from "../../context/context";
import { API } from "../../API";

const ProductDetail = () => {
  const [data, setdata] = useState();
  const { id } = useParams();
  useEffect(() => {
    window.scrollTo({ top: 0 });
    fetch(API + "/api/v1/product/get-product?product-id=" + id)
      .then((i) => i.json())
      .then((i) => setdata(i.data));
  }, []);
  return (
    <div>
      <Navbar />
      <Devider half />
      <Details {...data} />
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
