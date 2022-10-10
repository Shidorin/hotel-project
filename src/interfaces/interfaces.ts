export interface ICheckbox {
    id: string, checked: boolean
}

export interface IFilter {
    city: Array<ICheckbox>,
    style?: string,
    facilities?: string,
    price?: "asc" | "dsc" | undefined
}

export interface IHotelCard {
    img: string,
    name: string,
    city: string,
    cost: number,
}