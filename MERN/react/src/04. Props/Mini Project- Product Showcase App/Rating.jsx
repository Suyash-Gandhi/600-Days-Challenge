import React from 'react'

export default function Rating ({rating}) {
  return (
    <div>{rating<3?"low rated":"high rated"}</div>
  )
}
