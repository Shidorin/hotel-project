import './Container.css'

interface IContainer {
    title: string;
    text: string;
    img: string
}


export function Container({ title, text, img }: IContainer) {
    return (
        <div className='row'>
            <div className="container-flexbox">
                <div className="container-text">
                    <h4>{title}</h4>
                    <p>{text}</p>
                </div>
                <div>

                    <img
                        className="container-image"
                        src={img ? img : "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/hoshinoya-kyoto-floating-tearoom-3-1549906559.jpg"}
                        alt="alt tmp"
                        loading='lazy'
                    />
                </div>

            </div>
        </div>
    );
}
