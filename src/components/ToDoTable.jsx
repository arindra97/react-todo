import React from "react";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";

const ToDoTable = ({ data, fnCompleteTodo }) => {
  //render
  return (
    <>
      <Table sx={{ maxWidth: 700 }}>
        <TableHead>
          <TableRow>
            <TableCell>ToDo Id</TableCell>
            <TableCell>ToDo Name</TableCell>
            <TableCell>ToDo Status</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((todo) => {
            return (
              <>
                <TableRow key={todo.id}>
                  <TableCell>{todo.id}</TableCell>
                  <TableCell>{todo.name}</TableCell>
                  <TableCell>
                    {todo.isCompleted ? "Selesai" : "Belum Selesai"}
                  </TableCell>
                  <TableCell>
                    {todo.isCompleted ? (
                      ""
                    ) : (
                      <Button
                        variant="outlined"
                        onClick={() => fnCompleteTodo(todo.id)}
                      >
                        Selesaikan
                      </Button>
                    )}
                  </TableCell>
                </TableRow>
              </>
            );
          })}
        </TableBody>
      </Table>
    </>
  );
};

export default ToDoTable;
