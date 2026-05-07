import { useState } from 'react'
import "./change.css"


export default function Toggle() {
  const [mode, setmode] = useState("light")

  return (
    <div className={mode}>

        <button onClick={()=>setmode(prev=>prev === "light" ? "dark" : "light")}>change</button>
    </div>
  )
}
