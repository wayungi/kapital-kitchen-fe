import { MenuItemType } from "../../custom"
import { useAppDispatch } from "../../app/hooks"
import { deleteMenuItem } from "../../features/menu/menuSlice"

type MenuItemProps = {
    menuData: MenuItemType
}

const MenuItem = ({menuData}: MenuItemProps) => {
    const dispatch = useAppDispatch()

    const { id, name, path, price } = menuData

    const handleDelete = () => {
        dispatch(deleteMenuItem(id))
    }

  return (
    <div>
        <div>
            <img src={path} alt={name} />
        </div>
        <div>
            <p>{name}</p>
            <p>{price}</p>
            <div>
                <button onClick={handleDelete}>Delete</button> {/* avaialable for admins/ restaurant owners*/}
                <button>Edit</button> {/* avaialable for admins/ restaurant owners*/}
                <button>Save</button> {/* avaialable for admins/ restaurant owners after editing*/}
                <button>Add to Order</button>  {/* avaialable to all*/}
                <button>Cancel Order</button>   {/* avaialable to all after odering*/}
            </div>
        </div>
    </div>
  )
}

export default MenuItem