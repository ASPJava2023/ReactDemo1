import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://google.com" target="_blank">
          <img src="https://shaneferns1.wordpress.com/wp-content/uploads/2014/09/jerry-the-mouse-running.gif?w=600" className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>My React App</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
         To Know some more is by doing stuff!!
        </p>
      </div>
      <p className="read-the-docs">
        Don't  click on the Vite logo, it is a trap!!
      </p>
    </>
  )
}

export default App
