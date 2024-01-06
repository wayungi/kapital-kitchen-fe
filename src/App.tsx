import RestaurantList from "./components/RestaurantList"
import NewRestaurant from "./components/NewRestaurant"
import UpdateRestaurant from "./components/UpdateRestaurant"
import GeneralMenu from "./components/GeneralMenu"
import RestaurantMenu from "./components/RestaurantMenu"

function App() {
  return (
    <main className="p-1 h-screen">
      {/* <RestaurantList /> */}
      {/* <NewRestaurant /> */}
      {/* <UpdateRestaurant id="1"/> */}
      {/* <GeneralMenu /> */}
      <RestaurantMenu id="1" />
    </main> 
  )
}

export default App
