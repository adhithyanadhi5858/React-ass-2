import React from 'react'
import App from './App'
import {useState,useEffect} from "react"

function Counter() {

    const [count,setCount]= useState(0);
    
useEffect(()=>{
  console.log("Mounting....")
console.log("Updating..."+count)

return ()=>{
  console.log("cleanup ..."+count)
}


},[count])

  return (
    <div> 
        <button onClick={()=>setCount(count+1)} > Add</button>
        <h1>counter : {count} </h1>
    </div>
  )
}

export default Counter