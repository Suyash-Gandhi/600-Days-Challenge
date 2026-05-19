import React, { useEffect } from 'react'
import { useState } from 'react'

export default function App() {

  const [user,setUser]=useState()

  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res=>res.json())
    .then(data=>setUser(data))
},[])

  return (
    <div>
{user.name}
{user.email}
    </div>
  )
}
