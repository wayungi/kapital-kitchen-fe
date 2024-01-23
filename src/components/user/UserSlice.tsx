import { UserData } from "../../custom"

const BASE_URL = 'http://127.0.0.1:3000'

export const userRegister =  async (userData: UserData) => {
    const response =  await fetch(`${BASE_URL}/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(userData)
    })
    const user =  await response.json()
    return user
}

export const userLogin =  async (loginCredentails) => {
    
}


