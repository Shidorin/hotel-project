

import { CardCarousel } from "../../pages/CardCarousel";
import { Container } from "../Container/Container";


const textLorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."



export const MainComponent = () => {


    return (
        <main>
            <CardCarousel />

            <section>
                <div
                    className="row"
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    }}
                >
                    <h2
                        style={{
                            margin: "90px 0 30px 0"
                        }}
                    >
                        Plan your:
                    </h2>
                </div>
                <Container
                    title="Wedding"
                    text={textLorem}
                    img=""
                />
                <Container
                    title="Meeting"
                    text={textLorem}
                    img=""
                />
                <Container
                    title="Event"
                    text={textLorem}
                    img=""
                />

            </section>

        </main>
    )
}


