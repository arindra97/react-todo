import React, { useEffect, useReducer } from "react";
import { Typography } from "@mui/material";

import ToDoForm from "../components/ToDoForm";
import ToDoTable from "../components/ToDoTable";
import ToDoReducer from "../reducers/ToDoReducer";

const initialTodo = [
  { id: 1, name: "Review DOM", isCompleted: true },
  { id: 2, name: "Learn React", isCompleted: false },
  { id: 3, name: "Learn React Component", isCompleted: false },
];

const ToDo = () => {
  const [todos, dispatch] = useReducer(ToDoReducer, initialTodo);

  // function untuk menambahkan todo baru
  const addTodo = (newTodo) => {
    dispatch({
      type: "tambah",
      name: newTodo,
    });
  };

  const completeTodo = (idTodo) => {
    dispatch({
      type: "selesaikan",
      id: idTodo,
    });
  };

  useEffect(
    // effect
    () => {
      let titleTulisan = "Todos : " + todos[todos.length - 1].name;
      console.log(titleTulisan);
      //DOM secara manual
      document.title = titleTulisan;
    },

    // dependencyList untuk memanggil useEffect setiap value yang dipanggil
    [todos]
  );

  return (
    <>
      <Typography variant="h3" sx={{ color: "#3366cc" }}>
        Aplikasi ToDo menggunakan Reducer
      </Typography>
      <div>
        <ToDoForm fnAddTodo={addTodo} />
        <ToDoTable data={todos} fnCompleteTodo={completeTodo} />
      </div>
    </>
  );
};

export default ToDo;
