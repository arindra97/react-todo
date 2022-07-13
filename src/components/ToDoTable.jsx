import React from "react";

const ToDoTable = ({data}) => {
    return(
        <table>
            <thead>
                <tr>
                    <th>ToDo Id</th>
                    <th>ToDo Name</th>
                    <th>ToDo Status</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {data.map((todo)=>{
                    return(
                        <>
                            <tr key={todo.id}>
                                <td>{todo.id}</td>
                                <td>{todo.name}</td>
                                <td>{todo.isCompleted ? "Selesai" : "Belum Selesai"}</td>
                                <td>{todo.isCompleted ? "" : <button>Selesaikan</button>}</td>
                            </tr>
                        </>
                    );
                })}
            </tbody>
        </table>
    );
};

export default ToDoTable;