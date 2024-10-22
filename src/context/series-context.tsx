import React from "react";
import { SeriesContextType, SeriesI, PrevNext, Modal } from "../types/series";
import { getApiInfo } from "../services/getApi";
import { URL_Characters } from "../services/constants/urls";

const SeriesContext = React.createContext<SeriesContextType | null>(null);

export const useSeriesContext = () => {
  return React.useContext(SeriesContext) as SeriesContextType;
};

type Props = {
  children: React.ReactNode;
};

export const SeriesContextProvider = ({ children }: Props) => {
  const [characters, setCharacters] = React.useState<SeriesI[]>([]);
  const [modal, setModal] = React.useState<Modal>({
    character: {
      id: 0,
      name: "",
      species: "",
      gender: "",
      status: "",
      origin: { name: "", url: "" },
      location: { name: "", url: "" },
      image: "",
    },
    isOpen: false,
  });

  const [prevNext, setPrevNext] = React.useState<PrevNext>({
    prev: { status: false, url: "" },
    next: { status: false, url: "" },
  });

  const getInfoApi = async (url: string) => {
    try {
      const json = await getApiInfo(url);
      setCharacters(json.results);
      setPrevNext({
        prev: {
          status: json.info.prev ? true : false,
          url: json.info.prev ? json.info.prev : "",
        },
        next: {
          status: json.info.next ? true : false,
          url: json.info.next ? json.info.next : "",
        },
      });
    } catch (error) {
      setPrevNext({
        prev: {
          status: false,
          url: "",
        },
        next: {
          status: false,
          url: "",
        },
      });
    }
  };

  React.useEffect(() => {
    getInfoApi(URL_Characters);
  }, []);

  const modifyModal = (character: SeriesI, isOpen: boolean): void => {
    setModal({ character, isOpen });
  };

  return (
    <SeriesContext.Provider
      value={{
        characters,
        prevNext,
        getInfoApi,
        modifyModal,
        modal,
      }}
    >
      {children}
    </SeriesContext.Provider>
  );
};
