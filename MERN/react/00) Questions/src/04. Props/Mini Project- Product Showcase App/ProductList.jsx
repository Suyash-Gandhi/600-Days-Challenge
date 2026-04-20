import PriceTag from "./PriceTag"
import ProductCard from "./ProductCard"
import Rating from "./Rating"

export default function ProductList() {
     const products = [
    {
      name: "iPhone 15",
      price: 80000,
      rating: 4.5,
      inStock: true,
      category: "Electronics"
    },
    {
      name: "Nike Shoes",
      price: 5000,
      rating: 2.2,
      inStock: false,
      category: "Fashion"
    }
  ]
  return (
    <>
     {
        products.map((product,index)=>(
            <div key={index}>
                <h3> <b><ProductCard {...product}/></b> </h3> 
                <i><PriceTag price={product.price}/>
                <Rating rating={product.rating}/></i>
                <br />
            </div>
           
        ))
    }
   
    </>
   
    
  )
}
