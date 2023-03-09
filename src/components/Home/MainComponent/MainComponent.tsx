import { textLorem } from "../../../features/lorem"
import { CardCarousel } from "../../../pages/CardCarousel"
import { Container } from "../Container/Container"






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
                            margin: "30px 0 30px 0"
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


