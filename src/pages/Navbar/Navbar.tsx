import { useEffect, useRef, useState } from 'react';
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
    const navRef = useRef<HTMLDivElement | null>(null);
    const burgerRef = useRef<HTMLUListElement | null>(null);

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


    // hide dropdown when outside click
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if ((navRef.current && !(navRef.current as Node).contains(event.target as Node)) && (
                burgerRef.current && !(burgerRef.current as Node).contains(event.target as Node))) {
                closeBurger();
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [navRef]);




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
        <ul ref={burgerRef} className={`menuNav ${isBurgerOpen ? " showMenu" : ""}`}>
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
            <div ref={navRef} className='burger-nav'>
                <button className='burger-button' onClick={handleBurger}>
                    {isBurgerOpen ? (
                        <MdClose style={{ color: "#fff", width: "40px", height: "40px" }} />
                    ) : (
                        <FiMenu style={{ color: "white", width: "40px", height: "40px" }} />
                    )}
                    <div className={isBurgerOpen ? 'burger-lines active' : 'burger-lines'} />
                </button>

                <header className='burger-nav-title'>
                    <Link to='/'
                        className={activeLink === "home" ? "active" : ""}
                        onClick={() => setActiveLink("home")}
                    ><h1>Hotel</h1></Link>
                </header>
            </div>
            {navElements}
            {navBurger}
        </nav>
    )
}

