import ProductHeader from "./ProductHeader";
import ImgLeftProduct from "./ImgLeftProduct";
import ContentNav from "./ContentNav";
import Ad from "./Ad";

const EarPhones = ({ props, setMobileNav }) => {
    return (
        <div className="product-router">
            <ProductHeader header="EARPHONES" />
            <ImgLeftProduct props={props[0]} />
            <ContentNav setMobileNav={setMobileNav} />
            <Ad />  
        </div>
    )
}

export default EarPhones;