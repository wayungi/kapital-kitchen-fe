export type RestaurantType =  {
    _id: string,
    name: string,
    location: string,
    status: boolean,
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