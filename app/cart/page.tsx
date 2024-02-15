"use client"

import { FC, useState } from "react";
import MainLayout from "../../components/mainLayout";
import style from '../../styles/shoppingCart.module.css';
import CartItem from "../../components/CartItem";
import { useCartStore } from "../store/useCartStore";



interface ShoppingCartProps { }

const ShoppingCart: FC<ShoppingCartProps> = () => {
    const cart = useCartStore(state => state.cart)
    const totalItemsInCart = useCartStore(state => state.totalItems)
    const totalAmountInCart = useCartStore(state => state.totalPrice)
    const giftWrap: number = 5
    const [checked, setchecked] = useState<boolean>(false)
    console.log(cart)


    return (
        <MainLayout>
            {!cart.length ? <h3>Your cart is empty</h3> :
                <div className={style.container}>
                    <h1>My Shopping Bag</h1>
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

                    <div className={style.total}>
                        <div>TOTAL ITEMS:  {totalItemsInCart}
                        </div>
                        <div>TOTAL AMOUNT:  {totalAmountInCart} €
                        </div>
                    </div>

                </div>}

        </MainLayout>
    )

}


export default ShoppingCart