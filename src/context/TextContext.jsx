import React, { createContext, useState, useEffect, useContext } from "react";

// TextContext 생성
const TextContext = createContext();

// TextProvider 컴포넌트
export const TextProvider = ({ children }) => {
  const [texts, setTexts] = useState(() =>
    localStorage.getItem("texts")
      ? JSON.parse(localStorage.getItem("texts"))
      : []
  );

  useEffect(() => {
    localStorage.setItem("texts", JSON.stringify(texts));
  }, [texts]);

  const onAddText = (text) => {
    setTexts((prevTexts) => [...prevTexts, text]);
  };

  return (
    <TextContext.Provider value={{ texts, onAddText }}>
      {children}
    </TextContext.Provider>
  );
};

// Context를 쉽게 사용할 수 있도록 하는 custom hook
export const useTextContext = () => {
  return useContext(TextContext);
};
