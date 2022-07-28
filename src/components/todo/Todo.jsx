import React, { useState } from "react";
import Layout from "../layout/Layout";
import Header from "../header/Header";
import Form from "../form/Form";
import List from "../list/List";

function Todo() {
  const [id, setId] = useState(0);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isDone, setIsDone] = useState();
  const [todos, setTodos] = useState([
    {
      id: 0,
      title: "리액트 공부하기",
      content: "리액트 기초를 공부해봅시다.",
      isDone: false,
    },
  ]);
  function DoneHandler(id) {
    let newTodo = todos.map((data) => {
      if (data.id === id) {
        data.isDone = !data.isDone;
      }
      return data;
    });
    setTodos(newTodo);
  }

  function DeleteHandler(id) {
    let newTodo = todos.filter((todo) => todo.id !== id);
    setTodos(newTodo);
  }
  return (
    <Layout>
      <Header></Header>
      <Form
        title={title}
        setTitle={setTitle}
        content={content}
        setContent={setContent}
        todos={todos}
        setTodos={setTodos}
      />

      <List
        todos={todos}
        setTodos={setTodos}
        DeleteHandler={DeleteHandler}
        DoneHandler={DoneHandler}
      ></List>
    </Layout>
  );
}

export default Todo;
