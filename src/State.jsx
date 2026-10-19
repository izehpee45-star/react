import { useState } from 'react'

const State = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: 'Learn React',
      completed: false
    },
    {
      id: 2,
      text: 'learn react later',
      completed: false
    }
  ])

  const [input, setInput] = useState('')

  const handleAdd = () => {
    const trimmedValue = input.trim()

    if (!trimmedValue) return

    setTodos((prevTodos) => [
      ...prevTodos,
      {
        id: prevTodos.length ? prevTodos[prevTodos.length - 1].id + 1 : 1,
        text: trimmedValue,
        completed: false
      }
    ])

    setInput('')
  }

  const handleRemove = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id))
  }

  const handleToggle = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo))
    )
  }

  const handleUpdate = (id, newText = 'Updated task') => {
    const text = newText.trim() || 'Updated task'

    setTodos((prevTodos) =>
      prevTodos.map((todo) => (todo.id === id ? { ...todo, text } : todo))
    )
  }

  const handleEdit = (id, newText) => {
    const text = newText?.trim()

    if (!text) return

    setTodos((prevTodos) =>
      prevTodos.map((todo) => (todo.id === id ? { ...todo, text } : todo))
    )
  }

  const handleClear = () => {
    setTodos([])
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="add" />
      <button onClick={handleAdd}>Add</button>

      <div style={{ marginTop: '12px' }}>
        {todos.map((todo) => (
          <div key={todo.id} style={{ marginBottom: 8 }}>
            <span
              onClick={() => handleToggle(todo.id)}
              style={{
                textDecoration: todo.completed ? 'line-through' : 'none',
                cursor: 'pointer',
                marginRight: '8px'
              }}
            >
              {todo.text}
            </span>
            <button onClick={() => handleRemove(todo.id)}>Remove</button>
            <button onClick={() => handleUpdate(todo.id, 'Updated task')} style={{ marginLeft: '8px' }}>
              Update
            </button>
            <button onClick={() => handleEdit(todo.id, 'Edited task')} style={{ marginLeft: '8px' }}>
              Edit
            </button>
          </div>
        ))}
      </div>

      <button onClick={handleClear} style={{ marginTop: '12px' }}>
        Clear
      </button>
    </div>
  )
}

export default State