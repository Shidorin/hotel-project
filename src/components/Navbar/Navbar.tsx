import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'



export const Navbar = () => {
    const [activeLink, setActiveLink] = useState("home");
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleScroll = () => {
        if (window.scrollY > 800) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };


    const navElements = (
        <div className={`navbar-list ${scrolled ? "scrolled" : ""}`}>
            <header className='nav-title'>
                <Link to='/'
                    className={activeLink === "home" ? "active" : ""}
                    onClick={() => setActiveLink("home")}
                ><h1>Hotello</h1></Link>
            </header>
            <ul >
                <li
                    className={activeLink === "home" ? "active" : ""}
                    onClick={() => setActiveLink("home")}
                ><Link to='/'>Home</Link></li>
                <li
                    className={activeLink === "hotels" ? "active" : ""}
                    onClick={() => setActiveLink("hotels")}
                ><Link to='/hotels'>Hotels</Link></li>
                <li
                    className={activeLink === "events" ? "active" : ""}
                    onClick={() => setActiveLink("events")}
                ><Link to='/events'>Events</Link></li>
                <li
                    className={activeLink === "about" ? "active" : ""}
                    onClick={() => setActiveLink("about")}
                ><Link to='/about'>About</Link></li>
                <li
                    className={activeLink === "contact" ? "active" : ""}
                    onClick={() => setActiveLink("contact")}
                ><Link to='/contact'>Contact</Link></li>
            </ul>
        </div>
    )


    return (
        <nav className='img-div'>
            {navElements}

            <img alt="background" style={{ display: "none" }}
            //  src='./navImg.jpg'
            ></img>
        </nav>
    )
}

