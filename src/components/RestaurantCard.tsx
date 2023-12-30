import { RestaurantType } from '../custom'

type RestaurantCardType = Pick<RestaurantType, "name" | "location" | "path">

const RestaurantCard = ({ name, location, path }: RestaurantCardType) => {
  console.log(path)
  console.log(name)
  console.log(location)

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