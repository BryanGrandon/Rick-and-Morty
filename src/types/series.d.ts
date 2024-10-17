interface SeriesI {
  id: number;
  name: string;
  species: string;
  gender: string;
  status: string;
  origin: string;
  location: string;
  image: string;
}

type PrevNext = { prev: boolean; next: boolean };

type SeriesContextType = {
  characters: SeriesI[];
  prevNext: PrevNext;
  handlerClickSeries: (option: string) => void;
};

export { SeriesContextType, SeriesI, PrevNext };
