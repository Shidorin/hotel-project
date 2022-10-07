import { useEffect, useState } from "react";
import { HotelCard } from "../HotelCard/HotelCard";
import './Home.css'
import { data } from "./data"

interface Ifilter {
    city: string,
    style: string,
    facilities: string,
    price: "asc" | "dsc"
}

interface IHotelCard {
    img: string,
    name: string,
    city: string,
    cost: number,
}

export const Home = () => {
    const [filterList, setFilterList] = useState<Ifilter>();
    const [hotels, setHotels] = useState<IHotelCard[]>([]);

    useEffect(() => {
        setHotels(data);
    }, [hotels]);


    const hotelCards = hotels.map((hotelData, index) =>
        <HotelCard {...hotelData} key={index}></HotelCard>
    )

    return (
        <main>
            <header>Hotel list</header>
            <div><p>sort list</p></div>

            <article className="hotel-flex">
                {hotelCards}
            </article>

        </main>
    )
};
