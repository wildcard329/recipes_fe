const useLocalStorage = () => {
  const setLocalStorageKey = (key, val) => localStorage.setItem(key, val);

  const getLocalStorageVal = (key) => localStorage.getItem(key);

  const removeLocalStorageVal = (key) => localStorage.removeItem(key);

  const clearLocalStorage = () => localStorage.clear();

  return { setLocalStorageKey, getLocalStorageVal, removeLocalStorageVal, clearLocalStorage };
}

export default useLocalStorage;
