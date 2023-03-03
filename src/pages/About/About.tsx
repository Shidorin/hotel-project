import { Container } from "../../components/Home/Container/Container"
import './about.css'

const textLorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."



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

