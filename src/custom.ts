export type RestaurantType =  {
    _id?: string,
    name: string,
    location: string,
    active?: boolean,
    path?: string,
    contact: string,
}

export type MenuItemType =  {
    _id?: string,
    name: string,
    path: string,
    price: number,
    restaurantName: string | undefined,
    restaurantId: string | undefined,
    desc: string
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

export type CartType = {
    name: string, //name of menu
    quantity: number, //quanritites order
    price: number, //unit price of menu item
    amount:number, // price *qunatity
    restaurant: string, //name of restaurant
    restaurantId: string,
    menuId: string,  // id of menu
    path: string
}