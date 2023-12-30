import { RestaurantType } from '../custome'

type RestaurantCardType = Pick<RestaurantType, "name" | "location" | "path">

const RestaurantCard = ({ name, location, path }: RestaurantCardType) => {
  return (
    <>
        <h1>{name}</h1>
        <p>{location}</p>
        <div>
            <img src={path} alt={name} />
        </div>
    </>
  )
}

export default RestaurantCard