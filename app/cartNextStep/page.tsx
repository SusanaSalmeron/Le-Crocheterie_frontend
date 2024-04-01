'use client'

import { FC } from "react";
import style from '../../styles/cartNextStep.module.css'
import MainLayout from "../../components/mainLayout";
import BillingAddress from "../../components/BillingAddress";
import ShippingAddress from "../../components/ShippingAddress";
import Payment from "../../components/Payment";
import Summary from "../../components/Summary";



interface CartNextStepProps { }

const CartNextStep: FC<CartNextStepProps> = () => {
    return (
        <MainLayout>
            <div className={style.container}>
                <div className={style.addresses}>
                    <BillingAddress />
                    <ShippingAddress />
                    <Payment />
                </div>
                <div className={style.summary}>
                    <Summary />
                </div>
            </div>
        </MainLayout>
    )
}

export default CartNextStep