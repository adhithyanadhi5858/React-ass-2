import React from 'react'
import Counter from './Counter'
import {useState} from "react"

function App() {
    const [state, setState] = useState(false)
   

  return (
    <>

      <h1 onClick={()=>setState(!state)}>Show/hide</h1>

     {state ? <Counter/> : null}
     
    </>
  )
}

export default App