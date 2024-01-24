import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import store from "./app/store";
import { Provider } from "react-redux";
import RegisterFrom from "./components/user/RegisterForm.tsx";
import LoginForm from "./components/user/LoginForm.tsx";

import RestaurantList from "./components/Restaurant/RestaurantList";
import NewRestaurant from "./components/Restaurant/NewRestaurant.tsx";
import UpdateRestaurant from "./components/Restaurant/UpdateRestaurant";

import RestaurantMenu from "./components/Menu/RestaurantMenu.tsx";
import AddMenu from "./components/Menu/AddMenu.tsx";

import ErrorPage from "./components/ErrorPage.tsx";

import {
  createBrowserRouter,
  RouterProvider,
  // Route,
  // Link,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/" /*root route*/,
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/restaurants",
        element: <RestaurantList />,
      },
      {
        path: "/newRestaurant",
        element: <NewRestaurant />,
      },
      {
        path: "/update/:id",
        element: <UpdateRestaurant />,
      },
      {
        path: "/register",
        element: <RegisterFrom />,
      },
      {
        path: "/login",
        element: <LoginForm />,
      },

      /*menu links*/
      {
        path: "/restaurants/menu/:id",
        element: <RestaurantMenu id="1" />,
      },
      {
        path: "/restaurants/:name/:id",
        element: <AddMenu />,
      },
      
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
      {/* <App /> */}
    </Provider>
  </React.StrictMode>
);
