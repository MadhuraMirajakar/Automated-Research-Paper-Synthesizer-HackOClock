import { createContext, useContext, useState } from "react";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [papers, setPapers] = useState([]);

  return (
    <DataContext.Provider value={{ papers, setPapers }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);