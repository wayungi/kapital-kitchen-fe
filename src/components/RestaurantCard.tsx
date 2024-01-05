import { useState } from 'react'
import { RestaurantType } from '../custom'
import { useAppDispatch } from '../app/hooks'
import { deleteRestaurant,  toggleStatus } from '../features/restaurants/restaurantSlice'

type RestaurantCardType = Pick<RestaurantType, "id" | "name" | "location" | "path" | "status">

const RestaurantCard = ({ id, name, location, path, status }: RestaurantCardType) => {

  const [restaurantStatus, setStatus] = useState<boolean>(status)

  const dispatch =  useAppDispatch()

  const handleDelete = () => {
    dispatch(deleteRestaurant(id))
  }

  const handleCheckBox = () => {
    setStatus(!restaurantStatus)
    dispatch(toggleStatus({id, status: !status}))
  }

  return (
    <>
      <div>
        <img src={path} alt={name} className="w-full h-52 sm:w-52 rounded-t-lg sm:rounded-r-none sm:rounded-bl-lg object-cover"/>
      </div>
      <div className="
        px-2 
        py-4 
        h-52
       bg-white 
        rounded-b-lg
        sm:rounded-bl-none
        sm:rounded-e-lg 
        grow

      ">
       <h1 className="font-bold">{name}</h1>
       <p className="font-light">{location}</p>

       <div>
        <button onClick={handleDelete}>Delete</button>
          <div>
            <label htmlFor='status'>Active</label>
            <input type="checkbox" id="status" checked={restaurantStatus} onChange={handleCheckBox}/>
          </div>
       </div>
       <div className="w-full bg-slate-500 p-2 my-2 rounded-md text-white text-center">View Menu</div>
      </div>
    </>
  )
}

export default RestaurantCard