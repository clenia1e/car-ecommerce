import React from "react";
import Header from "../../components/Header";
import Carousel from "../../components/Carousel";

const Home = () => {
  const bannerUrl = [
    { img: "f-1.png" },
    { img: "f-1.png" },
    { img: "f-1.png" },
  ];
  return (
    <>
      <Header />
      <Carousel bannerUrl={bannerUrl} />
    </>
  );
};

export default Home;
