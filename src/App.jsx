import { useState } from 'react'

export default function App() {
  const [count, setCount] = useState(0)

  const list = ['apple', 'orange', 'peach']

  function increment() {
    setCount(count + 1)
  }

  return (
    <div>
      <button onClick={increment}>{count}</button>

      <ul>
        {list.map(item => (
          <li key={item} onClick={() => console.log(item)}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}
