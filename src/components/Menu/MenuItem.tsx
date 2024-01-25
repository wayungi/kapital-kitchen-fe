import { useState, ChangeEvent } from "react"
import { MenuItemType } from "../../custom"
import { useAppDispatch } from "../../app/hooks"
import { deleteMenuItem, updateMenuItem } from "../../features/menu/menuSlice"
import { Link } from "react-router-dom"

type MenuItemProps = {
    menuData: MenuItemType
}

const MenuItem = ({menuData}: MenuItemProps) => {
    const dispatch = useAppDispatch()
    const [readOnly, setReadOnly] = useState<boolean>(true)
    const [menuObj, setMenuObj] = useState<MenuItemType>({...menuData})
    const [canAddToOrder, setCanAddToOrder] = useState<boolean>(true)
    
    const handleDelete = () => {
        const id = menuObj._id
        dispatch(deleteMenuItem(id as string))
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
            <img src={menuObj.path} alt={menuObj.name} />
        </div>
        <div>
            <input 
                type="text" 
                value= {menuObj.name} 
                name="name"
                readOnly={readOnly}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setMenuObj({...menuObj, [e.target.name]: e.target.value})}/>
            <input
                type="text"
                value={menuObj.price}
                name="price"
                readOnly={readOnly}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setMenuObj({...menuObj, [e.target.name]: e.target.value})}/>
            <div>
                <button onClick={handleDelete}>Delete</button> {/* avaialable for admins/ restaurant owners*/}
                <Link to={`/restaurants/menu/edit/${menuObj._id}`}>Edit</Link>
                { canAddToOrder ? <button onClick={() => setCanAddToOrder(false)}>Add to Order</button> : 
                <button onClick={() => setCanAddToOrder(true)}>Remove from Order</button> }
            </div>
        </div>
    </div>
  )
}

export default MenuItem