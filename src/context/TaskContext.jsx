import { createContext } from 'react'
import { useState } from 'react'

export const TaskContext= createContext()

function TaskStore({children}) {
    const [tasks, setTasks] = useState(null)
    return(
        <TaskContext.Provider value={{ tasks, setTasks }}>
            {children}
        </TaskContext.Provider>
    )
}

export default TaskStore