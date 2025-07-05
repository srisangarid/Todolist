import React, { useState } from 'react';
import './style.css';
import Header from './Header';
import data from './data.json';
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';


function App() {
    const [toDoList, setToDoList] = useState(data); {/*Initialize the state with the mock data*/ }

    const handleToggle = (id) => {
        const updatedList = toDoList.map((task) =>
            task.id === id ? { ...task, complete: !task.complete } : task
        );
        setToDoList(updatedList);
    };
    const handleFilter = () => {
        const filteredList = toDoList.filter((task) => !task.complete);
        setToDoList(filteredList);
    };
    const addTask = (userInput) => {
        const maxId = toDoList.reduce((max, task) => (task.id > max ? task.id : max), 0);
        const newTask = {
            id: maxId + 1,
            task: userInput,
            complete: false
        };
        setToDoList([...toDoList, newTask]);
    };

    return (
        <div className="App">
            <Header />
            <ToDoList toDoList={toDoList} handleToggle={handleToggle} handleFilter={handleFilter} />    {/* Pass toDoList as a prop */}
            <ToDoForm addTask={addTask} />

        </div>
    );
}

export default App;
