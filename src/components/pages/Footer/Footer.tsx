import { Link } from 'react-router-dom';
import './Footer.css'

export const Footer = () => {

    const footerList = (
        <div className='footer-links'>
            <ul>
                <li><Link to=''>link1</Link></li>
                <li><Link to=''>link2</Link></li>
            </ul>
        </div>
    )

    const footerSocial = (
        <div className='footer-social'>
            <p>social linki</p>
            <p>hotel copyright</p>
            <p>social linki</p>
                <p>hotel copyright</p>
                <p>social linki</p>
        </div>
    )

    return (
        <footer>
            <div className='row'>
                {footerList}
                {footerSocial}
            </div>
        </footer>
    );
}