import { CartType } from "../../custom"

type cartDisplayLineProp = {
    orderObject: CartType
}
const CartDisplayLine = ({ orderObject }:  cartDisplayLineProp ) => {

    const { restaurantId, menuId, name, quantity, price, restaurant, path } = orderObject
    
    return (
        <>
            <div>{path}</div>
            <div>{name}</div>
            <div>{quantity}</div>
            <div>{price}</div>
            <div>{quantity * price}</div>
            <div>{restaurant}</div>
        </>
    )

}

export default CartDisplayLine