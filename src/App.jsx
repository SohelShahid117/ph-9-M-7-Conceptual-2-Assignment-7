import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)


  return (
    <>
   
      <h1>ph-9-M-7-Conceptual-2-Assignment-7:React</h1>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
        {/* <button onClick={handleButton}> */}
          count is {count}
        </button>
      </div>
    
    </>
  )
}

export default App
