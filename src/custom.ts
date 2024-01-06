export type RestaurantType =  {
    id: string,
    name: string,
    location: string,
    status: boolean,
    path?: string,
    contact: string,
}

export type MenuItem =  {
    id: string,
    name: string,
    path: string,
    price: number,
    restaurantId: string,
}