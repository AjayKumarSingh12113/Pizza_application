// Single Pizza Display
import React, { useContext } from 'react'
import { CartContext } from '../../cart/context/cart-context'

export const Product = ({product}) => {
  const Context = useContext(CartContext);
    const myStyle = {width: '18rem', backgroundColor:'grey'}
    const addToCart = ()=>{
        Context.addInCart({...product});
    }
  return (
    <div className="card me-2" style={myStyle}>
  <img src={product.asset.url} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{product.name}</h5>
    <p className="card-text">{product.price}</p>
    <button href="#" onClick={addToCart} className="btn btn-primary">Add to Cart</button>
  </div>
</div>
  )
}
