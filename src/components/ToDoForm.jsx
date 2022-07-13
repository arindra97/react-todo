import React, { useState } from "react";
import { TextField, Button } from "@mui/material";

const ToDoForm = ({ fnAddTodo }) => {
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
      <form
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "1em",
        }}
        onSubmit={formSubmitHandler}
      >
        <TextField
          type="text"
          name="todo-baru"
          id="toDoBaru"
          label="Input Kerjaan Baru"
          variant="outlined"
          size="small"
          sx={{
            maxWidth: 1000,
            marginRight: "1em",
            backgroundColor: "#ffffff40",
          }}
          value={inputData}
          onChange={inputOnChangeHandler}
        />
        <Button variant="contained" size="small" type="submit">
          Tambah Pekerjaan
        </Button>
      </form>
    </>
  );
};

export default ToDoForm;
