import './HotelList.css'
import { data } from "../data"
import { useEffect, useMemo, useRef, useState } from "react";
import { IHotelCard, IFilter } from "../../interfaces/interfaces";
import { HotelCard } from "./HotelCard/HotelCard";
import { FilterCheckbox } from "./FilterCheckbox";
import { Pagination } from "./Pagination";
import React from 'react';
import { MdFilterAlt, MdClose } from "react-icons/md";

interface IWrapper {
    city: boolean,
}

interface IPagination {
    currentPage: number,
    cardsPerPage: number,
}


interface ITMP {
    city?: string[],
    style?: string[],
}


export const HotelList = () => {


    const [toggleWrapper, setToggleWrapper] = useState<IWrapper>({
        city: false,
    })
    const [hotels, setHotels] = useState<IHotelCard[]>([]);
    const [filterList, setFilterList] = useState<IFilter>({
        city: [],
        style: ["seaside", "mountain", "urban"],
    });
    const [selectedFilter, setSelectedFilter] = useState<ITMP>({
        city: [],
        style: [],
    });
    const [pagination, setPagination] = useState<IPagination>({
        currentPage: 1,
        cardsPerPage: 6,
    })


    const componentRef = useRef<HTMLDivElement>(null);
    let totalCards = useRef(hotels.length);


    const indexOfLast = pagination.currentPage * pagination.cardsPerPage;
    const indexOfFirst = indexOfLast - pagination.cardsPerPage;
    // const currentHotel = hotels.slice(indexOfFirst, indexOfLast);

    useEffect(() => {
        setHotels(data);
    }, [hotels]);

    useEffect(() => {
        //console.log(selectedFilter);
    }, [selectedFilter]);

    // put hotel names as unique values in filterList state
    useMemo(() => {
        let arr: string[] = [];
        let hotelMap = [...new Map(hotels.map(hotel =>
            [hotel.city, hotel])).values()]
        for (let hotel of hotelMap) {
            const newValue: string = hotel.city
            arr.push(newValue)
        }
        setFilterList(prev => ({
            ...prev,
            city: arr
        }));

    }, [hotels]);



    const paginate = (pageNumber: number) => {
        setPagination(prev => ({
            ...prev,
            currentPage: pageNumber,
        }))

        if (componentRef.current) {
            componentRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }

    }


    const filteredHotelsData = useMemo(() => {
        let filteredHotels = hotels;

        if (selectedFilter.city?.length !== 0) {
            filteredHotels = filteredHotels.filter((hotel) => {
                return selectedFilter.city?.includes(hotel.city);
            })
        }


        if (selectedFilter.style?.length !== 0) {
            filteredHotels = filteredHotels.filter((hotel) => {
                return selectedFilter.style?.includes(hotel.style);
            })
        }
        totalCards.current = filteredHotels.length;

        return filteredHotels.slice(indexOfFirst, indexOfLast);
        // eslint-disable-next-line
    }, [selectedFilter, filterList, pagination.currentPage]);

    const hotelCards = filteredHotelsData.map((hotelData, index) =>
        <HotelCard {...hotelData} key={index}></HotelCard>
    )

    const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectValues = Array.from(
            event.target.selectedOptions,
            (option) => option.value
        );
        const selectId = event.target.id as keyof ITMP;

        setSelectedFilter((prevState) => ({
            ...prevState,
            [selectId]: selectValues
        }));
        pagination.currentPage = 1;
    };

    // TSX checkbox
    const selectFiltersTSX = (
        <div className='primary-filters'>
            {Object.entries(filterList).map(([key, value]) => (
                <FilterCheckbox
                    key={key}
                    filterKey={key}
                    filter={value}
                    handleFilterChange={handleFilterChange}
                    value={selectedFilter[key as keyof ITMP]}
                />
            ))}
        </div>
    )

    const handleFilterDelete = (key: string, filterName: string) => {
        setSelectedFilter(prev => ({
            ...prev,
            [key]: prev[key as keyof ITMP]?.filter((item: string) => item !== filterName) ?? []
        }))
    }


    const filterButtonsTSX = (
        <div className='active-filters'>
            <MdFilterAlt style={{ color: "#000", width: "40px", height: "40px", marginLeft: "-.7em" }} />
            {Object.entries(selectedFilter).map(([key, value]) => (
                <React.Fragment key={key} >
                    {value.map((item: string) => (
                        <div
                            key={`filter-${item}`}
                            className='filter'
                            onClick={() => handleFilterDelete(key, item)}
                        >
                            <span
                                key={`label-${item}`}
                                className="filter-label"
                            >
                                {item}
                            </span>
                            <MdClose className='close-icon' />
                        </div>
                    ))}

                </React.Fragment>
            ))}
        </div>
    )

    /* 
        TODO 
        style for select
        url link for pages
    */

    return (
        <main>
            <div className='row' ref={componentRef}>

                <h1>Our hotels</h1>
                {/* <div className="filter-bar">
                    <button
                        onClick={() => setToggleWrapper(prev => ({ ...prev, city: !prev.city }))}
                    >
                        City
                    </button>
                </div> */}
                {selectFiltersTSX}
                {/* {toggleWrapper.city ? selectFiltersTSX : ""} */}
                {(selectedFilter.city?.length || selectedFilter.style?.length) ? (selectedFilter.city!.length > 0 || selectedFilter.style!.length > 0) && filterButtonsTSX : ""}
                <article className="hotel-flex" >
                    {hotelCards}
                </article>
                <Pagination
                    cardPerPage={pagination.cardsPerPage}
                    totalCards={totalCards.current}
                    currentPage={pagination.currentPage}
                    paginate={paginate}
                />
            </div>
        </main>
    )
};
