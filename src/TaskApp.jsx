import { useState } from 'react';
import { useImmer } from 'use-immer';
import AddTodo from './AddTodo.js';
import TaskList from './TaskList.js';

let nextId = 3;
const initialTodos = [
    { id: 0, title: 'Buy milk', done: true },
    { id: 1, title: 'Eat tacos', done: false },
    { id: 2, title: 'Brew tea', done: false },
];

export default function TaskApp2() {
    const [todos, setTodos] = useImmer(initialTodos);

    function handleAddTodo(title) {
        setTodos(draft => {
            return [
                ...draft,
                { id: nextId++, title: title, done: false }
            ];
        });
    }

    function handleChangeTodo(nextTodo) {
        setTodos(draft => {
            const todoIndex = draft.findIndex(t => t.id === nextTodo.id);
            if (todoIndex !== -1) {
                draft[todoIndex].title = nextTodo.title;
                draft[todoIndex].done = nextTodo.done;
            }
        });
    }

    function handleDeleteTodo(todoId) {
        setTodos(draft => draft.filter(todo => todo.id !== todoId));
    }

    return (
        <>
            <AddTodo
                onAddTodo={handleAddTodo}
            />
            <TaskList
                todos={todos}
                onChangeTodo={handleChangeTodo}
                onDeleteTodo={handleDeleteTodo}
            />
        </>
    );
}