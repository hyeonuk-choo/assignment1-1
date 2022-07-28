import React from "react";
import "./style.css";

const List = ({ todos, setTodos, DeleteHandler, DoneHandler }) => {
  return (
    <div>
      <h3>Working..⏳</h3>
      <div className="todos-container">
        {todos.map((todo) => {
          if (todo.isDone === false) {
            return (
              <div className="todo" key={todo.id}>
                <h3>{todo.title}</h3>
                <p>{todo.content}</p>
                <div className="mybtn">
                  <button
                    className="btn1"
                    onClick={() => {
                      DeleteHandler(todo.id);
                    }}
                  >
                    삭제하기
                  </button>
                  <button
                    className="btn2"
                    onClick={() => {
                      DoneHandler(todo.id);
                    }}
                  >
                    완료
                  </button>
                </div>
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className="mainBody">
        <div>
          <h3>Done..!😆</h3>
          <div className="todos-container">
            {todos.map((todo) => {
              if (todo.isDone) {
                return (
                  <div className="todo" key={todo.id}>
                    <h3>{todo.title}</h3>
                    <p>{todo.content}</p>
                    <div className="mybtn">
                      <button
                        className="btn1"
                        onClick={() => {
                          DeleteHandler(todo.id);
                        }}
                      >
                        삭제하기
                      </button>
                      <button
                        className="btn2"
                        onClick={() => {
                          DoneHandler(todo.id);
                        }}
                      >
                        취소
                      </button>
                    </div>
                  </div>
                );
              } else {
                return null;
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
