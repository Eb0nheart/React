import React from "react";
import { Layout } from "./Layout";
import { Todo } from "../models/Todo";

export const NagivationBar: React.FC = () => {
    const [todos, setTodos] = React.useState<Todo[]>([])

    const addTodo = () => {
        const firstTodo = todos[todos.length-1];
        const id: number = firstTodo === undefined ? 1 : firstTodo.id+1;
        const newTodo: Todo = {id: id};
        const newList = [...todos, newTodo];
        setTodos(newList);
    };

    return (
        <div>
            <div className="bg-dark text-white m-1 p-3 rounded row">
                <h2 className="text-start col">
                    Today's Todo's
                </h2>
                <div className="btn btn-small btn-warning col-1" onClick={addTodo}>
                    Todo
                </div>
            </div>
            <Layout todos={todos}/>
        </div>
    );
};
