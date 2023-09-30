import { useState, useEffect } from "react";
import useBool from "./useBool.js";

const useFetch = () => {
  const [data, setData] = useState(null);
  const {
    isTruthy: isLoading,
    setTruthy: setIsLoading,
    setNotTruthy: setNotIsLoading,
  } = useBool();

  const fetchData = async (fetchCb, data=null) => {
    await setIsLoading();
    try {
      const fetchedData = await fetchCb(data);
      await setData(fetchedData);
      await setNotIsLoading();
    } catch (error) {
      throw new Error("Error with request.")
    };
  };

  return { isLoading, fetchData, data };
}

export default useFetch;
