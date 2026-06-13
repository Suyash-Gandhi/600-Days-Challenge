import React from 'react'

export default function PriceTag({price}) {
  return (
    <div>{price>10000?"Premium product":"Affordable product"}</div>
  )
}
