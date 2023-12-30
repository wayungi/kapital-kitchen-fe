import { RestaurantType } from "../custome"
import RestaurantCard from "./RestaurantCard"

type RestaurantsProps = {
    restaurants: RestaurantType[]
}

const RestaurantList = ( { restaurants } : RestaurantsProps) => {
    const restaurantCards = restaurants.map((restaurant: RestaurantType) =>
    <article key={restaurant.id}>
        <RestaurantCard 
            id={restaurant.id}
            name={restaurant.name}
            location={restaurant.location}
            status={restaurant.status}
        />
    </article>
    )

  return (
    <div>{restaurantCards}</div>
  )
}

export default RestaurantList