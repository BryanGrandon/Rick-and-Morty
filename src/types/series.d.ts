interface SeriesI {
  id: number;
  name: string;
  species: string;
  gender: string;
  status: string;
  origin: { name: string; url: string };
  location: { name: string; url: string };
  image: string;
}

type PrevNext = { prev: boolean; next: boolean };
type Modal = { character: SeriesI; isOpen: boolean };

type SeriesContextType = {
  characters: SeriesI[];
  prevNext: PrevNext;
  modal: Modal;
  modifyModal: (option: SeriesI, isOpen: boolean) => void;
  handlerClickSeries: (option: string) => void;
};

export { SeriesContextType, SeriesI, PrevNext, Modal };
