
import "../components/CardCarousel/CardCarousel.css"
import { CardContainer } from "../components/CardCarousel/CardContainer";
import { textLorem } from "../features/lorem";


interface ICardContainer {
    "title"?: string,
}


export const CardCarousel = ({ title }: ICardContainer) => {

    const cardList = (
        <ul className="card-list">
            <li><CardContainer
                title="Beach & Seaside"
                text={textLorem.slice(0, 123)}
                link="/hotels?style=seaside"
                imgsrc="https://www.jetstar.com/_/media/inspiration-hub/article-images/19may/japan-okinawa-luxury-hotels/japan_okinawa_halekulani_hero.jpg?rev=cd4027c705b14bb9af7c0b41146384e4&w=1050&rc=1&cw=1050&ch=590&cx=55&cy=0&hash=5F54CA8B99E5E3A32B9EF9C56262F7244D0F5E33"
                alt=""
            /></li>
            <li><CardContainer
                title="Mountain & Countryside"
                text={textLorem.slice(0, 123)}
                link="/hotels?style=mountain"
                imgsrc="https://www.touropia.com/gfx/d/amazing-hotels-in-japan/Hakone_Ginyu.jpg"
                alt=""
            /></li>
            <li><CardContainer
                title="Urban"
                text={textLorem.slice(0, 123)}
                link="/hotels?style=urban"
                imgsrc="https://blog.japanwondertravel.com/wp-content/uploads/2020/03/shibuya-sky-1200x836.jpg"
                alt=""
            /></li>
        </ul>
    )

    return (
        <section className="carousel-container">
            <div className='row'>

                <h2>{title ? title : "Choose your vacation style"}</h2>
                {cardList}
            </div>
        </section>

    )
}


