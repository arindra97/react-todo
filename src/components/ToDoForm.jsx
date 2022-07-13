import React, { useState } from "react";

const ToDoForm = ({fnAddTodo}) => {
  const [inputData, setInputData] = useState("");

  // fungsi untuk perubahan input
  const inputOnChangeHandler = (event) => {
    setInputData(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    fnAddTodo(inputData);
    setInputData("");
  };

  return (
    <>
        <form style={{ margin: "0.5em 0em" }} onSubmit={formSubmitHandler}>
            <input
                type="text"
                name="todo-baru"
                id="toDoBaru"
                placeholder="Input Kerjaan Baru"
                style={{ marginRight: "0.5em" }}
                value={inputData}
                onChange={inputOnChangeHandler}
            />
            <button type="submit">Tambah Pekerjaan</button>
        </form>
    </>
  );
};

export default ToDoForm;
