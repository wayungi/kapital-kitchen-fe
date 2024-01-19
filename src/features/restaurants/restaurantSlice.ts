import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";
import { RestaurantType } from "../../custom";

export interface RestaurantState {
  restaurants: RestaurantType[];
  loading: "idle" | "pending" | "completed" | "failed";
  error: string | undefined; /*undefined was initially null, change it to resolve error in the extra reduces rejected case*/
}

type StatusData = {
  id: string;
  status: boolean;
};

export const fetchRestaurants = createAsyncThunk(
  "restaurants/fetchRestaurants",
  async () => {
    const response = await fetch("http://127.0.0.1:3000/restaurants/");
    const result = await response.json();
    return result.response;
  }
);

export const addRestaurant = createAsyncThunk(
  "restaurants/addRestaurant",
  async (restaurant) => {
    const response = await fetch("http://127.0.0.1:3000/restaurants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(restaurant),
    });
    const result = await response.json();
    return result
  }
);

const initialState: RestaurantState = {
  restaurants: [],
  loading: "idle",
  // addRestaurantStatus: "idle",
  error: undefined,
};

export const restaurantSlice = createSlice({
  name: "restaurant",
  initialState,
  reducers: {
    // getAllRestaurants: state => {
    //   state.restaurants
    //
    restaurantAdd: (state, action: PayloadAction<RestaurantType>) => {
      state.restaurants = [...state.restaurants, action.payload];
    },
    updateRestaurant: (state, action: PayloadAction<RestaurantType>) => {
      state.restaurants = [
        action.payload,
        ...state.restaurants.filter(
          (restaurant) => restaurant.id !== action.payload.id
        ),
      ];
    },
    deleteRestaurant: (state, action: PayloadAction<string>) => {
      console.log(action.payload);
      state.restaurants = state.restaurants.filter(
        (restaurant) => restaurant.id !== action.payload
      );
    },
    toggleStatus: (state, action: PayloadAction<StatusData>) => {
      const { id, status } = action.payload;
      const targetRestaurant: RestaurantType | undefined =
        state.restaurants.find((restaurant) => restaurant.id === id);
      if (!targetRestaurant) return;
      state.restaurants = [
        { ...targetRestaurant, status },
        ...state.restaurants.filter((restaurant) => restaurant.id !== id),
      ];
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchRestaurants.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(fetchRestaurants.fulfilled, (state, action) => {
        state.loading = "completed";
        state.restaurants = [...action.payload];
      })
      .addCase(fetchRestaurants.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.error.message
      })
      .addCase(addRestaurant.fulfilled, (state, action) => {
        state.restaurants = [...state.restaurants, action.payload]
      })
  },
});

export const {
  // getAllRestaurants,
  // addRestaurant,
  updateRestaurant,
  deleteRestaurant,
  toggleStatus,
} = restaurantSlice.actions;

export const selectAllRestaurants = (state: RootState) =>
  state.restaurants.restaurants;
export const selectRestaurantById = (state: RootState, id: string) =>
  state.restaurants.restaurants.filter((restaurant) => restaurant.id === id)[0];

export default restaurantSlice.reducer;
