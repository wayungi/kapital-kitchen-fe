import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import Logout from "./components/user/Logout";

function App() {
  return (
    <main className="p-1 h-screen">
      {/* header section */}
      <div>
        <Link to={`/register`}>Register</Link><br />
        <Link to={'/login'}>Login</Link><br />
        <Logout />
      </div>
      {/* main nav */}
      <div>
        <ul>
          <li><Link to={`/restaurantList`}>Get All restaurants</Link></li>
          <li><Link to={`/newRestaurant`}>post a restaurant</Link></li>
        </ul>
      </div>
      {/* main content display area */}
      <div>
        <Outlet />
      </div>
    </main> 
  )
}

export default App
