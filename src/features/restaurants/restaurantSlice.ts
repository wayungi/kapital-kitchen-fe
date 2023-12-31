import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'
import { RestaurantType } from '../../custom'

export interface RestaurantState {
  restaurants: RestaurantType[]
}

const initialState: RestaurantState = {
  restaurants: [
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
    },
    {
        id: "3",
        name: "Hungerz Out",
        location: "Sir Apollo Road, plot 2204",
        status: "down",
        path: "https://picsum.photos/200"
    },
    {
        id: "4",
        name: "Pizza Hut",
        location: "Muyenga",
        status: "up",
        path: "https://picsum.photos/200"
    }
  ]
}


//  activaterestaurant

export const restaurantSlice = createSlice({
  name: 'restaurant',
  initialState,
  reducers: {
    getAllRestaurants: state => {
      state.restaurants
    },

    addRestaurant: (state, action: PayloadAction<RestaurantType>) => {
      [...state.restaurants, action.payload]
    },

    updateRestaurant: (state, action:PayloadAction<RestaurantType>) => {
        console.log(state.restaurants, action.payload)
    },

    deleteRestaurant: (state, action:PayloadAction<RestaurantType>) => {
        console.log(state.restaurants, action.payload)
    },

    deactivateRestaurant: (state, action:PayloadAction<RestaurantType>) => {
        console.log(state.restaurants, action.payload)
    },

    activateRestaurant: (state, action:PayloadAction<RestaurantType>) => {
        console.log(state.restaurants, action.payload)

    }

  }
})

export const { 
    getAllRestaurants, 
    addRestaurant, 
    updateRestaurant,
    deleteRestaurant,
    deactivateRestaurant,
    activateRestaurant
 } = restaurantSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectRestaurants = (state: RootState) => state.restaurants

export default restaurantSlice.reducer