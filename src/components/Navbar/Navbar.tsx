import { Link } from 'react-router-dom';
import './Navbar.css'



export const Navbar = () => {


    return (
        <nav className='img-div'>
            <ul className='navbar-list'>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/hotels'>Hotels</Link></li>
                <li><Link to='/about'>About</Link></li>
            </ul>
            <header className='nav-title'>
                <h1>HotelName</h1>
            </header>
            <img alt="background image" style={{ display: "none" }}
            //  src='./navImg.jpg'
            ></img>
        </nav>
    )
}

