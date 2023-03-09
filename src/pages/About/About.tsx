import { Container } from "../../components/Home/Container/Container"
import { textLorem } from "../../features/lorem"
import './about.css'



export const About = () => {
    return (
        <div className="row" style={{ marginBottom: "2rem" }}>
            <Container
                title="About hotel"
                text={textLorem}
                img="https://s7d2.scene7.com/is/image/ritzcarlton/50562992-AWD%20-%20Conference%20Center%20-%20Service?$XlargeViewport100pct$"
            />
            <div className="text">
                <p >{textLorem}</p>
                <p>{textLorem}</p>
                <ul>
                    <li>Lorem ipsum dolor sit amet</li>
                    <li>Lorem ipsum dolor sit amet</li>
                    <li>Lorem ipsum dolor sit amet</li>
                </ul>
                <p>{textLorem}</p>
            </div>
        </div >
    )
}

