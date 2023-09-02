import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const ImgLeftProduct = ({ props, item, setItem, flag = 0 }) => {
    const location = useLocation();
    const [count, setCount] = useState(1);
    const history = useNavigate();

    const LocalString = (num) => {
        return num.toLocaleString("en-US");
    }

    const notify = () => toast.success(`Item ${props.name} was added to cart`);

    const addToCart = () => {
        let check = 0;
        item.forEach(el => {
            if(el.id === props.id) {
                el.quantity += count;
                setItem([...item]);
                check++;
            }
        });
        if(!check) {
            const order = {
                id: props.id,
                quantity: count
            }
            setItem([...item, order]);    
        }
    }

    useEffect(() => setCount(1), [location]);

    return (
        <div className={flag === 0 ? 'category-product' : 'category-product active'}>
            {flag !== 0 ? <div className="go-back" onClick={() => history(-1)}>Go Back</div> : ''}
            {flag == 0 
                ?
                    <picture>
                        <source media="(min-width: 961px)" srcSet={props.categoryImage.desktop} />
                        <source media="(min-width: 481px)" srcSet={props.categoryImage.tablet} />
                        <img src={props.categoryImage.mobile} alt="headphone" loading="lazy" />
                    </picture>
                :
                    <picture>
                        <source media="(min-width: 1000px)" srcSet={props.image.desktop} />
                        <source media="(min-width: 481px)" srcSet={props.image.tablet} />
                        <img src={props.image.mobile} alt="headphone" loading="lazy" />
                    </picture>
            }
            <div className="category-product-content">
                <div>{props.new ? 'NEW PRODUCT' : ''}</div>
                <div>{props.name.toUpperCase()}</div>
                <div>{props.description}</div>
                {flag === 0 ? <Link to={`/${props.category}/${props.slug}`}><button>SEE PRODUCT</button></Link> : 
                    <div className="order-content">
                        <div className="order-price">$ {LocalString(props.price)}</div>
                        <div className="order-check">
                            <div className="order-count">
                                <button type="button" onClick={() => (count > 1) ? setCount(count - 1) : ''}>-</button>
                                <div>{count}</div>
                                <button type="button" onClick={() => setCount(count + 1)}>+</button> 
                            </div>
                            <button onClick={() => { addToCart(); notify(); }}>ADD TO CART</button>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default ImgLeftProduct;