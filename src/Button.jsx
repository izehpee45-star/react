import { useRef } from 'react'

const Button = () => {
  const inputRef = useRef(null)

  const handleClick = () => {
    const value = inputRef.current.value
    alert(`button clicked, input value is: ${value}`)
  }

  const showInput = () => {
    alert(`input value is: ${inputRef.current.value}`)
  }

  return (
    <div>
      <input type="text" ref={inputRef} onChange={(e) => console.log('input value changed', e.target.value)} placeholder="enter text" />
      <button onClick={handleClick}>Click Me</button>
      <button onClick={showInput}>Show</button>
    </div>
  )
}

export default Button