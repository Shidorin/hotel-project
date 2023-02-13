import { CardContainer } from "./CardContainer"
import "./CardCarousel.css"

export const CardCarousel = () => {


    const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
    const cardList = (
        <ul className="card-list">
            <li><CardContainer
                title="Beach & Seaside"
                text={lorem}
                link="link1"
                imgsrc="https://www.jetstar.com/_/media/inspiration-hub/article-images/19may/japan-okinawa-luxury-hotels/japan_okinawa_halekulani_hero.jpg?rev=cd4027c705b14bb9af7c0b41146384e4&w=1050&rc=1&cw=1050&ch=590&cx=55&cy=0&hash=5F54CA8B99E5E3A32B9EF9C56262F7244D0F5E33"
                alt=""
            /></li>
            <li><CardContainer
                title="Mountain & Countryside"
                text={lorem}
                link="link2"
                imgsrc="https://www.touropia.com/gfx/d/amazing-hotels-in-japan/Hakone_Ginyu.jpg"
                alt=""
            /></li>
            <li><CardContainer
                title="Urban"
                text={lorem}
                link="link3"
                imgsrc="https://blog.japanwondertravel.com/wp-content/uploads/2020/03/shibuya-sky-1200x836.jpg"
                alt=""
            /></li>
        </ul>
    )

    return (
        <div className='row'>

            <section className="carousel-container" style={{ textAlign: "center" }}>
                <h2> Choose your vacation style</h2>
                {cardList}
            </section>
        </div>

    )
}


