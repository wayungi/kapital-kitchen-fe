import { useState } from 'react'
import { RestaurantType } from '../../custom'
import { useAppDispatch } from '../../app/hooks'
import { deleteRestaurant,  toggleActive } from '../../features/restaurants/restaurantSlice'
import { Link } from 'react-router-dom'

type RestaurantCardType = Pick<RestaurantType, "_id" | "name" | "location" | "path" | "active">
const RestaurantCard = ({ _id , name, location, path, active}: RestaurantCardType) => {
  const [isActive, setIsActive] = useState<boolean>(active as boolean)
  const dispatch =  useAppDispatch()

  const handleDelete = () => {
    console.log('attempting delete')
    dispatch(deleteRestaurant(_id as string))
  }

  const handleStatus = () => {
    setIsActive(!isActive)
    if(_id !== undefined && active !== undefined){
      dispatch(toggleActive({_id, active: isActive}))
    }
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
        <Link to={`/update/${_id}`}>Upodate</Link>
        <button onClick={handleStatus}>{isActive ? "Deactivate": "Activate" } </button>
       </div>

       <div className="w-full bg-slate-500 p-2 my-2 rounded-md text-white text-center">View Menu</div>
      </div>
    </>
  )
}

export default RestaurantCard