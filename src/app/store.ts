import { configureStore } from '@reduxjs/toolkit'
import restaurantsReducer from '../features/restaurants/restaurantSlice'
import menuSliceReducer from '../features/menu/menuSlice'
import cartSliceReducer from '../features/cart/cartSlice'

const store = configureStore({
  reducer: {
    restaurants: restaurantsReducer,
    menuItems: menuSliceReducer,
    cartItems: cartSliceReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store
