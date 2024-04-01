import { FC } from "react";
import style from '../../styles/billingAddress.module.css'

interface BillingAddressProps { }

interface BillingAddress {
    name: string
    surname: string
    address: string
    zipCode: string
    city: string
    town: string
    country: string
    phone: string
}

const billingAddress: BillingAddress = {
    name: "John",
    surname: "Smith",
    address: "123 street",
    zipCode: "123456",
    city: "tralala",
    town: "trololo",
    country: "United States",
    phone: "12345678"
}

const BillingAddress: FC<BillingAddressProps> = () => {
    const changeBillingAddress = () => {
        alert('change billing address')
    }
    return (
        <div className={style.billing}>
            <h4>Billing Address</h4>
            <p>{billingAddress.name} {billingAddress.surname}</p>
            <p>{billingAddress.address}</p>
            <p>{billingAddress.zipCode},{billingAddress.city}</p>
            <p>{billingAddress.town}</p><p>{billingAddress.country}</p>
            <p>{billingAddress.phone}</p>
            <button type="submit" onClick={changeBillingAddress}>Modify</button>
        </div>
    )
}

export default BillingAddress