import React, { useState } from 'react'

export default function Preview() {
    const [live,setlive]=useState("")
  return (
    <div>
        <input onChange={(event)=>setlive(event.target.value)} type="text" />
{live}
    </div>
  )
}
