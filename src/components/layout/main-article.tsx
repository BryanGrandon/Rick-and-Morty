// import React from "react";

import { useSeriesContext } from "../../context/series-context";

const MainArticle = () => {
  const { characters } = useSeriesContext();
  return (
    <main className="main-article">
      <article>
        <h2>Filter</h2>
      </article>

      <article>
        {characters.map((e) => (
          <p key={e.id}>{e.name}</p>
        ))}
      </article>
    </main>
  );
};

export default MainArticle;
