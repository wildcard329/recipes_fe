import { useState } from "react";

const useBool = () => {
  const [isTruthy, setIsTruthy] = useState(false);

  const setTruthy = () => setIsTruthy(true);
  const setNotTruthy = () => setIsTruthy(false);

  return {
    isTruthy,
    setTruthy,
    setNotTruthy,
  }
}

export default useBool;
