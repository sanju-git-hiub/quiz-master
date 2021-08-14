import React, { useState, useEffect } from "react";
import { categories } from "../constatnts/category";
import QuizContext from "./quiz_context";
const QuizCategories = React.createContext({
  category: [],
  filterCategory: () => {},
});

export default QuizCategories;

export const QuizCatProvider = (props) => {
  const [qzCategory, setQzCategory] = useState([]);
  useEffect(() => {
    setQzCategory(categories);
  }, []);
  const filterCategory = (search) => {};

  const value = {
    category: qzCategory,
    filterCategory: filterCategory,
  };
  console.log(value);
  return (
    <QuizContext.Provider value={value}>{props.children}</QuizContext.Provider>
  );
};
