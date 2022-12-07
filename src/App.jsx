import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Home from './Components/Home'

function App() {
  console.log('import.meta.env.PROD: '+ import.meta.env.PROD)

  console.log(import.meta.env.VITE_SOME_KEY) // 123
  console.log(import.meta.env.DB_PASSWORD) // undefined


  return (
    <div className='bg-teal-700 w-full h-screen'>
      <h2>Client Dashboard 2</h2>
      <h2>{import.meta.env.VITE_SOME_KEY}</h2>
      <Home />
    </div>
  )
}

export default App
