// import { useAppSelector } from "../app/hooks"
import { MenuItemType } from "../custom"
// import { selectAllMenuItems } from "../features/menu/menuSlice"
import MenuItem from "./partials/MenuItem"

type MenuProp = {
  menuItemList: MenuItemType[]
}


const Menu = ({menuItemList} : MenuProp) => {
  // const menuItemList =  useAppSelector((state) => selectAllMenuItems(state))
  const menuItemDisplay = menuItemList.map((menuItem) => <MenuItem menuData={menuItem} />)
  return (
    <div>
      {menuItemDisplay}
    </div>
  )
}

export default Menu