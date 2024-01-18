import { Outlet } from "react-router-dom";


function App() {
  return (
    <main className="p-1 h-screen">
      <div>
        <p>Side bar content</p>
      </div>
      <div>
        <Outlet />
      </div>
    </main> 
  )
}

export default App
