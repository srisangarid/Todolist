import React, { useState } from 'react';

const ToDoForm = ({ addTask }) => {
    const [userInput, setUserInput] = useState('');

    const handleChange = (e) => {
        setUserInput(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        if (userInput.trim()) {
            addTask(userInput);
            setUserinput('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className='ToDo-form'>
            <input
                type='text'
                value={userInput}
                placeholder='Enter the task...'
                onChange={handleChange}
                className='ToDo-input' />
            <button type='submit' className='add-button'>
                Add Button
            </button>
        </form>
    );
};
export default ToDoForm;