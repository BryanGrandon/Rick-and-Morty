// import React from "react";
import { useSeriesContext } from "../../context/series-context";
import { SeriesI } from "../../types/series";

type Props = {
  character: SeriesI;
};

const Card = ({ character }: Props) => {
  const { modifyModal } = useSeriesContext();

  return (
    <section className="card" onClick={() => modifyModal(character, true)}>
      <img src={character.image} alt="" className="card__img" />
      <p className="card__title">{character.name}</p>
    </section>
  );
};

export default Card;
