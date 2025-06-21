import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main className='w-full h-full flex items-center justify-center bg-slate-900'>
        <p className='text-white text-4xl font-bold'>Hello World!</p>
      </main>
    </>
  )
}

export default App
