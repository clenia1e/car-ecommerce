import React from "react";
import Styles from "./Carousel.module.css";
import Slider from "react-slick";

type BannerUrl = {
  img: string;
};

interface Props {
  bannerUrl: BannerUrl[];
}

const Carousel: React.FC<Props> = ({ bannerUrl }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className={Styles.carouselContainer}>
      <Slider {...settings} className={Styles.carouselContent}>
        {bannerUrl?.map((img: BannerUrl) => (
          <div>
            <img src={img.img} width="100%" alt="porscheBanner" />
          </div>
        ))}
      </Slider>
    </div>
  );
};
export default Carousel;
