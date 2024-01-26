import { useState } from 'react'
import { CartType } from "../../custom"

type cartDisplayLineProp = {
    orderObject: CartType
}
const CartDisplayLine = ({ orderObject }:  cartDisplayLineProp ) => {

    const { restaurantId, menuId, name, quantity, price, restaurant, path } = orderObject
    const [alteredQuantity, setAlteredQuantity] = useState<number>(quantity)

    const decreaseQuantity = () => {
        if(alteredQuantity <= 0) return
        setAlteredQuantity((prev:number) => prev -1)
    }

    const increaseQunatity = () => {
        setAlteredQuantity( (prev: number) => prev + 1)
    }

    return (
        <>
            <div>{path}</div>
            <div>{name}</div>
            <div> <button onClick={ decreaseQuantity }>-</button> {alteredQuantity} <button onClick={ increaseQunatity }>+</button></div>
            <div>{price}</div>
            <div>{quantity * price}</div>
            <div>{restaurant}</div>
        </>
    )

}

export default CartDisplayLine