import { RestaurantType } from "../custom"
import RestaurantCard from "./RestaurantCard"
import { useAppSelector } from "../app/hooks"
import { selectAllRestaurants } from "../features/restaurants/restaurantSlice"

const RestaurantList = () => {
    const restaurantsList: RestaurantType[] = useAppSelector((state) => selectAllRestaurants(state))
    const restaurantCards = restaurantsList.map((restaurant: RestaurantType) =>
    <article key={restaurant._id} className="mx-2 my-10 shadow-lg sm:flex">
      <RestaurantCard 
        name={restaurant.name}
        location={restaurant.location}
        path={restaurant.path}
        id={restaurant._id}
        status={restaurant.status}
      />
    </article>
    )

  return (
    <div className="
      max-w-4xl
      mx-auto
    ">
      {restaurantCards}
    </div>
  )
}

export default RestaurantList