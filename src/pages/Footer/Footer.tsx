import { Link } from 'react-router-dom';
import { IoLogoTwitter, IoLogoYoutube, IoLogoFacebook } from 'react-icons/io'
import './Footer.css'

export const Footer = () => {

    const footerList = (
        <div className='footer-links'>
            <ul>
                <li><Link to='/contact'>Contact us</Link></li>
                <li><Link to='/event'>Plan your event</Link></li>
            </ul>
        </div>
    )

    const footerSocial = (

        <div className='footer-social'>
            <span>Find us on:</span>
            <div className='footer-social-links'>

                <Link to=''>

                    <IoLogoTwitter
                        className='icon'
                    />
                </Link>
                <Link to=''>
                    <IoLogoYoutube
                        className='icon'
                    />
                </Link>
                <Link to='' target="_blank">
                    <IoLogoFacebook
                        className='icon'
                    />
                </Link>
            </div>
        </div>

    )

    return (
        <footer>
            <div className='row'>
                {footerList}
                {footerSocial}
            </div>
            <div className="row">
                <span>hotel copyright</span>
            </div>
        </footer>
    );
}