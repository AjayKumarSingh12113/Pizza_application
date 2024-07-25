import { useContext } from "react"
import { CartContext } from "../context/cart-context"
import { Item } from "./Item";

export const Cart = ()=>{
    const Context = useContext(CartContext);
    return (<>
        <h3>Cart Items {Context.cart.length}</h3>
        {Context.cart.map(item=><Item item={item}/>)}
    </>)
}