import { useState } from "react";

const useBool = () => {
  const [isTruthy, setIsTruthy] = useState(false);

  const setTruthy = () => setIsTruthy(true);
  const setNotTruthy = () => setIsTruthy(false);
  const toggleTruthy = () => setIsTruthy(!isTruthy);

  return {
    isTruthy,
    setTruthy,
    setNotTruthy,
    toggleTruthy,
  }
}

export default useBool;
