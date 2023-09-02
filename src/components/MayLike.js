import { Link } from "react-router-dom";

const MayLike = ({ props }) => {

    const scrollTop = () => {
        window.scrollTo(0, 0);
    }

    return (
        <div className="may-like">
            <div className="may-like-header">YOU MAY ALSO LIKE</div>
            <div className="may-like-content">
                <div>
                    <picture>
                        <source media="(min-width: 961px)" srcSet={props[0].image.desktop} />
                        <source media="(min-width: 769px)" srcSet={props[0].image.tablet} />
                        <img src={props[0].image.mobile} alt="offer image" loading="lazy" />
                    </picture>
                    <div>{props[0].name.toUpperCase()}</div>
                    <Link to={`/${props[0].slug}`}><button onClick={scrollTop}>SEE PRODUCT</button></Link>
                </div>
                <div>
                    <picture>
                        <source media="(min-width: 961px)" srcSet={props[1].image.desktop} />
                        <source media="(min-width: 769px)" srcSet={props[1].image.tablet} />
                        <img src={props[1].image.mobile} alt="offer image" loading="lazy" />
                    </picture>
                    <div>{props[1].name.toUpperCase()}</div>
                    <Link to={`/${props[1].slug}`}><button onClick={scrollTop}>SEE PRODUCT</button></Link>
                </div>
                <div>
                    <picture>
                        <source media="(min-width: 961px)" srcSet={props[2].image.desktop} />
                        <source media="(min-width: 769px)" srcSet={props[2].image.tablet} />
                        <img src={props[2].image.mobile} alt="offer image" loading="lazy" />
                    </picture>
                    <div>{props[2].name.toUpperCase()}</div>
                    <Link to={`/${props[2].slug}`}><button onClick={scrollTop}>SEE PRODUCT</button></Link>
                </div>
            </div>
        </div>
    )
}

export default MayLike;