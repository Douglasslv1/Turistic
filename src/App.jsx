import { useState } from 'react'
import './App.css'
import Page1 from './components/page1/Index'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Page1 />
      
    </>
  )
}

export default App
