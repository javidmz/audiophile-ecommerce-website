import ProductHeader from "./ProductHeader";
import ImgLeftProduct from "./ImgLeftProduct";
import ImgRightProduct from "./ImgRightProduct";
import ContentNav from "./ContentNav";
import Ad from "./Ad";

const Speakers = ({ props, setMobileNav }) => {
    return (
        <div className="product-router">
            <ProductHeader header="SPEAKERS" />
            <ImgLeftProduct props={props[0]} />
            <ImgRightProduct props={props[1]} />
            <ContentNav setMobileNav={setMobileNav} />
            <Ad />
        </div>
    )
}

export default Speakers;