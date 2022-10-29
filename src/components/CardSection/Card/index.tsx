import { type } from "os";
import React, { Children } from "react";
import Styles from "./Card.module.css";

type CardProps = {
  children: React.ReactNode;
};
const Card: React.FC<CardProps> = ({ children }) => {
  return <div className={Styles.containerCard}>{children}</div>;
};
export default Card;
