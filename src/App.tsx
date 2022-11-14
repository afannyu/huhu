import React from 'react'
import './App.scss'
import { routes } from './router/router'
import { useRoutes } from 'react-router-dom'
function App() {
  const outlet = useRoutes(routes)
  return <div className="App">{outlet}</div>
}

export default App
