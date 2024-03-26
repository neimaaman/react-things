import { useState } from 'react';
import AddTodo from './AddTodo.js';
import TaskList from './TaskList.js';

// Define initial todos and a variable to track the next id
let nextId = 3;
const initialTodos = [
    { id: 0, title: 'Buy milk', done: true },
    { id: 1, title: 'Eat tacos', done: false },
    { id: 2, title: 'Brew tea', done: false },
];

export default function TaskApp() {
    // Define state for todos using useState hook
    const [todos, setTodos] = useState(initialTodos);

    // Function to handle addition of a new todo
    function handleAddTodo(title) {
        // Create a new todo object
        const newTodo = {
            id: nextId++, // Increment id for the new todo
            title: title, // Title of the new todo
            done: false // Initial status of the new todo
        };
        // Update todos state by creating a new array with the new todo added
        setTodos(prevTodos => [...prevTodos, newTodo]);
    }

    // Function to handle changes in a todo
    function handleChangeTodo(nextTodo) {
        // Map over todos array to find and update the specific todo
        const updatedTodos = todos.map(todo =>
            todo.id === nextTodo.id ? { ...nextTodo } : todo
        );
        // Update todos state with the array of updated todos
        setTodos(updatedTodos);
    }

    // Function to handle deletion of a todo
    function handleDeleteTodo(todoId) {
        // Filter out the todo with the specified id
        const updatedTodos = todos.filter(todo =>
            todo.id !== todoId
        );
        // Update todos state with the array of remaining todos
        setTodos(updatedTodos);
    }

    // Render AddTodo and TaskList components with necessary props
    return (
        <>
            <AddTodo onAddTodo={handleAddTodo} />
            <TaskList
                todos={todos}
                onChangeTodo={handleChangeTodo}
                onDeleteTodo={handleDeleteTodo}
            />
        </>
    );
}