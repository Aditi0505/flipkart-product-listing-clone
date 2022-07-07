import { createContext, useContext, useReducer } from "react";
import { filterReducer } from "../reducer/filter-reducer";

const FilterContext = createContext(null);

const FilterProvider = ({ children }) => {
  const [filterState, filterDispatch] = useReducer(filterReducer, {
    sortBy: null,
    sizes: { S: false, M: false, L: false, XL: false },
    idealFor: { Men: false, Women: false },
    brands: { Dressberry: false, Bewakoof: false, Libas: false },
  });
  return (
    <FilterContext.Provider value={{ filterState, filterDispatch }}>
      {children}
    </FilterContext.Provider>
  );
};
const useFilter = () => useContext(FilterContext);

export { useFilter, FilterProvider };
