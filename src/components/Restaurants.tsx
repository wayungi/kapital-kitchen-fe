import { RestaurantType } from "../custome"

type RestaurantsProps = {
    restaurants: RestaurantType[]
}

const Restaurants = ( { restaurants } : RestaurantsProps) => {
    const restaurantCards = restaurants.map((restaurant: RestaurantType) => (
        <div key={restaurant.id} className={restaurant.status}>
            <h1>{restaurant.name}</h1>
            <p>{restaurant.location}</p>
            <div>
                <img src={restaurant.path} alt={restaurant.name} />
            </div>
        </div>
    ))

  return (
    <div>{restaurantCards}</div>
  )
}

export default Restaurants