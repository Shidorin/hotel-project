import { Link } from 'react-router-dom';
import './HotelCard.css'

interface IHotelCard {
    img: string,
    name: string,
    city: string,
    cost: number,
}


export const HotelCard = (hotelData: IHotelCard, key: number) => {
    return (
        <div className='hotel-card'>
            <div className="image-frag">
                <h5>{hotelData.name}</h5>
                <h5>{hotelData.city}</h5>
                <img src={hotelData.img} alt="hotel image" />
            </div>
            <div className="box-frag">
                {/* <Link to="/" > */}
                <div>
                    <p>Night from</p>
                    <p>${hotelData.cost}</p>
                </div>
                <p style={{ margin: "1rem 2rem 1rem auto" }}>BOOK</p>
                {/* </Link> */}
            </div>
        </div>
    )
};
