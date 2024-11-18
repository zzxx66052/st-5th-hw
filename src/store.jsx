import { createStore } from "redux";

const textState = {
  texts: JSON.parse(localStorage.getItem("texts")) || [],
};

const ADD_TEXT = "ADD_TEXT";
export const addText = (text) => ({
  type: ADD_TEXT,
  payload: text,
});

const textReducer = (state = textState, action) => {
  switch (action.type) {
    case ADD_TEXT:
      const newTexts = [...state.texts, action.payload];
      // localStorage에 텍스트 저장
      localStorage.setItem("texts", JSON.stringify(newTexts));
      return {
        ...state,
        texts: newTexts,
      };
    default:
      return state;
  }
};

// Redux store 생성
const store = createStore(textReducer);

export default store;
