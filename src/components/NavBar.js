import { Link, useLocation } from "react-router-dom"
import { useState, useRef, useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import ContentNav from "../components/ContentNav";
import Orders from "./Orders";

const NavBar = ({ props, item, setItem, isVisible, setIsVisible, mobileNav, setMobileNav }) => {
    const [colored, setColored] = useState('');
    const [size, setSize] = useState(window.outerWidth);
    const location = useLocation();
    const mobileMenu = useRef(null);
    const btnRef = useRef(null);
    const navContainerRef = useRef(null);

    const toggleBodyScroll = () => {
        !isVisible ? document.body.classList.add('no-scroll') : document.body.classList.remove('no-scroll');
    }

    useEffect(() => {

        const handleClickOutside = (event) => {
            if(mobileMenu.current && !mobileMenu.current.contains(event.target) && !btnRef.current.contains(event.target)) {
                setMobileNav(false);
            }
        }

        const updateSize =  () => {
            setSize(window.innerWidth);
            if(window.innerWidth > 769)
                setMobileNav(false);
        }

        document.addEventListener("mousedown", handleClickOutside);

        window.addEventListener('resize', updateSize);
        
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            window.removeEventListener('resize', updateSize);
        }
    }, []);

    useEffect(() => {

        const paths = location.pathname.split('/');
        const lastPart = paths[paths.length - 1];
        setColored(lastPart);

    }, [location]);  

    const scrollToTop = () => {
        window.scrollTo(0, 0)
    }

    const handleInvisible = () => {
        if(isVisible) {
            setIsVisible(false);
            toggleBodyScroll();
        }
    }

    return (
        <>
            <div className="nav-container" ref={navContainerRef}>
                <nav>
                    { size < 482 
                        ?
                            <>
                                {
                                    !mobileNav 
                                    ?   
                                        <>
                                            <AiOutlineMenu className="hamburger-menu" onClick={() => { handleInvisible(); setMobileNav(true) }} />
                                            <Link to="/" className="nav-header" onClick={() => { handleInvisible(); scrollToTop() }}><img src="../images/shared/desktop/logo.svg" alt="logo" loading="lazy" /></Link>
                                        </>
                                    :
                                        <>
                                            <AiOutlineClose className="hamburger-menu" onClick={() => { handleInvisible(); setMobileNav(true) }} />
                                            <Link to="/" className="nav-header" onClick={() => { handleInvisible(); scrollToTop() }}><img src="../images/shared/desktop/logo.svg" alt="logo" loading="lazy" /></Link>
                                        </>
                                }
                            </>
                        :
                            <>
                                {size < 770
                                    ?
                                        <div>
                                            {!mobileNav 
                                                ?
                                                    <AiOutlineMenu className="hamburger-menu" onClick={() => { handleInvisible(); setMobileNav(true) }} />
                                                :
                                                    <AiOutlineClose className="hamburger-menu" onClick={() => { handleInvisible(); setMobileNav(true) }} />
                                            }
                                            <Link to="/" className="nav-header" onClick={() => { handleInvisible(); scrollToTop() }}><img src="../images/shared/desktop/logo.svg" alt="logo" loading="lazy" /></Link>
                                        </div>
                                    :
                                        <>
                                            <Link to="/" className="nav-header" onClick={() => { handleInvisible(); scrollToTop() }}><img src="../images/shared/desktop/logo.svg" alt="logo" loading="lazy" /></Link>
                                            <ol>
                                                <li>
                                                    <Link to="/" onClick={() => { handleInvisible(); scrollToTop() }} className={colored === '' ? 'active' : ''}>HOME</Link>
                                                </li>
                                                <li>
                                                    <Link to="/headphones" onClick={() => { handleInvisible(); scrollToTop() }} className={colored === 'headphones' ? 'active' : ''}>HEADPHONES</Link>
                                                </li>
                                                <li>
                                                    <Link to="/speakers" onClick={() => { handleInvisible(); scrollToTop() }} className={colored === 'speakers' ? 'active' : ''}>SPEAKERS</Link>
                                                </li>
                                                <li>
                                                    <Link to="/earphones" onClick={() => { handleInvisible(); scrollToTop() }} className={colored === 'earphones' ? 'active' : ''}>EARPHONES</Link>
                                                </li>
                                            </ol> 
                                        </>
                                }
                            </>
                    }
                    <div className="main-order-image-container">
                        <img src="../images/shared/desktop/icon-cart.svg" alt="cart" className="shopping-cart" onClick={() => { setMobileNav(false); setIsVisible(!isVisible); toggleBodyScroll()}} ref={btnRef} />
                        {item.length ? <div className="order-quantity">{item.reduce((accumulator, item) => accumulator + item.quantity, 0)}</div> : ''}
                    </div>
                </nav>
            </div>
            <div className='hamburger-container mobile'>
                <div className={mobileNav ? 'hamburger-content active' : 'hamburger-content' } ref={mobileMenu}>
                    <ContentNav setMobileNav={setMobileNav} />
                </div>
            </div>
            { isVisible 
                ?
                    <div className="order-box-container active">
                        <Orders props={props} navContainerRef={navContainerRef} isVisible={isVisible} item={item} setItem={setItem} handleInvisible={handleInvisible} />
                    </div>
                :
                    ''
            }
        </>
    )
}

export default NavBar;