import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <header className="app-header">
        <h1 className="main-title">Happy Vibe Coding</h1>
        <p className="subtitle">
          Welcome to Vibecode - Where coding meets creativity
        </p>
      </header>
    </div>
  )
}

export default App
