import React from "react";
import { isPropertySignature } from "typescript";
import {Todo} from "../models/Todo"

interface Props{
    todos: Todo[]
}

export const Layout: React.FC<Props> = (props) => {
    return (
        <div className="border border-secondary rounded m-1">
            <table className="table text-center">
                <thead>
                    <tr>
                        <th className="text-start">Id</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th className="">Done</th>
                    </tr>
                </thead>
                <tbody>
                    {props.todos.map(todo => 
                        <tr>
                            <th className="text-start">
                                {todo.id}
                            </th>
                            <td>{todo.title}</td>
                            <td>{todo.description}</td>
                            <td>
                                <input type="checkbox" checked={todo.done}/>
                            </td>
                        </tr>)}
                </tbody>
            </table>
        </div>
    );
}