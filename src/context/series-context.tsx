import React from "react";
import { SeriesContextType } from "../types/series";

const SeriesContext = React.createContext<SeriesContextType | null>(null);

export const useSeriesContext = () => {
  return React.useContext(SeriesContext) as SeriesContextType;
};

type Props = {
  children: React.ReactNode;
};

export const SeriesContextProvider = ({ children }: Props) => {
  const characters = [{ name: "s" }];

  return (
    <SeriesContext.Provider value={{ characters }}>
      {children}
    </SeriesContext.Provider>
  );
};
