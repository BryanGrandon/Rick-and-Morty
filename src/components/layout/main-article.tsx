// import React from "react";

import { useSeriesContext } from "../../context/series-context";
import Card from "../ui/card";

const MainArticle = () => {
  const { characters } = useSeriesContext();
  return (
    <main className="main-article">
      <article>
        <h2>Filter</h2>
      </article>

      <article>
        {characters.map((e) => (
          <Card key={e.id} info={e} />
        ))}
      </article>
    </main>
  );
};

export default MainArticle;
