import React from "react";
import Styles from "./Header.module.css";
import NavBar from "../NavBar";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <div className={Styles.headerContent}>
        <NavBar />
      </div>
    </>
  );
};
export default Header;
