import React from "react";
import Card from "./Card";
import Styles from "./CardSection.module.css";

type CardDetails = {
  name: string;
  img: string;
  carname: string;
  detail: string;
};

interface Props {
  cardetail: CardDetails[];
}
const CardSection: React.FC<Props> = ({ cardetail }) => {
  return (
    <>
      <div className={Styles.contentCardList}>
        {cardetail?.map(({ name, img, carname, detail }: CardDetails) => (
          <Card key={name}>
            <img src={img} alt="" />
            <h1>{carname}</h1>
            <p>{detail}</p>
          </Card>
        ))}
      </div>
    </>
  );
};
export default CardSection;
