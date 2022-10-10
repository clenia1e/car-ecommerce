import Link from "next/link";
import React from "react";
import Styles from "./NavBar.module.css";
const NavBar = () => {
  return (
    <>
      <div className={Styles.body}>
        <div className={Styles.logo}>
          <Link href="/Home">JIMO</Link>
        </div>
        <div className={Styles.navLinksContent}>
          <div className={Styles.homeNav}>
            <Link href="/Home">Home</Link>
          </div>
          <div className={Styles.aboutusInfo}>
            <Link href="#">AboutUs</Link>
          </div>
          <div className={Styles.PriceInfo}>
            <Link href="#">Pricing</Link>
          </div>
          <div className={Styles.featuresInfo}>
            <Link href="#">Features</Link>
          </div>
          <div className={Styles.contactInfo}>
            <Link href="#">Contact</Link>
          </div>
        </div>
        <div className={Styles.loginContent}>
          <button className={Styles.getStartButton}> Get Start</button>
          <button className={Styles.loginButton}> Login </button>
        </div>
      </div>
    </>
  );
};

export default NavBar;
