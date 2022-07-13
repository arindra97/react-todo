import React, {useState} from "react";

import ToDoForm from "../components/ToDoForm";
import ToDoTable from "../components/ToDoTable";

const ToDo = () => {
    const [todos, setTodos] = useState([
        {id: 1, name: "Review DOM", isCompleted: true},
        {id: 2, name: "Learn React", isCompleted: false},
        {id: 3, name: "Learn React Component", isCompleted: false},
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

    return(
        <>
            <div>Aplikasi ToDo</div>
            <div>
                <ToDoForm fnAddTodo={addTodo} />
                <ToDoTable data={todos}/>
            </div>
        </>
    );
};

export default ToDo;