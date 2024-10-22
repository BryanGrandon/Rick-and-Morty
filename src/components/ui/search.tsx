import React from "react";
// Icons
import { FaSearch } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

type Search = {
  placeholder: string;
  handlerSubmit: (value: string) => void;
  handlerClose: () => void;
};

const Search = ({ placeholder, handlerSubmit, handlerClose }: Search) => {
  const [characterName, setCharacterName] = React.useState<string>("");

  return (
    <section
      className="search"
      onKeyDown={(e) => {
        if (e.key == "Enter") handlerSubmit(characterName);
      }}
    >
      <input
        type="text"
        className="search__input"
        placeholder={placeholder}
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
            handlerClose();
          }}
        >
          <IoClose />
        </button>
        <button
          className="search__buttons-btn button-search"
          onClick={() => handlerSubmit(characterName)}
        >
          <FaSearch />
        </button>
      </section>
    </section>
  );
};

export default Search;
