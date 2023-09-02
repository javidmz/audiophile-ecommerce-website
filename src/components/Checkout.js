import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const Checkout = ({ item, data }) => {
    const [selectedRadio, setSelectedRadio] = useState('online');
    const onlinePayment = useRef();
    const cashPayment = useRef();
    const [total, setTotal] = useState(0);
    const history = useNavigate();

    const LocalString = (num) => {
        return num.toLocaleString("en-US");
    }

    useEffect(() => {

        window.scrollTo(0, 0);

        let totalPrice = 0;
        item.forEach(order => {
            totalPrice += order.quantity * data[order.id - 1].price;
        });
        setTotal(totalPrice);
    }, [item]);
    
    return (
        <div className="checkout-container">
            <div className="go-back" onClick={() => history(-1)}>Go Back</div>
            <form onSubmit={(e) => e.preventDefault()}>
                <div className="form-header">CHECKOUT</div>
                <div className="personal-container">
                    <div>Billing details</div>
                    <div className="personal-content">
                        <div>
                            <label htmlFor="userName">Name</label>
                            <input type="text" id="userName" placeholder="David" autoFocus required autoComplete="off" />
                        </div>
                        <div>
                            <label htmlFor="userEmail">Email Adress</label>
                            <input type="email" id="userEmail" placeholder="david@mail.com" required autoComplete="off" />
                        </div>
                        <div>
                            <label htmlFor="userPhone">Phone Number</label>
                            <input type="tel" id="userPhone" placeholder="+994-55-555-55-55" required autoComplete="off" />
                        </div>
                    </div>
                </div>
                <div className="personal-container">
                    <div>Shipping Info</div>
                    <div className="personal-content">
                        <div className="personal-useradress">
                            <label htmlFor="userAdress">Your Adress</label>
                            <input type="text" id="userAdress" placeholder="27 Tolstoy Avenue" required autoComplete="off" />
                        </div>
                        <div>
                            <label htmlFor="userZip">Zip Code</label>
                            <input type="number" id="userZip" placeholder="2404" required autoComplete="off" />                            
                        </div>
                        <div>
                            <label htmlFor="userCity">Your City</label>
                            <input type="text" id="userCity" placeholder="Paris" required autoComplete="off" />
                        </div>
                        <div>
                            <label htmlFor="userCountry">Your Country</label>
                            <input type="text" id="userCountry" placeholder="France" required autoComplete="off" />
                        </div>
                    </div>
                </div>
                <div className="payment-container">
                    <div className="payment-header">
                        <div>Payment Details</div>
                        <div className="payment-content">
                            <div onClick={() => setSelectedRadio('online')}>
                                <input type="radio" name="payment" value="Online Payment" id="e-Money" ref={onlinePayment} checked={selectedRadio === 'online'} onChange={() => setSelectedRadio('online')} />
                                <label htmlFor="e-Money">Online Payment</label>
                            </div>
                            <div onClick={() => setSelectedRadio('cash')}>
                                <input type="radio" name="payment" value="Cash on Delivery" id="cash" ref={cashPayment} checked={selectedRadio === 'cash'} onChange={() => setSelectedRadio('cash')} />
                                <label htmlFor="cash">Cash on Delivery</label>
                            </div>
                        </div>
                    </div>
                    {selectedRadio === 'online' ?
                        <div className="personal-content">
                            <div>
                                <label htmlFor="cardNumber">Card Number</label>
                                <input type="number" id="cardNumber" placeholder="123456789" required autoComplete="off" />
                            </div>
                            <div>
                                <label htmlFor="cardCVV">Card CVV</label>
                                <input type="password" id="cardCVV" placeholder="123" required autoComplete="off" />
                            </div>
                        </div>
                        : 
                        <div className="cash-content">
                            <img src="../images/checkout/icon-cash-on-delivery.svg" loading="lazy" />
                            <div>
                                The ‘Cash on Delivery’ option enables you to pay in cash when our delivery courier arrives at your residence. Just make sure your address is correct so that your order will not be cancelled.
                            </div>
                        </div>
                    }

                </div>

            </form>
            <div className="summary-container">
                <div className="summary-header">SUMMARY</div>
                <div className="summary-content">
                    { item.length !== 0 ?
                        item.map((it, index) => {
                        return (
                            <div key={index} className="summary-order">
                                <div>
                                    <img src={data[it.id - 1].cartImage} alt="cart" />
                                    <div className="summary-payment-details">
                                        <div>{data[it.id - 1].shortName}</div>
                                        <div className="summary-price">$ {LocalString(data[it.id - 1].price)}</div>
                                    </div>
                                </div>
                                <div className="summary-quantity">x{it.quantity}</div>
                            </div>
                        )
                    }) : 
                        <div className="summary-empty">
                            No items in cart
                        </div>
                    }
                </div>
                <div className="summary-footer">
                    <div className="summary-general-payment">
                        <div>
                            <div>TOTAL</div>
                            <div>$ {LocalString(total)}</div>
                        </div>
                        <div>
                            <div>SHIPPING</div>
                            <div>$ {LocalString('50')}</div>
                        </div>
                        <div>
                            <div>VAT (INCLUDED)</div>
                            <div>$ {LocalString(total * 0.2)}</div>
                        </div>
                    </div>
                    <div className="summary-grand-total">
                        <div>GRAND TOTAL</div>
                        <div>$ {LocalString(total * 1.2 + 50)}</div>
                    </div>
                    <button type="submit" className={total !== 0 ? 'button allowed' : 'button not-allowed'}>CONTINUE & PAY</button>
                </div>
            </div>
        </div>
    )
}

export default Checkout;