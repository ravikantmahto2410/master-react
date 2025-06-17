import { useState } from 'react'

import './App.css'

function App() {
  const [length, setLength] = useState(8)    // to track the
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState()

  return (
    <>
      <h1 className='text-4xl text-center text-white'>Password Generator</h1>
    </>
  )
}

export default App
