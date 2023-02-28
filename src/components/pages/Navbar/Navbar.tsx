import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css'
import { MdClose } from "react-icons/md"
import { FiMenu } from "react-icons/fi"

interface ILinks {
    "id": number,
    "path": string,
    "text": string
}

export const Navbar = () => {
    const [activeLink, setActiveLink] = useState("home");
    const [scrolled, setScrolled] = useState(false);
    const [isBurgerOpen, setOpenBurger] = useState(false);
    const [links] = useState<ILinks[]>([
        {
            id: 1,
            path: "/",
            text: "Home",
        },
        {
            id: 2,
            path: "/hotels",
            text: "Hotels",
        },
        {
            id: 3,
            path: "/events",
            text: "Events",
        },
        {
            id: 4,
            path: "/about",
            text: "About",
        },
        {
            id: 5,
            path: "/contact",
            text: "Contact",
        },
    ])

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

    const handleBurger = () => {
        setOpenBurger(prev => !prev)
    }

    const closeBurger = () => {
        setOpenBurger(false)
    }

    const navElements = (
        <div className={`navbar-list ${scrolled ? "scrolled" : ""}`}>
            <header className='nav-title'>
                <Link to='/'
                    className={activeLink === "home" ? "active" : ""}
                    onClick={() => setActiveLink("home")}
                ><h1>Hotel</h1></Link>
            </header>
            <ul >
                {links.map(link => (
                    <li
                        key={link.id}
                        className=''>
                        <NavLink
                            to={link.path} end
                            className={({ isActive }) =>
                                isActive ? "active" : undefined
                            }
                            onClick={() => closeBurger()}
                        >
                            {link.text}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </div>
    )

    const navBurger = (
        <ul className={`menuNav ${isBurgerOpen ? " showMenu" : ""}`}>
            {links.map(link => (
                <li
                    key={link.id}
                    className=''>
                    <NavLink
                        to={link.path} end
                        className={({ isActive }) =>
                            isActive ? "active" : undefined
                        }
                        onClick={() => closeBurger()}
                    >
                        {link.text}
                    </NavLink>
                </li>
            ))}
        </ul>
    )


    return (
        <nav className='img-div'>
            <div className='burger-nav'>
                <button className='burger-button' onClick={handleBurger}>
                    {isBurgerOpen ? (
                        <MdClose style={{ color: "#fff", width: "40px", height: "40px" }} />
                    ) : (
                        <FiMenu style={{ color: "white", width: "40px", height: "40px" }} />
                    )}
                    <div className={isBurgerOpen ? 'burger-lines active' : 'burger-lines'} />
                </button>
            </div>
            {navElements}
            {navBurger}
        </nav>
    )
}

