import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "./reducer";

const DATA = createContext();

const initialState = {
  news: [],
  catalogs: [],
  homeSlide: [],
  topProducts: [],
};

export const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const fetchNews = () => {
    fetch("http://49.12.13.213:9090/api/v1/home-news/list?offset=0&limit=12")
      .then((i) => i.json())
      .then((i) => dispatch({ type: "news", payload: i.data }));
  };
  const fetchCatalogs = () => {
    fetch("http://49.12.13.213:9090/api/v1/catalog/get-list")
      .then((i) => i.json())
      .then((i) => dispatch({ type: "catalogs", payload: i.data }));
  };
  const fetchProducts = () => {
    fetch("http://49.12.13.213:9090/api/v1/product/top?offset=0&limit=12")
      .then((i) => i.json())
      .then((i) => dispatch({ type: "topProducts", payload: i.data }));
  };
  useEffect(() => {
    fetchNews();
    fetchCatalogs();
    fetchProducts();
  }, []);
  return <DATA.Provider value={{ ...state }}>{children}</DATA.Provider>;
};

export const useDataContext = () => useContext(DATA);
