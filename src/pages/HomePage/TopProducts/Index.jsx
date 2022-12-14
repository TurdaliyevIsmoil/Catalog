import React, { useState } from "react";
import Devider from "../../../components/ui/Devider";
import Title from "../../../components/ui/Title";
import Container from "./../../../components/ui/Container";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductCard from "./../../../components/ui/ProductCard/Index";
import "swiper/css";
import { HiArrowNarrowLeft, HiArrowNarrowRight } from "react-icons/hi";
import { useDataContext } from "../../../context/context";
import { useTranslation } from "react-i18next";

const TopProducts = () => {
  const { t } = useTranslation();
  const [slider, setslider] = useState({});
  const { topProducts } = useDataContext();

  const next = () => {
    slider.slideNext();
  };
  const prev = () => {
    slider.slidePrev();
  };

  return (
    <Container>
      <Title>{t("top_products")}</Title>
      <Devider half />
      <Swiper
        spaceBetween={50}
        breakpoints={{
          // when window width is >= 640px
          0: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 3,
          },
        }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => setslider(swiper)}
      >
        {topProducts?.map((i) => (
          <SwiperSlide>
            <ProductCard {...i} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex gap-2 justify-center mt-6 lg:justify-end">
        <button className="py-4 px-10 rounded-xl bg-[#F0F9FF]" onClick={prev}>
          <HiArrowNarrowLeft />
        </button>
        <button className="py-4 px-10 rounded-xl bg-[#F0F9FF]" onClick={next}>
          <HiArrowNarrowRight />
        </button>
      </div>
    </Container>
  );
};

export default TopProducts;
