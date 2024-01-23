export type RestaurantType =  {
    _id?: string,
    name: string,
    location: string,
    active?: boolean,
    path?: string,
    contact: string,
}

export type MenuItemType =  {
    id: string,
    name: string,
    path: string,
    price: number,
    restaurantId: string,
}

export type UserData = {
    username: string
    email: string,
    password: string
    contact: string
}

export type Credentials = {
    username: string,
    password: string
}