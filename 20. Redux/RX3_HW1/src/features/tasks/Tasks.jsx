import React from 'react'
import { useSelector } from "react-redux";
                       

function Tasks() {
  const tasks = useSelector((state)=> state.tasks);

  return (
    <div>
      {tasks.tasks.map((task) => (
        <div key={task.id}>
          <h2>{task.date}</h2>
          <ul>
            {task.tasks.map((task) =>(
              <>
                <li key={task.id}>{task.description}</li>
                <p>Status: {task.status}</p>
              </>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export default Tasks
