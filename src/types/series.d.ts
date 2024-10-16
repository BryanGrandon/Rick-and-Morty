interface SeriesI {
  name: string;
}

type SeriesContextType = {
  characters: SeriesI[];
};

export { SeriesContextType };
