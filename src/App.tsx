import RestaurantList from "./components/RestaurantList"
import { RestaurantType } from "./custom"

const restaurants: RestaurantType[] = [
  {
    id: "1",
    name: "Nandos",
    location: "Kampala Road",
    status: "up",
    path: "https://picsum.photos/200"
  },
  {
    id: "2",
    name: "KCF Kabalagala",
    location: "Kabalagala",
    status: "up",
    path: "https://picsum.photos/200"
  }
]


function App() {
  return (
    <main>
      <RestaurantList restaurants={restaurants} />
    </main>
  )
}

export default App
