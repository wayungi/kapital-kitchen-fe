import { RestaurantType } from '../custom'

type RestaurantCardType = Pick<RestaurantType, "name" | "location" | "path">

const RestaurantCard = ({ name, location, path }: RestaurantCardType) => {
  return (
    <>
      <div>
        <img src={path} alt={name} className="w-full h-52 rounded-t-lg object-cover" />
      </div>
      <div className="px-2 py-4 h-52 bg-white rounded-b-lg">
       <h1 className="font-bold">{name}</h1>
       <p className="font-light">{location}</p>
       <div className="w-full bg-slate-500 p-2 my-2 rounded-md text-white text-center">View Menu</div>
      </div>
    </>
  )
}

export default RestaurantCard