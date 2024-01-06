import { useAppSelector } from "../app/hooks"
import { selectAllMenuItems } from "../features/menu/menuSlice"
import MenuItem from "./partials/MenuItem"


const Menu = () => {
  const menuItemList =  useAppSelector((state) => selectAllMenuItems(state))
  console.log(menuItemList)
  const menuItemDisplay = menuItemList.map((menuItem) => <MenuItem menuData={menuItem} />)
  return (
    <div>
      {menuItemDisplay}
    </div>
  )
}

export default Menu