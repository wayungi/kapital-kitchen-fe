import { useState, ChangeEvent } from "react"
import { MenuItemType } from "../../custom"
import { useAppDispatch } from "../../app/hooks"
import { deleteMenuItem, updateMenuItem } from "../../features/menu/menuSlice"

type MenuItemProps = {
    menuData: MenuItemType
}

const MenuItem = ({menuData}: MenuItemProps) => {
    const dispatch = useAppDispatch()
    const [readOnly, setReadOnly] = useState<boolean>(true)
    const { id, name, path, price } = menuData
    const [menuItemName, setMenuItemName] = useState(name)
    const [menuItemPrice, setMenuItemPrice] = useState(price.toString())

    const handleDelete = () => {
        dispatch(deleteMenuItem(id))
    }

    const handleEdit = () => {
        setReadOnly(false)
    }

    const handleSave = () => {
        setReadOnly(true)
        const nameChange: boolean = menuItemName !== name
        const priceChange: boolean = menuItemPrice !== price.toString()

        if(nameChange){
            menuData = {...menuData, name:menuItemName }
        }

        if(priceChange){
            menuData = {...menuData, price: +menuItemPrice }
        }

        if(nameChange || priceChange ){
            dispatch(updateMenuItem(menuData))
        }


    }

    

  return (
    <div>
        <div>
            <img src={path} alt={name} />
        </div>
        <div>
            <input 
                type="text" 
                value= {menuItemName} 
                readOnly={readOnly}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setMenuItemName(e.target.value)}/>
            <input
                type="text"
                value={menuItemPrice}
                readOnly={readOnly}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setMenuItemPrice(e.target.value)}/>
            <div>
                <button onClick={handleDelete}>Delete</button> {/* avaialable for admins/ restaurant owners*/}
                <button onClick={handleEdit}>Edit</button> {/* avaialable for admins/ restaurant owners*/}
                <button onClick={handleSave}>Save</button> {/* avaialable for admins/ restaurant owners after editing*/}
                <button>Add to Order</button>  {/* avaialable to all*/}
                <button>Cancel Order</button>   {/* avaialable to all after odering*/}
            </div>
        </div>
    </div>
  )
}

export default MenuItem