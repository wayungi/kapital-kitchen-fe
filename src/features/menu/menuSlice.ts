import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";
import { MenuItemType } from "../../custom";

const BASE_URL = "http://127.0.0.1:3000";
const postHeader = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
};

export interface MenuState {
  menuItems: MenuItemType[];
}

export const saveMenu = createAsyncThunk(
  "menu/saveMenu",
  async (menuItem: MenuItemType) => {
    console.log(menuItem)
    try {
      const response = await fetch(`${BASE_URL}/menu`, {
        ...postHeader,
        body: JSON.stringify(menuItem),
      });
      // console.log(response)
      const result =  await response.json()
      // console.log(result)
      return result
    } catch (err) {
      console.log(err);
    }
  }
);

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
    },
  ],
};

export const menuSlice = createSlice({
  name: "menuItems",
  initialState,
  reducers: {
    getMenuItems: (state) => {
      state.menuItems;
    },
    addMenuItem: (state, action: PayloadAction<MenuItemType>) => {
      state.menuItems = [...state.menuItems, action.payload];
    },
    updateMenuItem: (state, action: PayloadAction<MenuItemType>) => {
      state.menuItems = [
        action.payload,
        ...state.menuItems.filter((item) => item.id !== action.payload.id),
      ];
    },
    deleteMenuItem: (state, action: PayloadAction<string>) => {
      state.menuItems = state.menuItems.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const { getMenuItems, addMenuItem, updateMenuItem, deleteMenuItem } =
  menuSlice.actions;

export const selectAllMenuItems = (state: RootState) =>
  state.menuItems.menuItems;
export const selectRestaurantMenu = (state: RootState, id: string) =>
  state.menuItems.menuItems.filter((menu) => menu.restaurantId === id);

export default menuSlice.reducer;
