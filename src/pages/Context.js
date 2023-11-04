import axios from "axios";
import { createContext, useContext, useEffect, useRef, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const AppContext = createContext();
const api = "https://course-api.com/react-store-products";

const Context = ({ children }) => {
  const [products, setProducts] = useState([]);

  const originData = useRef([]);

  const fetchData = () => {
    axios.get(api).then((res) => {
      setProducts(res.data);
      originData.current = res.data;
    });
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <AppContext.Provider value={{ products, setProducts, originData }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);
export default Context;
