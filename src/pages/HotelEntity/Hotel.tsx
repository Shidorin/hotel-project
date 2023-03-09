import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { IHotelCard } from "../../interfaces/interfaces";
import "./hotelEntity.css"
import { data } from "../../components/data";
import { textLorem } from "../../features/lorem";
import { ReserveRow } from "../../components/ReserveRow/ReserveRow";

const emptyHotelData: IHotelCard = {
    img: '',
    name: '',
    city: '',
    cost: 0,
    style: '',
};

export const Hotel = () => {
    const [hotelData, setHotelData] = useState<IHotelCard>(emptyHotelData)
    const { hotelName } = useParams();

    useEffect(() => {
        const fetchedHotel: IHotelCard = data.find(hotel => hotel.name === hotelName) || emptyHotelData;
        setHotelData(fetchedHotel);
    }, [hotelName]);


    const hotelHeaderTSX = (
        <div className="intro-header">
            <div className="hotel-header">
                <h1>{hotelData.name.toUpperCase()}, {hotelData.city.toUpperCase()}</h1>
                <p>{textLorem.slice(0, textLorem.length / 3)}</p>
            </div>
            <div className="hotel-info">
                <p>{textLorem}</p>
            </div>
        </div>
    )

    return (
        <>
            <ReserveRow
                hotelName={hotelName}
            />
            <main>
                <div className='row'>
                    {hotelHeaderTSX}
                </div>
            </main>
        </>
    )
}