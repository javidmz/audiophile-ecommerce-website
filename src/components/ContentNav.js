import { Link } from "react-router-dom";

const ContentNav = ({ setMobileNav }) => {

    const scrollToTop = () => {
        window.scrollTo(0, 0)
    }

    return (
        <div className="content-nav-container">
            <div className="content-nav">
                <img src="../images/shared/desktop/image-headphones.png" alt="Headphones" />
                <div className="content-nav-box">
                    <div>HEADPHONES</div>
                    <Link to={"/headphones"} className="nav-box-shop" onClick={() => {setMobileNav(false); scrollToTop() }}>See...</Link>
                </div>
            </div>
            <div className="content-nav">
                <img src="../images/shared/desktop/image-speakers.png" alt="Speakers" />
                <div className="content-nav-box">
                    <div>SPEAKERS</div>
                    <Link to={"/speakers"} className="nav-box-shop" onClick={() => {setMobileNav(false); scrollToTop() }}>See...</Link>
                </div>
            </div>
            <div className="content-nav">
                <img src="../images/shared/desktop/image-earphones.png" alt="Earphones" />
                <div className="content-nav-box">
                    <div>EARPHONES</div>
                    <Link to={"/earphones"} className="nav-box-shop" onClick={() => {setMobileNav(false); scrollToTop() }}>See...</Link>
                </div>
            </div>
        </div>
    )
}

export default ContentNav;