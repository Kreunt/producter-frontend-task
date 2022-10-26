import React, { useState } from "react";
import Header from "./header.jsx";
import List from "./list.jsx";
import Form from "./form.jsx";
import idCreator from "../utils/idCreator.js";
export const ToDoApp = () => {
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setList([
      ...list,
      {
        id: idCreator(),
        text: input,
        completed: false,
      },
    ]);
    setInput("");
  };
  const handleChange = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };
  return (
    <div>
      <Header />
      <List list={list} setList={setList} />
      <Form
        input={input}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};
export default ToDoApp;
