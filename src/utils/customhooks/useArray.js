import { useState } from "react";

const useArray = () => {
  const [arr, setArr] = useState([]);

  const setItems = (items) => setArr(items);

  const addItem = (item) => setArr([ ...arr, item ]);

  const updateItem = (item, identifier) => setArr(arr.map((arrItem) => arrItem[identifier] === item[identifier] ? item : arrItem));

  const removeItem = (identifier) => setArr(arr.filter((arrItem) => arrItem[identifier] !== identifier));

  const getItem = (identifier) => arr.find((arrItem) => arrItem[identifier] === identifier);

  return { setItems, addItem, updateItem, removeItem, getItem, arr };
};

export default useArray;
