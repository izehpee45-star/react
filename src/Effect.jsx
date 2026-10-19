import { useEffect, useState } from 'react'

const Effect = () => {
  const [count, setCount] = useState(() => Number(localStorage.getItem('count')) || 0)
  const [name, setName] = useState(() => localStorage.getItem('name') || 'John')
  const [time, setTime] = useState(0)

  useEffect(() => {
    console.log('Count has changed:', count)
    localStorage.setItem('count', count)
  }, [count])

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => prevTime + 1)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    localStorage.setItem('name', name)
  }, [name])

  useEffect(() => {
    console.log('Count or Name has changed:', { count, name })
  }, [count, name])

  return (
    <div>
      <p>Count: {count}</p>
      <p>Name: {name}</p>
      <p>Time (3s interval): {time}</p>

      <button onClick={() => setCount((prevCount) => prevCount + 1)}>Increment</button>
      <button onClick={() => setTimeout(() => setCount((prevCount) => prevCount + 1), 3000)}>Increment after 3s</button>

      <button onClick={() => setName('Doe')}>Change Name</button>

      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  )
}

export default Effect