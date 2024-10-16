import React from "react";
import { SeriesContextType, SeriesI, PrevNext } from "../types/series";
import { getApiInfo } from "../services/getApi";

const SeriesContext = React.createContext<SeriesContextType | null>(null);

export const useSeriesContext = () => {
  return React.useContext(SeriesContext) as SeriesContextType;
};

type Props = {
  children: React.ReactNode;
};

export const SeriesContextProvider = ({ children }: Props) => {
  const [characters, setCharacters] = React.useState<SeriesI[]>([]);

  const [urlNext, setUrlNext] = React.useState<string>("");
  const [urlPrev, setUrlPrev] = React.useState<string>("");

  const [prevNext, setPrevNext] = React.useState<PrevNext>({
    prev: false,
    next: true,
  });

  const getInfo = async (url: string) => {
    const json = await getApiInfo(url);
    setCharacters(json.results);
    setUrlNext(json.info.next ? json.info.next : "");
    setUrlPrev(json.info.prev ? json.info.prev : "");
    setPrevNext({
      prev: json.info.prev ? true : false,
      next: json.info.next ? true : false,
    });
  };

  React.useEffect(() => {
    getInfo("https://rickandmortyapi.com/api/character");
  }, []);

  console.log(prevNext);

  const handlerClickSeries = (option: string) => {
    let url = option == "next" ? urlNext : urlPrev;
    getInfo(url);
  };

  return (
    <SeriesContext.Provider
      value={{ characters, prevNext, handlerClickSeries }}
    >
      {children}
    </SeriesContext.Provider>
  );
};
