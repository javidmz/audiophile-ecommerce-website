import { Link } from "react-router-dom";
import Aos from "aos";
import { useEffect } from "react";

const Products = () => {

    useEffect(() => {
        Aos.init();
    })

    return (
        <div className="product-container">
            <div className="product first">
                <picture data-aos="fade-right">
                    <source media="(min-width: 961px)" srcSet="../images/home/desktop/image-speaker-zx9.png" />
                    <source media="(min-width: 481px)" srcSet="../images/home/tablet/image-speaker-zx9.png" />
                    <img src="../images/home/mobile/image-speaker-zx9.png" alt="Responsive Image" loading="lazy" />
                </picture>
                <div className="product-content">
                    <div className="product-content-header" data-aos="fade-down ">
                        <div>ZX9 SPEAKER</div>
                    </div>
                    <p className="product-content-main" data-aos="fade-left">Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
                    <Link to="/speakers/zx9-speaker" data-aos="fade-up">SEE PRODUCT</Link>
                </div>                
            </div>
            <div className="product second">
                <picture data-aos="fade-left">
                    <source media="(min-width: 961px)" srcSet="../images/home/desktop/image-speaker-zx7.jpg" />
                    <source media="(min-width: 481px)" srcSet="../images/home/tablet/image-speaker-zx7.jpg" />
                    <img src="../images/home/mobile/image-speaker-zx7.jpg" alt="Responsive Image" loading="lazy"/>
                </picture>
                <div className="product-content" data-aos="fade-left">
                    <div data-aos="fade-down">ZX7 SPEAKER</div>
                    <Link to="/speakers/zx7-speaker" data-aos="fade-up">SEE PRODUCT</Link>
                </div>
            </div>
            <div className="product third">
                <picture>
                    <source media="(min-width: 961px)" srcSet="../images/home/desktop/image-earphones-yx1.jpg" />
                    <source media="(min-width: 481px)" srcSet="../images/home/tablet/image-earphones-yx1.jpg" />
                    <img src="../images/home/mobile/image-earphones-yx1.jpg" alt="earphones" data-aos="fade-right" loading="lazy"/>
                </picture>
                <div className="product-content">
                    <div data-aos="fade-down">YX1 EARPHONES</div>
                    <Link to="/earphones/yx1-earphones" data-aos="fade-up">SEE PRODUCT</Link>
                </div>
            </div>
        </div>
    )
}

export default Products;