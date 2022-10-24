import { useState, createContext } from "react";
import React from "react";

export const ScoreContextProvider = createContext();

export default const ScoreContext = ({ children }) => {
  const [score, setScore] = useState(0);

  const plusScore = () => {
    setScore((prevState) => prevState + 10);
  };

  const minusScore = () => {
    setScore((prevState) => prevState - 10);
  };

  return (
    <ScoreContextProvider.Provider
      value={{ score, setScore, plusScore, minusScore }}
    >
      {children}
    </ScoreContextProvider.Provider>
  );
};

