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
import RestaurantMenu from "./components/Restaurant/RestaurantMenu";
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
        path: "/restaurantList",
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
        path: "RestaurantMenu",
        element: <RestaurantMenu id="1" />,
      },
      {
        path: "/register",
        element: <RegisterFrom />,
      },
      {
        path: "/login",
        element: <LoginForm />,
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
