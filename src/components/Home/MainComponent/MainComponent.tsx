
import { data } from "../data"
import { FormEvent, useEffect, useState } from "react";
import { IHotelCard, IFilter } from "../../../interfaces/interfaces";
import { HotelCard } from "../HotelCard/HotelCard";


interface IWrapper {
    city: boolean,
}

export const MainComponent = () => {


    const [toggleWrapper, setToggleWrapper] = useState<IWrapper>({
        city: false,
    })
    const [hotels, setHotels] = useState<IHotelCard[]>([]);
    const [filterList, setFilterList] = useState<IFilter>({
        city: "",
        style: "",
        facilities: "",
        price: undefined,
    });

    useEffect(() => {
        setHotels(data);
    }, [hotels]);


    /*
        old select

    const formfnc = (e: FormEvent<HTMLSelectElement>) => {
        const formValue = e.currentTarget.value;
        const formId = e.currentTarget.id;
        setFilterList(prev => ({
            ...prev,
            [formId]: formValue,
        }))
    }
    */


    // TSX filtered hotel cards
    const hotelCards = hotels.filter((hotel, index) => {
        if (hotel.city === filterList?.city || filterList?.city === "") return hotel;
        return false;
    }).map((hotelData, index) =>
        <HotelCard {...hotelData} key={index}></HotelCard>
    )


    // unique city values array
    const hotelOptions = [...new Map(hotels.map(hotel =>
        [hotel.city, hotel])).values()];




    /* 
        TODO 
        refactor select to checkbox 
        button opens modal with checkbox
        for more filter criterias
    */
    // TSX selectbox for city
    const citySelect = (
        <div style={{ position: "absolute", left: "50%", zIndex: "2" }}>
            <p>sort list</p>
            {/* <select name="city" id="city" onChange={formfnc} value={filterList.city}> */}
            {hotelOptions.map(option => {
                // return <option value={option.city}>{option.city.charAt(0).toUpperCase() + option.city.slice(1)}</option>
                return <>
                    <input type="checkbox" id={option.city} name={option.city} value={option.city} key={option.city}/>
                    <label htmlFor={option.city}>{option.city.charAt(0).toUpperCase() + option.city.slice(1)}</label>
                </>
            })}
            {/* </select> */}
        </div>
    )


    return (
        <div>
            <header>Hotel list</header>
            <button onClick={() => setToggleWrapper(prev => ({ ...prev, city: !prev.city }))}>City</button>
            {toggleWrapper.city ? citySelect : ""}
            <article className="hotel-flex">
                {hotelCards}
            </article>
        </div>
    )
}