import { createAsyncThunk, createSlice, /*PayloadAction*/ } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";
import { CartType } from "../../custom";

const BASE_URL = ''

export interface CartState {
  orderList: CartType[];
  loading: "idle" | "pending" | "completed" | "failed";
  error: undefined| string/*undefined was initially null, change it to resolve error in the extra reduces rejected case*/;
}

const initialState: CartState = {
  orderList: [],
  loading: "idle",
  error: ""
}

type orderType = {
  timestamp: number,
  items: CartType[]
}

export const saveOrder =  createAsyncThunk("cart/saveOrder", async (order: orderType) => {
  const res =  await fetch()
  

})

export const cartSlice = createSlice({
  name: "carItems",
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      const id =  action.payload.menuId
      const exists = state.orderList.find((item) => item.menuId === id)
      if(exists) return
      state.orderList = [...state.orderList, action.payload]
    },
    updateQuantity: (state, action) => {
      const {alteredQuantity, menuId } = action.payload
      state.orderList = state.orderList.map((orderItem) => {
        if(orderItem.menuId === menuId){
          return {...orderItem, quantity: alteredQuantity}
        }
        return orderItem
      })      
    },
    removeItemFromCart: (state, action) => {
      const { menuId } = action.payload
      state.orderList = state.orderList.filter((orderItem) => orderItem.menuId !== menuId)
    },
  },
  extraReducers: (builder) => 
  builder  
});

export const { addItemToCart,  updateQuantity, removeItemFromCart } = cartSlice.actions;
export const selectCartItems = (state: RootState) => state.cartItems.orderList;
// export const selectRestaurantMenu = (state: RootState, id: string) => state.menuItems.menuItems.filter((menu) => menu.restaurantId === id);
// export const selectMenuItem = (state: RootState, menuId: string) => state.menuItems.menuItems.find((menu) => menu._id === menuId)
export default cartSlice.reducer;
