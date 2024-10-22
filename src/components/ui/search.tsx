import React from "react";
import { useSeriesContext } from "../../context/series-context";
import { URL_Characters } from "../../services/constants/urls";
// Icons
import { FaSearch } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

type Props = {
  value: string;
  placeholder: string;
  handlerSubmit: () => void;
  handlerClose: () => void;
  handlerChangeValue: () => void;
};

const Search = () => {
  const [characterName, setCharacterName] = React.useState<string>("");
  const { getInfoApi } = useSeriesContext();
  const handlerSubmit = () => {
    getInfoApi(URL_Characters + `?name=${characterName}`);
  };
  return (
    <section
      className="search"
      onKeyDown={(e) => {
        if (e.key == "Enter") handlerSubmit();
      }}
    >
      <input
        type="text"
        className="search__input"
        placeholder="Character Name..."
        onChange={(e) => setCharacterName(e.target.value)}
        value={characterName}
      />
      <section className="search__buttons">
        <button
          className={`search__buttons-btn ${
            characterName != "" ? "button-close" : "icon-transparent"
          }`}
          onClick={() => {
            setCharacterName("");
            getInfoApi(URL_Characters);
          }}
        >
          <IoClose />
        </button>
        <button
          className="search__buttons-btn button-search"
          onClick={() => handlerSubmit()}
        >
          <FaSearch />
        </button>
      </section>
    </section>
  );
};

export default Search;
