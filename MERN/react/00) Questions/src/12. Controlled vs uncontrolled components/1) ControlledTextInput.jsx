import React, { useState } from 'react'

export default function ControlledTextInput() {
    const [controled, setControlled] = useState("")

    const handleChange = (e) => {
        setControlled(e.target.value)
        
    }

    const handleSubmit = (e) => {
       e.preventDefault()
alert("submitted")
    }



    return (
        <div>
            <form onSubmit={handleSubmit}>
            <input type="text" value={controled} onChange={handleChange} />
           <br />
           Q1. You Typed:{controled}
          <br />
           Q2. number of chracters{controled.length}
<br />
            Q3. Alert on submit <button type="submit">submit</button>
            <br />
             Q4. Reset <button type='button' onClick={()=>setControlled("")}>reset</button>
          
          
           </form>
        </div>
    )
}
