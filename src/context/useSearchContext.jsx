import { createContext, useContext, useState } from 'react';

const Context = createContext();

export function SearchProvider({ children }) {
  const [search, setSearch] = useState(false);
  const [nav, setNav] = useState(false);
  const [header, setHeader] = useState(false);

  return (
    <Context.Provider
      value={{ header, setHeader, search, setSearch, nav, setNav }}
    >
      {children}
    </Context.Provider>
  );
}

export const useSearchContext = () => useContext(Context);
