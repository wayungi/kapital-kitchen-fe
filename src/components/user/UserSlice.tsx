import { createAsyncThunk } from "@reduxjs/toolkit"
import { UserData } from "../../custom"

const BASE_URL = 'http://127.0.0.1:3000'

export const registerUser => createAsyncThunk("users/registerUser", async (userData: UserData) => {
    const response =  await fetch(`${BASE_URL}/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(userData)
    })
    const user =  await response.json()
    console.log(user)
    return user
})