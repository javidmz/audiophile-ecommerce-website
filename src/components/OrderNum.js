import { useState } from "react"

const OrderNum = ({ quantity }) => {
    const [count, setCount] = useState(quantity)

    return (
        <div className="order-buttons">
            <button type="button" onClick={() => (count > 1) ? setCount(count - 1) : ''}>-</button>
            <div>{count}</div>
            <button type="button" onClick={() => setCount(count + 1)}>+</button> 
         </div>
    )
}

export default OrderNum;