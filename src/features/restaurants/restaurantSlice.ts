import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'
import { RestaurantType } from '../../custom'

export interface RestaurantState {
  restaurants: RestaurantType[]
}

type StatusData = {
  id: string,
  status: boolean
}

export const fetchRestaurants = createAsyncThunk('restaurants/fetchRestaurants', async () => {
    const response = await fetch('http://127.0.0.1:3000/restaurants/')
    const result = await response.json() 
    return result.response
  }
)

// interface UsersState {
//   entities: []
//   loading: 'idle' | 'pending' | 'succeeded' | 'failed'
// }

const initialState: RestaurantState = {
  restaurants: []
}

export const restaurantSlice = createSlice({
  name: 'restaurant',
  initialState,
  reducers: {
    getAllRestaurants: state => {
      state.restaurants
    },
    addRestaurant: (state, action: PayloadAction<RestaurantType>) => {
      state.restaurants =  [...state.restaurants, action.payload]
    },
    updateRestaurant: (state, action:PayloadAction<RestaurantType>) => {
        state.restaurants = [action.payload, ...state.restaurants.filter((restaurant) => restaurant.id !== action.payload.id)]
    },
    deleteRestaurant: (state, action:PayloadAction<string>) => {
        console.log( action.payload)
        state.restaurants = state.restaurants.filter((restaurant) =>restaurant.id !== action.payload  )
    },
    toggleStatus: (state, action:PayloadAction<StatusData>) => {
      const { id, status } = action.payload
      const targetRestaurant: RestaurantType | undefined = state.restaurants.find((restaurant) => restaurant.id === id)
      if(!targetRestaurant) return
      state.restaurants = [{...targetRestaurant, status}, ...state.restaurants.filter((restaurant) => restaurant.id !== id)]
    }
  },

  extraReducers: (builder) => {
    builder.addCase(fetchRestaurants.fulfilled, (state, action) => {
      console.log(action.payload)
      state.restaurants = [...action.payload]
    })
  },
})

export const { 
    getAllRestaurants, 
    addRestaurant, 
    updateRestaurant,
    deleteRestaurant,
    toggleStatus,
 } = restaurantSlice.actions

export const selectAllRestaurants = (state: RootState) => state.restaurants.restaurants
export const selectRestaurantById = (state: RootState, id: string) => state.restaurants.restaurants.filter((restaurant) =>  restaurant.id === id)[0]

export default restaurantSlice.reducer