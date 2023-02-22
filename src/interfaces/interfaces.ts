// export interface ICheckbox {
//     id: string, checked: boolean
// }

export interface IFilter {
    // city: Array<ICheckbox>,
    city?: string[],
    style?: string[],
}

export interface IHotelCard {
    img: string,
    name: string,
    city: string,
    cost: number,
    style: string,
}

export interface ITMP {
    city?: string[],
    style?: string[],
}