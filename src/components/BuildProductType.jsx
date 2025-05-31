import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import {
  AppSvg,
  PhysicalDigital,
  ProductsSvg,
  SaasSvg,
  WebsiteSvg,
} from "../assets";
import "../styles/BuildProductType.css";
import "swiper/css";
import "swiper/css/autoplay";
import { useRef, useState } from "react";

function BuildProductType() {
  const productsBuild = [
    {
      img: <AppSvg />,
      head: "Apps",
      content: "Build mobile applications that solve everyday problems.",
      bg: "#A114A1",

      color: "#fff",
    },
    {
      img: <WebsiteSvg />,
      head: "Websites",
      content: "Create stunning, functional websites for any purpose.",
      bg: "#FFF1DE",

      color: "#4F2A0E",
    },
    {
      img: <SaasSvg />,
      head: "SaaS Products",
      content: "Develop scalable online tools and platforms.",

      bg: "#550F55",

      color: "#EDE2DC",
    },
    {
      img: <ProductsSvg />,
      head: " Physical Products",
      content: "Design innovative hardware or real-world tools.",
      bg: "#FFF1DE",

      color: "#181818",
    },
    {
      img: <img src={PhysicalDigital} alt="Physical + Digital Combos" />,
      head: "Physical + Digital Combos",
      content: "Combine tech and hardware for smart experiences.",
      bg: "#F9FAFC",

      color: "#1F2D3D",
    },
  ];
  const swiper = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <div className="bpt">
        <div className="section-heading">
          <span>What type of </span>
          <span className="section-heading-pink">products you can build</span>
          <span>?</span>
        </div>
        <div className="bpt-main">
          <Swiper
            className="bpt-main-slider"
            modules={[Autoplay]}
            loop={true}
            centeredSlides={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            slidesPerView="auto"
            spaceBetween={10}
            breakpoints={{
              768: {
                spaceBetween: 20,
              },
            }}
            onSlideChange={(swiper) => {
              const realIndex = swiper.realIndex;
              setActiveIndex(realIndex);
            }}
            ref={swiper}
          >
            {productsBuild.map((product, idx) => (
              <SwiperSlide
                className="bpt-main-slides"
                key={idx}
                style={{
                  color: product.color,
                  backgroundColor: product.bg,
                }}
              >
                <div className="bpt-main-slides-top">{product.img}</div>
                <div className="bpt-main-slides-bottom">
                  <div className="bpt-msb-head">{product.head}</div>
                  <div className="bpt-msb-content">{product.content}</div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="bpt-main-navigation">
            {productsBuild.map((_, idx) => (
              <div
                className={`bpt-main-navigation-dot ${
                  activeIndex === idx ? "active" : ""
                }`}
                key={idx}
                onClick={() => swiper.current?.swiper?.slideToLoop(idx)} // 🔁 Go to clicked slide
              ></div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default BuildProductType;
