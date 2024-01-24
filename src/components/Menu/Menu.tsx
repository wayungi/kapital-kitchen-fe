import { MenuItemType } from "../../custom"
import MenuItem from "../partials/MenuItem"

type MenuProp = {
  menuItemList: MenuItemType[]
}


const Menu = ({menuItemList} : MenuProp) => {
  const menuItemDisplay = menuItemList.map((menuItem) => <MenuItem menuData={menuItem} />)
  return (
    <div>
      {menuItemDisplay}
    </div>
  )
}

export default Menu