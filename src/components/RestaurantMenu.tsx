import { useAppSelector } from "../app/hooks"
import { selectRestaurantMenu } from "../features/menu/menuSlice"

type RestaurantMenuProp = {
    id: string
}
 
const RestaurantMenu = ({ id }: RestaurantMenuProp) => {
    const menuItems = useAppSelector((state) => selectRestaurantMenu(state, id))
    console.log(menuItems)

    return (
        <div>
            <p>restaurant menu</p>
        </div>
    )
} 

export default RestaurantMenu
