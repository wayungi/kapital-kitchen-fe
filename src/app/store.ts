import { configureStore } from '@reduxjs/toolkit'
import restaurantsReducer from '../features/restaurants/restaurantSlice'
import menuSliceReducer from '../features/menu/menuSlice'

const store = configureStore({
  reducer: {
    restaurants: restaurantsReducer,
    menuItems: menuSliceReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store
