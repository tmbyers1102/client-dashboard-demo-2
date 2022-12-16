import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Home from './Components/Home'

function App() {
  console.log('import.meta.env.PROD: '+ import.meta.env.PROD)

  console.log(import.meta.env.VITE_SOME_KEY) // 123
  console.log(import.meta.env.DB_PASSWORD) // undefined


  return (
    <div className='w-full h-screen'>
      <Home />
    </div>
  )
}

export default App
