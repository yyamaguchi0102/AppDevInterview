import { useState } from "react";

    const TODO_DATA = [
        {id: 0, description: "Bake Cookies on 2/14", completed: false}

    ];

export default function TodoList() {
    const [tasks, setTasks] = useState(TODO_DATA);
    const [newTask, setNewTask] = useState("");

    const addTask = () => {
        if(newTask.trim() === "") return;
        setTasks([...tasks, {id: Date.now(), description: newTask, completed: false}]);
        setNewTask("");
    }

    const toggleComplete = (id) => {
        setTasks(tasks.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ));
    };

    const remainingTasks = tasks.filter(todo => !todo.completed).length;
    
    return (

        <>
        <div>
        <h1>ToDo List</h1>
    
        <input 
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)} 
            placeholder ="Add new task"
        ></input>
        <button onClick={addTask}>Add Task</button>
        </div>
    
    
        <ul>
            {tasks.map( todo => (
               <li key={todo.id}>
                <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleComplete(todo.id)}
                />
                {todo.description}
               </li> 
            ))}
        </ul>
    
        <p>{remainingTasks} tasks remaining</p>
        </>
    
    
        );

}