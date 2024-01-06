import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'
import { MenuItemType } from '../../custom'

export interface MenuState {
   menuItems: MenuItemType[]
}

const initialState: MenuState = {
  menuItems: [
    {
        id: "1",
        restaurantId: "1",
        name: "Drum sticks",
        price: 15000,
        path: "https://picsum.photos/200",
    },
    {
        id: "2",
        restaurantId: "1",
        name: "Pork Ribs",
        price: 25000,
        path: "https://picsum.photos/200",
    },
    {
        id: "3",
        restaurantId: "2",
        name: "Gum bald",
        price: 1000,
        path: "https://picsum.photos/200",
    },
    {
        id: "4",
        restaurantId: "4",
        name: "Chips",
        price: 9000,
        path: "https://picsum.photos/200",
    }
  ]
}

export const menuSlice = createSlice({
  name: 'menuItems',
  initialState,
  reducers: {
    getMenuItems: state => {
      state.menuItems
    },
    addMenuItem: (state, action: PayloadAction<MenuItemType>) => {
      state.menuItems =  [...state.menuItems, action.payload]
    },
    updateMenuItem: (state, action:PayloadAction<MenuItemType>) => {
        state.menuItems = [action.payload, ...state.menuItems.filter((item) => item.id !== action.payload.id)]
    },
    deleteMenuItem: (state, action:PayloadAction<string>) => {
        state.menuItems = state.menuItems.filter((item) => item.id !== action.payload)
    }
  }
})

export const { 
    getMenuItems, 
    addMenuItem, 
    updateMenuItem,
    deleteMenuItem,
 } = menuSlice.actions

export const selectAllMenuItems = (state: RootState) => state.menuItems.menuItems
export const selectRestaurantById = (state: RootState, id: string) => state.menuItems.menuItems.filter((item) =>  item.id === id)[0]

export default menuSlice.reducer