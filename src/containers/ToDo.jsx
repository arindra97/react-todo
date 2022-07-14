import React, { useEffect, useState } from "react";
import { Typography } from "@mui/material";

import ToDoForm from "../components/ToDoForm";
import ToDoTable from "../components/ToDoTable";

const ToDo = () => {
  const [todos, setTodos] = useState([
    { id: 1, name: "Review DOM", isCompleted: true },
    { id: 2, name: "Learn React", isCompleted: false },
    { id: 3, name: "Learn React Component", isCompleted: false },
  ]);

  // function untuk menambahkan todo baru
  const addTodo = (newTodo) => {
    // menambahkan id baru
    const newId = todos[todos.length - 1].id + 1;

    const objNewTodo = {
      id: newId,
      name: newTodo,
      isCompleted: false,
    };

    const newTodos = [...todos, objNewTodo];
    setTodos(newTodos);
  };

  const completeTodo = (idTodo) => {
    const newTodos = todos.map((todo) => {
      // kondisi jika id sama dengan id yang dikirimkan
      if (todo.id === idTodo) {
        todo.isCompleted = true;
      }
      return todo;
    });
    setTodos(newTodos);
  };

  useEffect(
    // effect
    () => {
      let titleTulisan = 'Todos : ' + todos[todos.length-1].name;
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
        Aplikasi ToDo
      </Typography>
      <div>
        <ToDoForm fnAddTodo={addTodo} />
        <ToDoTable data={todos} fnCompleteTodo={completeTodo} />
      </div>
    </>
  );
};

export default ToDo;
