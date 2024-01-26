import { /*createAsyncThunk,*/ createSlice, /*PayloadAction*/ } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";
import { CartType } from "../../custom";

// const BASE_URL = "http://127.0.0.1:3000";
// const postHeader = {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
// };

// const getHeader = {
//   method: "GET",
//   headers: {
//     "Content-Type": "application/json",
//   },
// };

// const deleteHeader = {
//   method: "DELETE",
//   header: {
//     "Content-Type": "application/json",  }
// }

export interface CartState {
  orderList: CartType[];
  loading: "idle" | "pending" | "completed" | "failed";
  error: undefined| string/*undefined was initially null, change it to resolve error in the extra reduces rejected case*/;
}


// export const fetchMenu = createAsyncThunk("menu/fetchmenu", async () => {
//   try {
//     const response = await fetch(`${BASE_URL}/menu`, {
//       ...getHeader,
//     });
//     if (!response.ok) return;
//     const result = await response.json();
//     return result
//   } catch (err) {
//     console.log(err);
//   }
// });

// export const saveMenu = createAsyncThunk(
//   "menu/saveMenu",
//   async (menuItem: MenuItemType) => {
//     try {
//       const response = await fetch(`${BASE_URL}/menu`, {
//         ...postHeader,
//         body: JSON.stringify(menuItem),
//       });
//       const result = await response.json();
//       return result;
//     } catch (err) {
//       console.log(err);
//     }
//   }
// );

// export const deleteMenuItem = createAsyncThunk("menu/deleteMenuItem", async(id: string) => {
//   try {
//     const response = await fetch(`${BASE_URL}/menu/${id}`, {
//       ...deleteHeader,
//     })
//     if(!response) return 
//     const result =  await response.json()
//     return result.response
//   }catch(err) {
//     console.log(err)
//   }
// })

// export const updateMenuItem = createAsyncThunk('menu/updateMenuItem', async(menuItem: MenuItemType) => {
//   try {
//   const response = await fetch(`${BASE_URL}/menu/${menuItem._id}`, {
//     method: "PATCH",
//     headers: {
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify(menuItem)
//   })
//   if(!response) return
//   const result =  await response.json()
//   return result.response
//   }catch(err) {
//     console.log(err)
//   }
// })

const initialState: CartState = {
  orderList: [],
  loading: "idle",
  error: ""
}


export const cartSlice = createSlice({
  name: "carItems",
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
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
    // updateMenuItem: (state, action: PayloadAction<MenuItemType>) => {
    //   state.menuItems = [
    //     action.payload,
    //     ...state.menuItems.filter((item) => item.id !== action.payload.id),
    //   ];
    // },
  },
  extraReducers: (builder) => 
  builder
//   .addCase(fetchMenu.pending, (state) => {
//     state.loading = "pending"
//   })
//   .addCase(fetchMenu.fulfilled, (state, action) => {
//     state.loading = "completed"
//     state.menuItems = [...action.payload]
//   })
//   .addCase(fetchMenu.rejected, (state, action) => {
//     state.error = action.error.message
//     state.loading = "failed"
//   })
//   .addCase(deleteMenuItem.fulfilled, (state, action) => {
//     console.log(action.payload)
//     state.menuItems =  state.menuItems.filter((item) => item._id !== action.payload._id)
//   })

  
});

export const { addItemToCart,  updateQuantity } = cartSlice.actions;
export const selectCartItems = (state: RootState) => state.cartItems.orderList;
// export const selectRestaurantMenu = (state: RootState, id: string) => state.menuItems.menuItems.filter((menu) => menu.restaurantId === id);
// export const selectMenuItem = (state: RootState, menuId: string) => state.menuItems.menuItems.find((menu) => menu._id === menuId)
export default cartSlice.reducer;
