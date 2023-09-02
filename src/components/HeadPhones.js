import ProductHeader from "./ProductHeader";
import ImgLeftProduct from "./ImgLeftProduct";
import ImgRightProduct from "./ImgRightProduct";
import ContentNav from "./ContentNav";
import Ad from "./Ad";

const HeadPhones = ({ props, setMobileNav }) => {
    return (
        <div className="product-router">
            <ProductHeader header="HEADPHONES" />
            <ImgLeftProduct props={props[2]} /> 
            <ImgRightProduct props={props[0]} />
            <ImgLeftProduct props={props[1]} />
            <ContentNav setMobileNav={setMobileNav} />
            <Ad />
        </div>
    )
}

export default HeadPhones;