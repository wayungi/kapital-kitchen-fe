import { useEffect } from "react";
import { RestaurantType } from "../../custom";
import RestaurantCard from "./RestaurantCard";
import { useAppSelector , useAppDispatch } from "../../app/hooks";
import { selectAllRestaurants , fetchRestaurants } from "../../features/restaurants/restaurantSlice";

const RestaurantList = () => {
  const dispatch = useAppDispatch();
  const restaurantsList: RestaurantType[] = useAppSelector((state) => selectAllRestaurants(state));
  const restaurantStatus = useAppSelector((state) => state.restaurants.loading);
  const error = useAppSelector((state) => state.restaurants.error)

  useEffect(() => {
    if (restaurantStatus === 'idle') {
      dispatch(fetchRestaurants())
    }
  }, [restaurantStatus, dispatch])

  let content
  if(restaurantStatus === 'pending'){
    content = <div>Loading</div> /*chanage this into a loading component*/
  }else if(restaurantStatus === 'completed'){
    content = restaurantsList.map((restaurant: RestaurantType) => (
      <article key={restaurant._id} className="mx-2 my-10 shadow-lg sm:flex">
        <RestaurantCard
          name={restaurant.name}
          location={restaurant.location}
          path={restaurant.path}
          _id={restaurant._id}
          active={restaurant.active}
        />
      </article>
    ));
  }else if(restaurantStatus === 'failed'){
    content = <div>{error}</div> // change to an error component
  }

  return (
    <div
      className="
      max-w-4xl
      mx-auto
    "
    >
      {content}
    </div>
  );
};

export default RestaurantList;
