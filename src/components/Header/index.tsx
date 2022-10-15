import React from "react";
import Styles from "./Header.module.css";
import NavBar from "../NavBar";

const Header = () => {
  const linkList = [
    { label: "Home", url: "/" },
    { label: "About Us", url: "/aboutus" },
    { label: "Pricing", url: "/pricing" },
    { label: "Features", url: "/features" },
    { label: "Contact", url: "/contact" },
  ];
  return (
    <>
      <div className={Styles.headerContent}>
        <NavBar linkList={linkList} />
      </div>
    </>
  );
};
export default Header;
