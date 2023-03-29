import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../data/tasks";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
    // Creamos la variable arreglo de tareas
    const [tasks, setTasks] = useState([]);

    // pasamos nuestras tareas a la variable creada apenas inicia el programa
    useEffect(() => {
        setTasks(data);
    }, []);

    function createTask(task) {
        setTasks([
            ...tasks,
            {
                title: task.title,
                id: tasks.length,
                description: task.description,
            },
        ]);
    }

    function deleteTask(taskId) {
        setTasks(tasks.filter((task) => task.id !== taskId));
    }

    return (
        <TaskContext.Provider
            value={{
                tasks,
                deleteTask,
                createTask,
            }}
        >
            {props.children}
        </TaskContext.Provider>
    );
}
