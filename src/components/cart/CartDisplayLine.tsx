import { useState, useEffect } from 'react'
import { CartType } from "../../custom"
import { updateQuantity, removeItemFromCart  } from '../../features/cart/cartSlice'
import { useAppDispatch } from '../../app/hooks'

type cartDisplayLineProp = {
    orderObject: CartType
}
const CartDisplayLine = ({ orderObject }:  cartDisplayLineProp ) => {
    const dispatch = useAppDispatch()

    const { menuId, name, quantity, price, restaurant, path } = orderObject
    const [alteredQuantity, setAlteredQuantity] = useState<number>(quantity)

    useEffect(()  => {
        setAlteredQuantity(alteredQuantity)
        dispatch(updateQuantity({ alteredQuantity, menuId }))
    }, [alteredQuantity, dispatch, menuId])

    return (
        <>
            <div><img src={path} alt={name} /></div>
            <div>{name}</div>
            <div> 
                <button onClick={ () => setAlteredQuantity((prev) => prev === 1 ? 1 : prev - 1) }>-</button> 
                    {alteredQuantity} 
                <button onClick={ () => setAlteredQuantity((prev) => prev + 1)}>+</button></div>
            <div>{price}</div>
            <div>{quantity * price}</div>
            <div>{restaurant}</div>
            <div>
                <button onClick={ () => dispatch(removeItemFromCart({menuId}))}>x</button>
            </div>
        </>
    )

}

export default CartDisplayLine