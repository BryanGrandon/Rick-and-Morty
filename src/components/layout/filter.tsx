import React from "react";

import { useSeriesContext } from "../../context/series-context";
import { URL_Characters } from "../../services/constants/urls";

import Dropdown from "../ui/dropdown";
import Search from "../ui/search";

const Filter = () => {
  const [filterGender, setFilterGender] = React.useState<string>("all");
  const [filterStatus, setFilterStatus] = React.useState<string>("all");
  const [FilterName, setFilterName] = React.useState<string>("");

  const { getInfoApi } = useSeriesContext();

  const getUrlFilter = (name: string, gender: string, status: string) => {
    let theGender = gender != "all" ? gender : "";
    let theStatus = status != "all" ? status : "";
    let url =
      URL_Characters + `?name=${name}&gender=${theGender}&status=${theStatus}`;
    getInfoApi(url);
  };

  const handlerSubmitSearch = (character: string) => {
    setFilterName(character);
    getUrlFilter(character, filterGender, filterStatus);
  };

  const handlerClickGender = (gender: string) => {
    setFilterGender(gender);
    getUrlFilter(FilterName, gender, filterStatus);
  };

  const genderArray: string[] = [
    "all",
    "male",
    "female",
    "genderless",
    "unknown",
  ];

  const handlerClickStatus = (status: string) => {
    setFilterStatus(status);
    getUrlFilter(FilterName, filterGender, status);
  };

  const statusArray: string[] = ["all", "alive", "dead", "unknown"];

  return (
    <article className="filter">
      <article className="filter-main">
        <Dropdown
          title="Status:"
          arrayElements={statusArray}
          handlerSubmit={(status) => handlerClickStatus(status)}
        />
        <Dropdown
          title="Gender:"
          arrayElements={genderArray}
          handlerSubmit={(gender) => handlerClickGender(gender)}
        />
        <Search
          placeholder="Character Name..."
          handlerSubmit={handlerSubmitSearch}
          handlerClose={() => handlerSubmitSearch("")}
        />
      </article>
    </article>
  );
};

export default Filter;
