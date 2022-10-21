import React from "react";
import Header from "../../components/Header";
import Carousel from "../../components/Carousel";
import Footer from "../../components/Footer";

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

  return (
    <div>
      <Header />
      <div>
        <Carousel bannerUrl={bannerUrl} />
      </div>
      <Footer categories={categoryList} />
    </div>
  );
};

export default Home;
