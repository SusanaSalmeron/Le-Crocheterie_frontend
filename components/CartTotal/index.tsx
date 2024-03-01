import { FC } from "react";
import style from '../../styles/cartTotal.module.css';
import { useCartStore } from "../../app/store/useCartStore";

interface CartTotalProps { }

const CartTotal: FC<CartTotalProps> = () => {
    const totalAmountInCart = useCartStore(state => state.totalPrice)
    const shipping = useCartStore(state => state.shipping)
    const wrapping = useCartStore(state => state.wrapping)

    return (
        <>
            <div className={style.total}>
                <div className={style.subtotal}>
                    SUBTOTAL
                    <span>
                        {totalAmountInCart} €
                    </span>
                </div>
                <div className={style.shipping}>
                    {totalAmountInCart < 60 ? <p>Shipping <span>{shipping} €</span></p> : <p>FREE SHIPPING</p>}
                </div>
                <div className={style.gift}>
                    {wrapping === 5 ? <p>Wrapping <span>{wrapping} €</span></p> : null}
                </div>
                <div className={style.amount}>
                    TOTAL
                    <span>
                        {totalAmountInCart + shipping + wrapping} €
                    </span>
                </div>
                <div className={style.info}>
                    {60 - totalAmountInCart <= 0 ? <p><span>Hooray!</span> Your order qualifies for free shipping</p> : <p>You're<span>{60 - totalAmountInCart}€</span> away from free shipping!</p>}
                </div>
            </div>
        </>
    )
}

export default CartTotal