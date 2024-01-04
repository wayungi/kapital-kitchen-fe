import RestaurantList from "./components/RestaurantList"
import NewRestaurant from "./components/NewRestaurant"
import UpdateRestaurant from "./components/UpdateRestaurant"

function App() {
  return (
    <main className="p-1 h-screen">
      {/* <RestaurantList /> */}
      {/* <NewRestaurant /> */}
      <UpdateRestaurant id="1"/>
    </main> 
  )
}

export default App
