import React from "react";
import Header from "../../components/Header";
import Carousel from "../../components/Carousel";

const Home = () => {
  const bannerUrl = [
    { img: "porsche.jpeg" },
    { img: "porsche.jpeg" },
    { img: "porsche.jpeg" },
  ];
  return (
    <>
      <Header />
      <Carousel bannerUrl={bannerUrl} />
    </>
  );
};

export default Home;
