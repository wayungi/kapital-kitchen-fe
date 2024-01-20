import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";
import { RestaurantType } from "../../custom";

export interface RestaurantState {
  restaurants: RestaurantType[];
  loading: "idle" | "pending" | "completed" | "failed";
  error:| string| undefined /*undefined was initially null, change it to resolve error in the extra reduces rejected case*/;
}

type ActiveData = {
  _id: string;
  active: boolean;
};

const BASE_URL = "http://127.0.0.1:3000/restaurants/";

export const toggleActive = createAsyncThunk(
  "restaurants/toggleActivity",
  async (data: ActiveData) => {
    const { _id, active } = data;
    const response = await fetch(`${BASE_URL}activity/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ active }),
    });

    const result =  await response.json()
    return result.response
  }
);

export const fetchRestaurants = createAsyncThunk(
  "restaurants/fetchRestaurants",
  async () => {
    const response = await fetch(`${BASE_URL}`);
    const result = await response.json();
    return result.response;
  }
);

export const addRestaurant = createAsyncThunk(
  "restaurants/addRestaurant",
  async (restaurant: RestaurantType) => {
    console.log(restaurant)
    const response = await fetch(`${BASE_URL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(restaurant),
    });
    const result = await response.json();
    return result;
  }
);

export const deleteRestaurant = createAsyncThunk(
  "restaurants/deleteRetsuarant",
  async (id: string) => {
    const response = await fetch(`${BASE_URL}${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();
    return result.response;
  }
);

const initialState: RestaurantState = {
  restaurants: [],
  loading: "idle",
  error: undefined,
};

export const restaurantSlice = createSlice({
  name: "restaurant",
  initialState,
  reducers: {
    updateRestaurant: (state, action: PayloadAction<RestaurantType>) => {
      state.restaurants = [
        action.payload,
        ...state.restaurants.filter(
          (restaurant) => restaurant.id !== action.payload.id
        ),
      ];
    },
    // toggleActive: (state, action: PayloadAction<StatusData>) => {
    //   const { id, status } = action.payload;
    //   const targetRestaurant: RestaurantType | undefined =
    //     state.restaurants.find((restaurant) => restaurant.id === id);
    //   if (!targetRestaurant) return;
    //   state.restaurants = [
    //     { ...targetRestaurant, status },
    //     ...state.restaurants.filter((restaurant) => restaurant.id !== id),
    //   ];
    // },
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
        state.error = action.error.message;
      })
      .addCase(addRestaurant.fulfilled, (state, action) => {
        state.restaurants = [...state.restaurants, action.payload];
      })
      .addCase(deleteRestaurant.fulfilled, (state, action) => {
        const id = action.payload._id;
        state.restaurants = state.restaurants.filter(
          (restaurant) => restaurant._id !== id
        );
      });
  },
});

export const { updateRestaurant } = restaurantSlice.actions;

export const selectAllRestaurants = (state: RootState) =>
  state.restaurants.restaurants;
export const selectRestaurantById = (state: RootState, id: string) =>
  state.restaurants.restaurants.filter((restaurant) => restaurant.id === id)[0];

export default restaurantSlice.reducer;
