import { Link } from "react-router-dom";

const ImgRightProduct = ({ props}) => {
    return (
        <div className="category-product right">
            <div className="category-product-content">
                <div>{props.new ? 'NEW PRODUCT' : ''}</div>
                <div>{props.name.toUpperCase()}</div>
                <div>{props.description}</div>
                <Link to={`/${props.category}/${props.slug}`}><button>SEE PRODUCT</button></Link>
            </div>
            <picture>
                <source media="(min-width: 1000px)" srcSet={props.categoryImage.desktop} />
                <source media="(min-width: 481px)" srcSet={props.categoryImage.tablet} />
                <img src={props.categoryImage.mobile} alt="headphone" loading="lazy" />
            </picture>
        </div>
    )
}

export default ImgRightProduct;