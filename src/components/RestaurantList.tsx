import { RestaurantType } from "../custom"
import RestaurantCard from "./RestaurantCard"
import { useAppSelector } from "../app/hooks"
import { selectAllRestaurants } from "../features/restaurants/restaurantSlice"

const RestaurantList = () => {
    const restaurantsList: RestaurantType[] = useAppSelector((state) => selectAllRestaurants(state))
    // const [jacka, setRestaurants] =  useState<RestaurantType[]>([])

    // useEffect(() => {
    //     const fetchRestaurants = async(): Promise<RestaurantType[]> => {
    //         const restaurants = await fetch('http://127.0.0.1:3000/restaurants')
    //         .then(res => {
    //             return res.json()})
    //         .catch(err => { if (err instanceof Error) console.log(err)})
    //         return restaurants
    //     }
    //     fetchRestaurants().then(restaurants => setRestaurants(restaurants))
    // }, [])

    // console.log(jacka)

    

    const restaurantCards = restaurantsList.map((restaurant: RestaurantType) =>
    <article key={restaurant.id} className="mx-2 my-10 shadow-lg sm:flex">
      <RestaurantCard 
        name={restaurant.name}
        location={restaurant.location}
        path={restaurant.path}
        id={restaurant.id}
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