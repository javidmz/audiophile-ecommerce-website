import { useEffect, useState } from "react";
import ImgLeftProduct from "./ImgLeftProduct"
import MayLike from "./MayLike"; 
import { useLocation } from "react-router-dom";
import Ad from "../components/Ad";

const ProductDetailed = ({ props, item, setItem }) => {
    const location = useLocation();
    const [productData, setProductData] = useState('');

    useEffect(() => {

        const IdentifyObj = () => {
            const paths = location.pathname.split('/');
            const lastPart = paths[paths.length - 1];
        
            props.forEach(obj => {
                if(obj.slug === lastPart)
                    setProductData(obj);
            })
        }

        IdentifyObj();
    }, [location]);    

    return (
        <div className="product-detailed">
            {productData ? 
            <>
            <ImgLeftProduct props={productData} item={item} setItem={setItem} flag={1} />
            <div className="product-info-container">
                <div className="features">
                    <div>FEATURES</div>
                    <div>{`${productData.features}`}</div>
                </div>
                <div className="box">
                    <div>IN THE BOX</div>
                    <ol>
                        {productData.includedItems.map(item => {
                            return <li key={item.item}><span>{item.quantity}x</span> {item.item}</li>
                        })}
                    </ol>
                </div>
            </div>
            <div className="product-image-container">
                <picture>
                    <source media="(min-width: 961px)" srcSet={`..${productData.gallery.first.desktop}`} />
                    <source media="(min-width: 761px)" srcSet={`..${productData.gallery.first.tablet}`} />
                    <img src={`..${productData.gallery.first.mobile}`} alt="Gallery first image" />
                </picture>
                <picture>
                    <source media="(min-width: 961px)" srcSet={`..${productData.gallery.second.desktop}`} />
                    <source media="(min-width: 761px)" srcSet={`..${productData.gallery.second.tablet}`} />
                    <img src={`..${productData.gallery.second.mobile}`} alt="Gallery second image" />
                </picture>
                <picture>
                    <source media="(min-width: 961px)" srcSet={`..${productData.gallery.third.desktop}`} />
                    <source media="(min-width: 761px)" srcSet={`..${productData.gallery.third.tablet}`} />
                    <img src={`..${productData.gallery.third.mobile}`} alt="Gallery third image" />
                </picture>
            </div>
            <MayLike props={productData.others} />
            <Ad />
            </> : ''}
        </div>
    )
}

export default ProductDetailed;