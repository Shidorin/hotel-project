import { Link } from "react-router-dom"
import "./CardCarousel.css"


interface ICardContainer {
    "title": string,
    "text": string,
    "link": string,
    "imgsrc": string,
    "alt": string,
}

export const CardContainer = ({ title, text, link, imgsrc, alt }: ICardContainer) => {

    return (


        <div className="carousel-child">

            <picture>
                <img src={imgsrc} alt={alt} loading="lazy" />
            </picture>
            <div className="card-body">
                <h3>{title}</h3>
                <p>{text}</p>
                <Link to={link}>EXPLORE DESTINATIONS</Link>
            </div>
        </div>

    )
}

