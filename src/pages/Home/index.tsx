import React from "react";
import Styles from "./Home.module.css";
import Header from "../../components/Header";

const Home = () => {
  return (
    <>
      <Header />
      <div className={Styles.test} />
    </>
  );
};

export default Home;
