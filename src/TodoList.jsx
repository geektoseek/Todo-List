import React from 'react'
import { useState } from 'react'

const TodoList = () => {
    const [task, setTask] = useState(["This is the new program.", "Read a book"]);
    const [newTask, setnewTask] = useState("");

    function handleInputChange(event) {
        setnewTask(event.target.value)
    }

    function addNewTask() {
        if (newTask.trim() !== "") {
            setTask(t => [...t, newTask]);
            setnewTask("");
        }
    }

    function deleteTask(index) {
        const updatedTask = task.filter((_, i) => i !== index);
        setTask(updatedTask)
    }

    return (
        <div className="flex justify-center items-start md:items-center min-h-screen bg-gray-900 px-4 py-8">
            <div className="w-full max-w-[900px] bg-gray-700 h-[700px] flex flex-col items-start overflow-y-auto rounded-lg border border-gray-400 p-6 space-y-6">

                <h1 className="text-3xl md:text-4xl font-bold w-full text-white text-center">
                    To<span className="text-amber-500">DO</span> List
                </h1>

                <div className="flex flex-col md:flex-row gap-4 md:gap-6 w-full">
                    <input
                        type="text"
                        value={newTask}
                        onChange={handleInputChange}
                        placeholder="Enter a task ....."
                        className="flex-1 text-lg md:text-2xl px-4 py-2 rounded-lg border border-gray-300 bg-gray-600 text-white outline-none placeholder-gray-300"
                    />
                    <button
                        onClick={addNewTask}
                        className="!bg-amber-500 !hover:bg-amber-600 text-white font-bold rounded-lg !px-12 py-2 md:px-12 transition-colors duration-200"
                    >
                        Add
                    </button>
                </div>

                <ol className="space-y-4 w-full">
                    {task.map((task, index) => (
                        <li
                            key={index}
                            className="flex flex-col md:flex-row justify-between items-start md:items-center bg-blue-200 rounded-md p-3 md:p-4 shadow-md hover:shadow-lg transition-all duration-300"
                        >
                            <span className="text-lg md:text-xl text-gray-900 md:w-[70%] w-full">
                                {task}
                            </span>
                            <button
                                onClick={() => deleteTask(index)}
                                className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-md mt-2 md:mt-0 md:w-auto w-full transition-colors duration-200"
                            >
                                Delete
                            </button>
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    )
}

export default TodoList