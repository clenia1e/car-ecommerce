import { type } from "os";
import React from "react";
import Styles from "./Footer.module.css";

type Category = {
  name: string;
  links: Link[];
};

type Link = {
  url: string;
  name: string;
};

interface Props {
  categories: Category[];
}

const Footer: React.FC<Props> = ({ categories }) => {
  return (
    <div className={Styles.grid}>
      <div className={Styles.container}>
        {categories?.map(({ name, links }: Category) => (
          <div className={Styles.linkContainer} key={name}>
            <div>{name}</div>
            {links?.map((item: Link) => (
              <a key={item.name} className={Styles.link} href={item.url}>
                {item.name}
              </a>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
export default Footer;
