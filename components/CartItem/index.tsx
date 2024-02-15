import { FC, useState } from "react";
import style from '../../styles/cartItem.module.css'
import Image from "next/image";
import { useCartStore } from "../../app/store/useCartStore";
import { Product } from "../../app/store/useCartStore";

interface ProductCartProps {
    key: string,
    product: Product
}

const CartItem: FC<ProductCartProps> = (props: ProductCartProps) => {
    const removeFromCart = useCartStore(state => state.removeFromCart)
    const incrementQuantity = useCartStore(state => state.increaseQuantity)
    const decrementQuantity = useCartStore(state => state.decreaseQuantity)

    const decreaseQuantity = (number: number) => {
        if (number <= 1) {
            removeFromCart(props.product)
        } else {
            decrementQuantity(props.product)
        }
    }

    return (
        <div className={style.items}>
            <figure>
                <Image alt={props.product.productName} src={props.product.image} width="0" height="0" sizes="100vw" style={{ width: "auto", height: 80 }} />
            </figure>
            <p>{props.product.productName}</p>
            <p className={style.size}>{props.product.size}</p>
            <p>{props.product.color}</p>
            <p>{props.product.price + " €"}</p>
            <div className={style.changequantity}>
                <button className={style.delete}
                    onClick={() => decreaseQuantity(props.product.quantity)}
                >-
                </button>
                <p>{props.product.quantity}</p>
                <button className={style.add}
                    onClick={() => incrementQuantity(props.product)}
                >+
                </button>
            </div>
            <p>{props.product.price * props.product.quantity} €</p>
            <div>
                <button onClick={() => removeFromCart(props.product)} className={style.remove}>
                    <i className="fa-solid fa-trash"></i>
                </button>
            </div>

        </div>
    )
}

export default CartItem