import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const todoDetails = JSON.parse(localStorage.getItem("todos")) || [
  { id: "todo-0", name: "Sugondese", completed: false },
  { id: "todo-1", name: "Ligma", completed: false },
  { id: "todo-2", name: "Joe", completed: false },
];

const FILTER_MAP = {
  All: () => true,
  Active: (task) => !task.completed,
  Completed: (task) => task.completed,
};

const FILTER_NAMES = Object.keys(FILTER_MAP);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App
      tasks={todoDetails}
      FILTER_NAMES={FILTER_NAMES}
      FILTER_MAP={FILTER_MAP}
    />
  </React.StrictMode>
);

ReactDOM.render(<App tasks={todoDetails} />, document.getElementById("root"));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
