import React, { useState } from "react";
import "./style.css";

const Form = ({ title, setTitle, content, setContent, todos, setTodos }) => {
  function titleOnChangeHandler(e) {
    setTitle(e.target.value);
  }

  function contentOnChangeHandler(x) {
    setContent(x.target.value);
  }

  function ClickToChange() {
    setTodos([
      ...todos,
      { id: todos.length + 1, title: title, content: content, isDone: false },
    ]);
    setTitle("");
    setContent("");
  }

  return (
    <div>
      <div className="header2">
        <span className="input_box">
          <span className="input_box1">
            제목{" : "}
            <input
              type="text"
              value={title}
              onChange={titleOnChangeHandler}
            ></input>
          </span>
          <span className="input_box2">
            내용{" : "}
            <input
              type="text"
              value={content}
              onChange={contentOnChangeHandler}
            ></input>
          </span>
        </span>
        <button className="mybtn" onClick={ClickToChange}>
          추가하기
        </button>
      </div>
    </div>
  );
};

export default Form;
