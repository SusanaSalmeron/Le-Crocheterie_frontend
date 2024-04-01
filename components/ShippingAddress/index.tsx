import { FC } from "react";
import style from '../../styles/shippingAddress.module.css'

interface ShippingAddressProps { }

interface ShippingAddress {
    name: string
    surname: string
    address: string
    zipCode: string
    city: string
    town: string
    country: string
    phone: string
}

const shippingAddress: ShippingAddress = {
    name: "John",
    surname: "Smith",
    address: "123 street",
    zipCode: "123456",
    city: "tralala",
    town: "trololo",
    country: "United States",
    phone: "12345678"
}

const ShippingAddress: FC<ShippingAddressProps> = () => {
    const changeShippingAddress = () => {
        alert('change shipping address')
    }
    return (
        <div className={style.shipping}>
            <h4>Shipping Address</h4>
            <p>{shippingAddress.name} {shippingAddress.surname}</p>
            <p>{shippingAddress.address}</p>
            <p>{shippingAddress.zipCode}, {shippingAddress.city}</p>
            <p>{shippingAddress.town}</p>
            <p>{shippingAddress.country}</p>
            <p>{shippingAddress.phone}</p>
            <button type="submit" onClick={changeShippingAddress}>Modify</button>
        </div>
    )
}

export default ShippingAddress