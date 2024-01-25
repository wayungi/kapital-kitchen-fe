import { useParams } from "react-router-dom"
import { useAppSelector } from "../../app/hooks"
import { selectRestaurantMenu } from '../../features/menu/menuSlice'
import MenuItem from "./MenuItem"

const SpecificRestaurantMenu = () => {
  const { id }  = useParams()
  const menu = useAppSelector((state) => selectRestaurantMenu(state, id as string))
  console.log(menu)
  const menuItemList = menu.map((item) => <MenuItem menuData={item} key={item._id}/>)
  return (
    <div>
      {menuItemList}
    </div>
  )
}

export default SpecificRestaurantMenu