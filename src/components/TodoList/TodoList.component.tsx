import React from 'react'

interface TodoListComponent {
    key: string;
    tasks: Array<Tasks>;
    title: string;
}

interface Tasks {
    id: string;
    title: string;
    isDone: boolean;
}

export function TodoListComponent(props: TodoListComponent) {
    let tasks = props.tasks.map(task => {
        return (
            <li><input type={"checkbox"} checked={task.isDone}/><span>{task.title}</span></li>
        )
    })
    return (
        <>
            <div>
                <h3>{props.title}</h3>
                <div><input type="text"/></div>
                <ul>{tasks}</ul>

                <button>Add</button>
            </div>

        </>
    )
}