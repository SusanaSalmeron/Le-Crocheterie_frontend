import React, { FC } from "react";
import Image from "next/image";
import style from '../../styles/emptyCart.module.css'

interface EmptyCartProps { }

const EmptyCart: FC<EmptyCartProps> = () => {
    return (
        <div className={style.container}>
            <div className={style.image}>
                <Image
                    src="/emptyCart.png"
                    alt="Empty Cart"
                    width="0"
                    height="0"
                    sizes="100vw"
                    style={{ width: "35%", height: "auto" }}
                />
            </div>

            <div className={style.message}>
                <h3>Your cart is empty</h3>
                <h4>Looks like you haven't made your choice yet...</h4>
            </div>
        </div>
    )
}

export default EmptyCart
