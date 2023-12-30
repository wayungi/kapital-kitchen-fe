import Restaurants from "./components/Restaurants"
import { RestaurantType } from "./custome"

const restaurants: RestaurantType[] = [
  {
    id: "1",
    name: "Nandos",
    location: "Kampala Road",
    status: "up"
  },
  {
    id: "2",
    name: "KCF Kabalagala",
    location: "Kabalagala",
    status: "up"
  }
]


function App() {
  return (
    <>
      <Restaurants restaurants={restaurants}/>
    </>
  )
}

export default App
