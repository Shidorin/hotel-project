import './HotelList.css'
import { data } from "../data"
import { useEffect, useMemo, useRef, useState } from "react";
import { IHotelCard, IFilter } from "../../interfaces/interfaces";
import { HotelCard } from "./HotelCard/HotelCard";
import { FilterCheckbox } from "./FilterCheckbox";
import { Pagination } from "./Pagination";


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
        // facilities: ["wat", "xd"],
        // facilities: "",
        // price: undefined,
    });
    const [selectedFilter, setSelectedFilter] = useState<ITMP>({
        city: [],
        style: [],
    });
    const [pagination, setPagination] = useState<IPagination>({
        currentPage: 1,
        cardsPerPage: 6,
    })


    const indexOfLast = pagination.currentPage * pagination.cardsPerPage;
    const indexOfFirst = indexOfLast - pagination.cardsPerPage;
    const currentHotel = hotels.slice(indexOfFirst, indexOfLast);
    let totalCards = useRef(hotels.length);

    useEffect(() => {
        setHotels(data);
    }, [hotels]);

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
            componentRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }

    }


    const filteredHotelsData = useMemo(() => {

        // const filteredHotels = hotels.filter((hotel, index) => {
        //     // if every checkbox is not checked
        //     let tmp = 0;
        //     for (let inc of filterList.city) if (!inc.checked) tmp += 1;
        //     if (filterList.city.length === tmp) return hotel;

        //     for (let inc of filterList.city) {
        //         if ((inc.checked && inc.id === hotel.city)) return hotel;
        //     }
        //     return false;
        // })
        let filteredHotels = hotels;

        if (selectedFilter.city?.length !== 0) {
            // console.log("filtro")

            console.log("test2test")
            filteredHotels = filteredHotels.filter((hotel) => {
                return selectedFilter.city?.includes(hotel.city);
            })
        }


        if (selectedFilter.style?.length !== 0) {
            // console.log("filtro")

            console.log("test2test")
            filteredHotels = filteredHotels.filter((hotel) => {
                return selectedFilter.style?.includes(hotel.style);
            })
        }

        // 
        //totalCards = filteredHotels.length;
        totalCards.current = filteredHotels.length;
        return filteredHotels.slice(indexOfFirst, indexOfLast);
        // return hotels.slice(indexOfFirst, indexOfLast);

    }, [selectedFilter, filterList, pagination.currentPage]);

    const hotelCards = filteredHotelsData.map((hotelData, index) =>
        <HotelCard {...hotelData} key={index}></HotelCard>
    )


    // handle checkbox
    // const onChangeHandler = (
    //     e: React.ChangeEvent<HTMLInputElement>,
    //     id: string
    // ) => {
    //     setFilterList(prev => ({
    //         ...prev,
    //         city: prev.city.map(
    //             el => el.id === id ? { ...el, checked: !el.checked } : el
    //         )
    //     }));
    //     setPagination(prev => ({
    //         ...prev,
    //         currentPage: 1,
    //     }));
    // };

    const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        //const selectValue = event.target.value;
        const selectValues = Array.from(
            event.target.selectedOptions,
            (option) => option.value
        );
        const selectId = event.target.id as keyof ITMP;
        // setSelectedFilter((prevState) => ({
        //     ...prevState,
        //     [selectId]: [...(prevState[selectId] || []), selectValue]
        // }));
        setSelectedFilter((prevState) => ({
            ...prevState,
            [selectId]: selectValues
        }));
        pagination.currentPage = 1;
    };

    // TSX checkbox
    const selectFiltersTSX = (
        <div className='filters'>
            {Object.entries(filterList).map(([key, value]) => (
                <FilterCheckbox
                    key={key}
                    filterKey={key}
                    filter={value}
                    handleFilterChange={handleFilterChange}
                />
            ))}
            {/* <FilterCheckbox
                key={1}
                filterKey={"style"}
                filter={filterList.style}
                value={selectedFilter.style}
                handleFilterChange={handleFilterChange}
            />
            <FilterCheckbox
                key={2}
                filterKey={"city"}
                filter={filterList.city}
                value={selectedFilter.city}
                handleFilterChange={handleFilterChange}
            /> */}
        </div>
    )

    const componentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        console.log("selectedFilter")
        console.log(selectedFilter)
    }, [selectedFilter]);


    useEffect(() => {
        // console.log("totalCards")
        // console.log(totalCards.current)
        // console.log("curr")
        // console.log(pagination.currentPage)
    }, [totalCards.current]);

    /* 
        TODO 
        button opens modal with checkbox
        for more filter criterias
        pagination styling
        pagination with filter correct page
        url link for pages
    */

    return (
        <main>
            <div className='row' ref={componentRef}>

                <h1>Our hotels</h1>
                <div className="filter-bar">
                    <button
                        onClick={() => setToggleWrapper(prev => ({ ...prev, city: !prev.city }))}
                    >
                        City
                    </button>
                </div>

                {toggleWrapper.city ? selectFiltersTSX : ""}
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
