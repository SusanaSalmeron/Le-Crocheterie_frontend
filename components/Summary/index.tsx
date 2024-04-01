import { FC } from "react";
import style from '../../styles/summary.module.css'
import { useCartStore } from "../../app/store/useCartStore";

interface SummaryProps { }

const Summary: FC<SummaryProps> = () => {
    const totalProducts = useCartStore(state => state.totalItems)
    const subtotal = useCartStore(state => state.totalPrice)
    const wrapping = useCartStore(state => state.wrapping)

    const submitPayment = () => {
        alert("Payment")
    }

    return (
        <div className={style.summary}>
            <h3>Order Summary</h3>
            <h4>{totalProducts} Products</h4>
            <p>Subtotal <span>{subtotal} €</span></p>
            <p>Shipping <span>Free</span></p>
            <p>Gift wrapping <span>5€</span></p>
            <p>Total <span>{subtotal + wrapping} €</span></p>
            <button type="submit" onClick={submitPayment}>Pay</button>
        </div>
    )
}

export default Summary