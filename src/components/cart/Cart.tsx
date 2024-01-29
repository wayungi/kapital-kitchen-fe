// import { useState } from 'react'
import { CartType } from '../../custom'
import { useAppSelector } from '../../app/hooks'
import { selectCartItems, saveOrder } from '../../features/cart/cartSlice'
import CartDisplayLine from './CartDisplayLine'

const Cart = () => {
    const cartList: CartType[] = useAppSelector((state) => selectCartItems(state))
    const cart = cartList.map((orderObj) => <CartDisplayLine orderObject={orderObj} />)

    const handleOrder = () => {
        const order = {
            timestamp: Date.now(),
            items: cartList // array of objects
        }
        saveOrder(order)
    }

    return (
        <section>
            <h1>{cart}</h1>
            <button onClick={handleOrder}>Order</button>
        </section>
    )
    
}

export default Cart