import React from 'react';
import ToDo from './ToDo'; // Import the ToDo component


const ToDoList = ({ toDoList, handleToggle, handleFilter }) => {
    return (
        <div>
            {toDoList.map((todo) => (
                <ToDo key={todo.id} todo={todo} handleToggle={handleToggle} />
            ))}
            <button className="clear-button" onClick={handleFilter}>
                Clear Completed
            </button>
        </div>
    );
};

export default ToDoList;