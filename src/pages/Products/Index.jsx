import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer/Index";
import Devider from "../../components/ui/Devider";
import Navbar from "../../layouts/Navbar/Index";
import Catalogs from "../HomePage/Catalogs/Index";
import Map from "./../../components/Map";
import { useParams } from "react-router-dom";
import AllProducts from "../Subcatalog/AllProducts/Index";

const Products = () => {
  const [data, setdata] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetch(
      "http://49.12.13.213:9090/api/v1/subcatalog/product?offset=0&limit=20&id=" +
        id
    )
      .then((i) => i.json())
      .then((i) => setdata(i.data));
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <div>
      <Navbar />
      <Devider />
      <Devider />
      <AllProducts data={data || []} />
      <Devider />
      <Map />
      <Devider />
      <Footer />
      <Devider />
    </div>
  );
};

export default Products;
