import React from "react";
import Styles from "./NavBar.module.css";

type Link = {
  label: string;
  url: string;
};

interface Props {
  linkList: Link[];
}
const NavBar: React.FC<Props> = ({ linkList }) => {
  return (
    <>
      <nav className={Styles.body}>
        <div className={Styles.logo}>
          <a href="/Home">JIMO</a>
        </div>
        <ul className={Styles.navLinksContent}>
          {linkList?.map(({ label, url }: Link) => (
            <li key={label} className={Styles.homeNav}>
              <a href={url}>{label}</a>
            </li>
          ))}
        </ul>
        <div className={Styles.loginContent}>
          <button className={Styles.getStartButton}> Get Start</button>
          <button className={Styles.loginButton}> Login </button>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
