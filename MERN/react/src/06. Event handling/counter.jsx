import { useState } from 'react'
import React from 'react'

export default function counter() {
    const [count, setcount] = useState(0)
  return (
    <div>
{count} <br />
        <button onClick={()=>setcount(prev=>prev+1)}>increment</button>
        <button onClick={()=>setcount(prev=>prev-1)}>decrement</button>
        <button onClick={()=>setcount(0)}>reset</button>
    </div>
  )
}
