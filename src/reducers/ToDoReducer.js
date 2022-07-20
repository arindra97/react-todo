export default function ToDoReducer(todos, action){
    switch(action.type){
        case "tambah":
            // menambahkan id baru
            const newId = todos[todos.length - 1].id + 1;

            const objNewTodo = {
            id: newId,
            name: action.name,
            isCompleted: false,
            };

            const todosYangBaru = [...todos, objNewTodo];
            return todosYangBaru;
            // setTodos(newTodos); 
        case "selesaikan":
            const newTodos = todos.map((todo) => {
                // kondisi jika id sama dengan id yang dikirimkan
                if (todo.id === action.id) {
                  todo.isCompleted = true;
                }
                return todo;
              });
            //   setTodos(newTodos);
            return newTodos;
        
        default:
            return todos;
    }
}