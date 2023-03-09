import { MdOutlineErrorOutline } from 'react-icons/md'
import { CardCarousel } from '../pages/CardCarousel'
import './errorPage.css'
export function ErrorPage() {

    const errorText = "page could not be found"

    return (
        <div className="row">
            <div className='error-div'>
                <MdOutlineErrorOutline className='icon-large' />
                <h2 
                style={{"fontWeight":"bold"}}
                >{errorText}</h2>
            </div>
            <CardCarousel 
            title='Instead you can explore our destinations'
            />
        </div>
    )
}

