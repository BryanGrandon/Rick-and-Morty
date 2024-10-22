// import React from "react";
import { useSeriesContext } from "../../context/series-context";
import { URL_Characters } from "../../services/constants/urls";
import Search from "../ui/search";

const Filter = () => {
  const { getInfoApi } = useSeriesContext();

  const handlerSubmitSearch = (character: string) => {
    getInfoApi(URL_Characters + `?name=${character}`);
  };

  return (
    <article className="filter">
      <Search
        placeholder="Character Name..."
        handlerSubmit={handlerSubmitSearch}
        handlerClose={() => getInfoApi(URL_Characters)}
      />
    </article>
  );
};

export default Filter;
