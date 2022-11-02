import React from "react";
import Card from "./Card";
import Styles from "./CardSection.module.css";

type CardDetails = {
  name: string;
  img: string;
};

interface Props {
  cardetail: CardDetails[];
}
const CardSection: React.FC<Props> = ({ cardetail }) => {
  return (
    <>
      <div className={Styles.contentCardList}>
        {cardetail?.map(({ name, img }: CardDetails) => (
          <Card key={name}>
            <img className={Styles.imgContent} src={img} alt="" />
          </Card>
        ))}
      </div>
    </>
  );
};
export default CardSection;
