import React from 'react';
import logo from './logo.svg';
import './App.css';
import {TodoListComponent} from "./components/TodoList/TodoList.component";

function App() {
    let TodoListsData = [{
        id: 'dsafdf',
        title: 'What to learn',
        tasks: [{
            id: "123sd",
            title: "js",
            isDone: true,
        }, {
            id: "123sd",
            title: "js",
            isDone: false,
        }]
    }, {
        id: 'sdfsd12',
        title: 'What to learn2',
        tasks: [{
            id: "123sd",
            title: "js",
            isDone: false,
        }, {
            id: "123sd",
            title: "js",
            isDone: true,
        }]
    },];
    let TodoLists = TodoListsData.map(value => <TodoListComponent key={value.id} tasks={value.tasks}
                                                                  title={value.title}/>);

    return (
        <div className='flex'>
            {TodoLists}
        </div>
    )
}

export default App;
