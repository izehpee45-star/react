
import { useState } from 'react'

const Count = () => {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('')
  const [submittedName, setSubmittedName] = useState('')
  const [age, setAge] = useState(0)

  return (
    <div className="count">
      <p>You clicked {count} times</p>
      <button
        style={{ backgroundColor: 'red', color: 'white', border: 'none', borderRadius: '5px' }}
        onClick={() => setCount(count + 1)}
      >
        Click me
      </button>
      <br />
      <br />

      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
      <p>Hello, {submittedName}!</p>
      <br />

      <button onClick={() => setSubmittedName(name)}>Submit</button>
      <br />
      <br />

      <input
        type="number"
        value={age}
        onChange={(e) => setAge(Number(e.target.value))}
        placeholder="Enter your age"
      />
      <br />
      <br />

      <p style={{ color: 'blue', fontWeight: 'bold', fontSize: '20px' }}>You are {age} years old.</p>
      <button onClick={() => setAge(age + 1)}>Increase Age</button>
      <button onClick={() => setAge(age - 1)}>Decrease Age</button>
    </div>
  )
}

export default Count