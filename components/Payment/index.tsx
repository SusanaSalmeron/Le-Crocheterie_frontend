import { FC } from "react";
import style from '../../styles/payment.module.css'
import Image from 'next/image'

interface PaymentProps { }

const Payment: FC<PaymentProps> = () => {

    const choosePayment = (e: any) => {
        if (e.target.alt === "paypal") {
            alert("paypal")
        }
        if (e.target.alt === "card") {
            alert("credit card")
        }

    }
    return (
        <div className={style.container}>
            <div className={style.code}>
                <label>Do you have a discount code?</label>
                <input></input>
            </div>
            <div className={style.payment}>
                <h4>Payment</h4>
                <div className={style.paypal} onClick={choosePayment} >
                    <Image alt="paypal" src="/paypal.png" width={70} height={70} />
                </div>
                <div className={style.card} onClick={choosePayment}>
                    <Image alt="card" src="/credit-card.png" width={50} height={50} />
                </div>
            </div>
        </div>
    )
}

export default Payment