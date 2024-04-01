"use client"

import { FC, useEffect } from "react";
import MainLayout from "../../components/mainLayout";
import style from '../../styles/shoppingCart.module.css';
import CartItem from "../../components/CartItem";
import { useCartStore } from "../store/useCartStore";
import CartTotal from "../../components/CartTotal";
import Link from "next/link";
import EmptyCart from "../emptyCart/page";



interface ShoppingCartProps { }

const ShoppingCart: FC<ShoppingCartProps> = () => {
    const cart = useCartStore(state => state.cart)
    const addWrappingCost = useCartStore(state => state.addWrappingCost)
    const removeWrapCost = useCartStore(state => state.removeWrappingCost)
    const totalItemsInCart = useCartStore(state => state.totalItems)

    const addWrappingPrice = (e: any) => {
        if (e.target.checked) {
            addWrappingCost(cart)
        } else {
            removeWrapCost(cart)
        }
    }

    useEffect(() => {
        if (cart.length === 0) {
            removeWrapCost(cart)
        }
    }, [cart])

    return (
        <MainLayout>
            {!cart.length ? <EmptyCart /> :
                <div className={style.container}>
                    <h1>Your Cart: ({totalItemsInCart} {totalItemsInCart === 1 ? "item" : "items"})</h1>
                    <div className={style.categories}>
                        <div>PRODUCT</div>
                        <div>NAME</div>
                        <div>SIZE</div>
                        <div>COLOR</div>
                        <div>PRICE</div>
                        <div>QUANTITY</div>
                        <div>TOTAL</div>
                    </div>
                    {cart.map((product) => (
                        <CartItem
                            key={product.id.toString() + product.color + product.size} product={product}
                        />
                    ))}
                    <div className={style.wrapping}>
                        <label>
                            Do you want to wrap your order as a gift?
                            <input type="checkbox" name="toggle" onClick={addWrappingPrice} />
                        </label>
                    </div>
                    <CartTotal />
                    <div className={style.next}>
                        <Link href="/cartNextStep">NEXT</Link>
                    </div>
                </div>}
        </MainLayout>
    )
}


export default ShoppingCart