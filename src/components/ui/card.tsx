// import React from "react";
import { SeriesI } from "../../types/series";

type Props = {
  info: SeriesI;
};

const Card = ({ info }: Props) => {
  return (
    <section className="card">
      <img src={info.image} alt="" className="card__img" />
      <p className="card__title">{info.name}</p>
    </section>
  );
};

export default Card;
