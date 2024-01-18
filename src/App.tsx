import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

function App() {
  return (
    <main className="p-1 h-screen">
      <div>
        <ul>
          <li><Link to={`/restaurantList`}>Get All restaurants</Link></li>
          <li><Link to={`/newRestaurant`}>post a restaurant</Link></li>
          {/* 
           update a restaurant,delete a restaurant, deactivate, activate -> buttons
          */}
        </ul>
      </div>
      <div>
        <Outlet />
      </div>
    </main> 
  )
}

export default App
