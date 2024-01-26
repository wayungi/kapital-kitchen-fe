// import { useState } from 'react'
// import { CartType } from '../../custom'
import { useAppSelector } from '../../app/hooks'
import { selectCartItems } from '../../features/cart/cartSlice'
import CartDisplayLine from './CartDisplayLine'

const Cart = () => {
    const cartList = useAppSelector((state) => selectCartItems(state))
    //const [cartItems, setCartItems] =  useState<CartType[] | undefined>(cartList) 

    const cart = cartList.map((orderObj) => <CartDisplayLine orderObject={orderObj} />)
      

    return (
        <section>
            <h1>{cart}</h1>
        </section>
    )
    
}

export default Cart