import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <div className="header-content">
                <div className="ad-content">
                    <div className="new-product ads">NEW PRODUCT</div>
                    <div className="product-name">XX99 Mark II</div>
                    <div className="product-name">HEADPHONES</div>
                    <div className="new-product">Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</div>
                    <Link to={"/headphones/xx99-mark-two-headphones"}><button>See Product</button></Link>
                </div>
            </div>
        </header>
    )
}

export default Header;