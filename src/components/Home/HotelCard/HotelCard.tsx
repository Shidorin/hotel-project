import { Link } from 'react-router-dom';
import './HotelCard.css'
import { IHotelCard } from '../../../interfaces/interfaces';

export const HotelCard = (hotelData: IHotelCard, key: number) => {
    /*
        TODO
        styling box-frag text
        fix min width for cards
    */
    return (
        <div className='hotel-card'>
            <Link to={`/hotel/${hotelData.name}`}>

                <div className='top-card' id='test'>
                    <picture className="image-frag">
                        <img src={hotelData.img} alt="hotel" />
                    </picture>
                    <header className='hotel-card-header'>

                        <h3 className='hotel-card-name'>{hotelData.name.charAt(0).toUpperCase() + hotelData.name.slice(1)}</h3>
                        <h4 className='hotel-card-city'>{hotelData.city}</h4>
                    </header>
                </div>

                <div className="box-frag">
                    <div>
                        <p className='box-frag-name'>Night from</p>
                        <p className='box-frag-cost'>${hotelData.cost}</p>
                    </div>
                    <p className="box-frag-book">BOOK</p>
                </div>
            </Link>
        </div >
    )
};
