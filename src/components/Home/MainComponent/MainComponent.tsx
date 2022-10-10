
import { data } from "../data"
import { useEffect, useState } from "react";
import { IHotelCard, IFilter, ICheckbox } from "../../../interfaces/interfaces";
import { HotelCard } from "../HotelCard/HotelCard";
import { FilterCheckbox } from "./FilterCheckbox";
import { Container } from "../Container/Container";


interface IWrapper {
    city: boolean,
}

export const MainComponent = () => {


    const [toggleWrapper, setToggleWrapper] = useState<IWrapper>({
        city: false,
    })
    const [hotels, setHotels] = useState<IHotelCard[]>([]);
    const [filterList, setFilterList] = useState<IFilter>({
        city: [],
        style: "",
        facilities: "",
        price: undefined,
    });


    useEffect(() => {
        setHotels(data);
    }, [hotels]);

    // put hotel names as unique values in filterList state
    useEffect(() => {
        let arr: Array<ICheckbox> = [];
        let hotelMap = [...new Map(hotels.map(hotel =>
            [hotel.city, hotel])).values()]
        for (let hotel of hotelMap) {
            const newValue: ICheckbox = { id: hotel.city, checked: false }
            arr.push(newValue)
        }
        setFilterList(prev => ({
            ...prev,
            city: arr
        }));
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

    //  TSX filtered hotel cards
    const hotelCards = hotels.filter((hotel, index) => {
        // if every checkbox is not checked
        let tmp = 0;
        for (let inc of filterList.city) if (!inc.checked) tmp += 1;
        if (filterList.city.length === tmp) return hotel;

        for (let inc of filterList.city) {
            if ((inc.checked && inc.id === hotel.city)) return hotel;
        }
        return false;
    }).map((hotelData, index) =>
        <HotelCard {...hotelData} key={index}></HotelCard>
    )

    // handle checkbox
    const onChangeHandler = (
        e: React.ChangeEvent<HTMLInputElement>,
        id: string
    ) => {
        setFilterList(prev => ({
            ...prev,
            city: prev.city.map(
                el => el.id === id ? { ...el, checked: !el.checked } : el
            )
        }));
    };



    // TSX checkbox
    const citySelect = (
        <div style={{ position: "absolute", left: "50%", zIndex: "2" }}>
            <p>sort list</p>
            {filterList.city.map((option, key) => (
                <FilterCheckbox
                    id={option.id}
                    key={key}
                    checked={option.checked}
                    onChange={onChangeHandler}
                />
            ))}
        </div>
    )

    /* 
        TODO 
        button opens modal with checkbox
        for more filter criterias
    */
    return (
        <div className="main-content">
            <header>Hotel list</header>
            <div className="filter-bar">
                <button onClick={() => setToggleWrapper(prev => ({ ...prev, city: !prev.city }))}>City</button>
            </div>

            {toggleWrapper.city ? citySelect : ""}
            <article className="hotel-flex">
                {hotelCards}
            </article>


            <article>
                <Container />
            </article>
        </div>
    )
}