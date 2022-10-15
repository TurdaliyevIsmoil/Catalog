import React, { useEffect } from "react";
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

const HomePage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <div>
      <Navbar />
      <Banner />
      <Devider />
      <Catalogs />
      <Devider />
      <TopProducts />
      <Devider />
      <About />
      <Devider />
      <Why />
      <Devider />
      <Services />
      <Devider />
      <OurNews />
      <Devider />
      <Map />
      <Devider />
      <Footer />
      <Devider />
    </div>
  );
};

export default HomePage;
