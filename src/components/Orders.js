import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { toast } from "react-hot-toast";

const Orders = ({ props, navContainerRef, isVisible, item, setItem, handleInvisible }) => {
    const [orderNum, setOrderNum] = useState(0);
    const [total, setTotal] = useState(0);
    const containerRef = useRef(null);

    const numOrders = () => {
        const num = item.reduce((accumulator, item) => accumulator + item.quantity, 0);
        setOrderNum(num);
    }

    const LocalString = (num) => {
        return num.toLocaleString("en-US");
    }

    const totalPayment = () => {
        let totalPrice = 0;
        item.forEach(order => {
            totalPrice += order.quantity * props[order.id - 1].price;
        });
        setTotal(totalPrice);
    }

    const handleRemoveAll = () => {
        toast.success('Cart is empty');
        setItem([]);
    }

    useEffect(() => {
        numOrders();
        totalPayment();
        localStorage.setItem('orders', JSON.stringify(item));
    }, [item]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if(containerRef.current && !containerRef.current.contains(event.target) && !navContainerRef.current.contains(event.target)) {
                handleInvisible()
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [])

    return (
        <>
            {
                isVisible && 
                <div className="order-box" ref={containerRef}>
                {item.length && orderNum ? 
                    <>
                        <div className="order-box-header">
                            <div className="cart">CART ({orderNum})</div>
                            <div className="remove" onClick={handleRemoveAll}>Remove All</div>
                        </div>
                        <div className="order-box-content">
                            {item.map(order => {
                                return (
                                <div key={order.id} className="order-box-order">
                                    <div className="order-image-container">
                                        <img src={`..${props[order.id - 1].cartImage}`} alt="cartImage" />
                                        <div>
                                            <div>{props[order.id - 1].shortName}</div>
                                            <div>$ {LocalString(props[order.id - 1].price)}</div>
                                        </div>
                                    </div>
                                    <div className="order-buttons">
                                        <button type="button" onClick={() => {
                                            if(order.quantity > 1) {
                                                const newArr = item.map(obj => {
                                                    if(obj.id === order.id) 
                                                        return {
                                                            ...obj, 
                                                            quantity: obj.quantity - 1
                                                        }
                                                    return obj;
                                                })
                                                setItem(newArr);
                                            } else {
                                                let newArr = [...item].filter(o => {
                                                    return (o.id !== order.id)
                                                });
                                                setItem(newArr);
                                            }
                                        }}>-</button>
                                        <div>{order.quantity}</div>
                                        <button type="button" onClick={() => {
                                            let arr = [...item];
                                            arr.filter(o => {
                                                if(o.id === order.id)
                                                    o.quantity++;
                                            });
                                            setItem(arr);
                                        }}>+</button> 
                                    </div>
                                </div> )
                            })}
                        </div>
                        <div className="order-box-footer">
                            <div className="total-payment">
                                <div>Total</div>
                                <div>$ {LocalString(total)}</div>
                            </div>
                            <Link to="/checkout"><button onClick={() => handleInvisible()}>CHECKOUT</button></Link>
                        </div>
                    </> :
                    <div className="order-box-empty">
                        <div>Your cart is empty</div>
                        <FaShoppingCart className="cart-icon" />
                    </div>
                }
            </div>
            }
        </>
    )
}

export default Orders;