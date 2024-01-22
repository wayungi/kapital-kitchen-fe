import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import store from './app/store'
import { Provider } from 'react-redux'
import { fetchRestaurants } from './features/restaurants/restaurantSlice.ts'


import RestaurantList from "./components/RestaurantList"
import NewRestaurant from "./components/NewRestaurant"
import UpdateRestaurant from "./components/UpdateRestaurant"
import RestaurantMenu from "./components/RestaurantMenu"
import ErrorPage from './components/ErrorPage.tsx'

import {
  createBrowserRouter,
  RouterProvider,
  // Route,
  // Link,
} from "react-router-dom";

//store.dispatch(fetchRestaurants())

const router = createBrowserRouter([
  {
    path: "/", /*root route*/
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/restaurantList",
        element: <RestaurantList />,
      },
      {
        path: "/newRestaurant",
        element: <NewRestaurant />,
      },
      {
        path: '/update/:id',
        element: <UpdateRestaurant/>,
      },
      {
        path: "RestaurantMenu",
        element: <RestaurantMenu  id="1"/>,
      },
    ]
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <Provider store={store}>
        <RouterProvider router={router} />
        {/* <App /> */}
      </Provider>
  </React.StrictMode>,
)
