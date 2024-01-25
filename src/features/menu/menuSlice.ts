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

const getHeader = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
};

const deleteHeader = {
  method: "DELETE",
  header: {
    "Content-Type": "application/json",  }
}

export interface MenuState {
  menuItems: MenuItemType[];
  loading: "idle" | "pending" | "completed" | "failed";
  error: undefined| string/*undefined was initially null, change it to resolve error in the extra reduces rejected case*/;
}


export const fetchMenu = createAsyncThunk("menu/fetchmenu", async () => {
  try {
    const response = await fetch(`${BASE_URL}/menu`, {
      ...getHeader,
    });
    if (!response.ok) return;
    const result = await response.json();
    return result
  } catch (err) {
    console.log(err);
  }
});

export const saveMenu = createAsyncThunk(
  "menu/saveMenu",
  async (menuItem: MenuItemType) => {
    try {
      const response = await fetch(`${BASE_URL}/menu`, {
        ...postHeader,
        body: JSON.stringify(menuItem),
      });
      const result = await response.json();
      return result;
    } catch (err) {
      console.log(err);
    }
  }
);

export const deleteMenuItem = createAsyncThunk("menu/deleteMenuItem", async(id: string) => {
  try {
    const response = await fetch(`${BASE_URL}/menu/${id}`, {
      ...deleteHeader,
    })
    if(!response) return 
    const result =  await response.json()
    return result.response
  }catch(err) {
    console.log(err)
  }
})

const initialState: MenuState = {
  menuItems: [],
  loading: "idle",
  error: ""
}


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
  },
  extraReducers: (builder) => 
  builder
  .addCase(fetchMenu.pending, (state) => {
    state.loading = "pending"
  })
  .addCase(fetchMenu.fulfilled, (state, action) => {
    state.loading = "completed"
    state.menuItems = [...action.payload]
  })
  .addCase(fetchMenu.rejected, (state, action) => {
    state.error = action.error.message
    state.loading = "failed"
  })
  .addCase(deleteMenuItem.fulfilled, (state, action) => {
    console.log(action.payload)
    state.menuItems =  state.menuItems.filter((item) => item._id !== action.payload._id)
  })

  
});

export const { getMenuItems, addMenuItem, updateMenuItem } = menuSlice.actions;
export const selectAllMenuItems = (state: RootState) => state.menuItems.menuItems;
export const selectRestaurantMenu = (state: RootState, id: string) => state.menuItems.menuItems.filter((menu) => menu.restaurantId === id);
export const selectMenuItem = (state: RootState, menuId: string) => state.menuItems.menuItems.find((menu) => menu._id === menuId)
export default menuSlice.reducer;
