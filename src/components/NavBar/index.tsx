import Link from "next/link";
import React from "react";
import Styles from "./NavBar.module.css" 
const NavBar = () => {

    return (
        <>
        <div className={Styles.body}>
            <span className={Styles.logo}>
            <Link href="/Home">JIMO</Link>
            </span>
            <div className={Styles.navLinksContent}>
            <span className={Styles.homeNav}>
            <Link href="/Home" >Home</Link>
            </span>
            <span className={Styles.aboutusInfo}>
            <Link href="#" >AboutUs</Link>
            </span>
            <span className={Styles.PriceInfo}>
            <Link href="#" >Pricing</Link>
            </span>
            <span className={Styles.featuresInfo}>
            <Link href="#" >Features</Link>
            </span>
            <span className={Styles.contactInfo}>
            <Link href="#" >Contact</Link>
            </span>
            </div>
        </div>
        </>
    )
}

export default NavBar;