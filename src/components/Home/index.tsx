import React from "react";
import Header from "../Header";
import Carousel from "../Carousel";
import Footer from "../Footer";
import CardSection from "../CardSection";
import Styles from "./Home.module.css";

const Home = () => {
  const bannerUrl = [
    { name: "firstImage", img: "porsche.jpeg" },
    { name: "secondImage", img: "porsche.jpeg" },
    { name: "thirdImage", img: "porsche.jpeg" },
  ];

  const linksMenu = [
    { url: "www.test.com", name: "Find a Store" },
    { url: "www.test.com", name: "Sign Up For Email" },
    { url: "www.test.com", name: "Send Us Feedback" },
  ];
  const linksHelpdesk = [
    { url: "www.test.com", name: "Order Status" },
    { url: "www.test.com", name: "Delivery" },
    { url: "www.test.com", name: "Returns" },
    { url: "www.test.com", name: "Payment Options" },
    { url: "www.test.com", name: "Contact Us" },
  ];
  const linksAbout = [
    { url: "www.test.com", name: "Careers" },
    { url: "www.test.com", name: "Investors" },
  ];

  const categoryList = [
    {
      name: "Menu",
      links: linksMenu,
    },
    {
      name: "HelpDesk",
      links: linksHelpdesk,
    },
    {
      name: "About Jimo",
      links: linksAbout,
    },
  ];
  const cardetail = [
    {
      name: "firstImage",
      img: "car1.jpeg",
    },
    {
      name: "secondImage",
      img: "car2.jpeg",
    },
    {
      name: "thirdImage",
      img: "car3.jpeg",
    },
  ];

  return (
    <div>
      <Header />
      <div>
        <Carousel bannerUrl={bannerUrl} />
      </div>
      <div className={Styles.bodyContent}>
        <CardSection cardetail={cardetail} />
      </div>
      <div>
        <Footer categories={categoryList} />
      </div>
    </div>
  );
};

export default Home;
