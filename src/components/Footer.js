import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {

    const scrollToTop = () => {
        window.scrollTo(0, 0)
    }


    return (
        <footer>
            <div>
                <div className="footer-header">
                    <Link to="/" className="footer-title" onClick={() => scrollToTop()}><img src="../images/shared/desktop/logo.svg" alt="logo" loading="lazy" /></Link>
                    <ol>
                        <li>
                            <Link to="/" onClick={() => scrollToTop()}>HOME</Link>
                        </li>
                        <li>
                            <Link to="/headphones" onClick={() => scrollToTop()}>HEADPHONES</Link>
                        </li>
                        <li>
                            <Link to="/speakers" onClick={() => scrollToTop()}>SPEAKERS</Link>
                        </li>
                        <li>
                            <Link to="/earphones" onClick={() => scrollToTop()}>EARPHONES</Link>
                        </li>
                    </ol> 
                </div>
                <div className="footer-links">
                    <div className="footer-content">Listener is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.</div>
                    <div className="footer-copyright">&copy; Copyright 2021. All Rights Reserved</div>
                    <div className="footer-media">
                        <FaInstagram className="social-media" />
                        <FaFacebook className="social-media" />
                        <FaTwitter className="social-media" />
                    </div>
                </div>
            </div>
        </footer>
    ) 
}

export default Footer;