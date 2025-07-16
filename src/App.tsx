import { useState, useEffect } from 'react'
import Home from './components/Home'
import Login from './components/Login'
import './App.css'

const App = () => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname)
    }

    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  const navigate = (path: string) => {
    window.history.pushState({}, '', path)
    setCurrentPath(path)
  }

  // Provide navigation function to child components
  window.navigate = navigate

  const renderCurrentComponent = () => {
    switch (currentPath) {
      case '/login':
        return <Login />
      case '/':
      default:
        return <Home />
    }
  }

  return <div className="App">{renderCurrentComponent()}</div>
}

export default App
