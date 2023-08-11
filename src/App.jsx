import React from 'react'
import './index.css'
import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from 'react'

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Read a book' },
    { id: 2, text: 'SHopping' },
    { id: 3, text: 'Hello friends' },
  ])

  const deleteTasks = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return (
    <div className="container">
      <Header text="ToDo" />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTasks} />
      ) : (
        <h1 className="hudluh" style={{ textAlign: 'center' }}>
          Hooson baina
        </h1>
      )}
    </div>
  )
}

export default App
