import React from 'react'

export default function ProductCard({name,price,inStock,category}) {
   
  return (
    <div>{name} <br /> price: {price} <br />{category} <br /> {inStock?"✅ Available":"❌ Out of Stock"}</div>
  )
}
