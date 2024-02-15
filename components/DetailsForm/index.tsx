'use client'
import React, { FC, FormEvent, useEffect, useState } from "react";
import styles from "../../styles/detailsForm.module.css"
import { Formik, Form, Field } from "formik";
import { useRouter } from "next/navigation";
import { useCartStore } from "../../app/store/useCartStore";
import { Product } from "../../app/store/useCartStore";



interface DetailsFormProps {
    id: number,
    colors: string[],
    catalogs: Catalogs,
    productName: string
}

interface InitialValues {
    colors: string[];
    sizes: string[];
    price: number
}

interface Catalogs {
    colors: string[];
    materials: string[]
    sizes: {}
}

const initialValues: InitialValues = {
    colors: [""],
    sizes: [""],
    price: 0
}

const DetailsForm: FC<DetailsFormProps> = (props: DetailsFormProps) => {
    const [price, setPrice] = useState<number>(0)
    const addToCart = useCartStore(state => state.addToCart)
    const productImage = `https://dk1ny38iy5de8.cloudfront.net/${props.id}/main.jpg`


    const changePrice = (e: FormEvent<HTMLInputElement>): void => {
        const currentSize: any = e.currentTarget.value
        const sizes: any = props.catalogs.sizes
        setPrice(parseInt(sizes[currentSize]))
        initialValues.sizes[0] = currentSize
        initialValues.price = price
    }



    /* const product = {
        id: props.id,
        colors: props.colors,
        catalogs: props.catalogs,
        price: price,
        size: initialValues.sizes,
        quantity: 1
    } */

    /* const addWrappingPrice = (e: any) => {
        if (e.currentTarget.value) {
            setchecked(!checked)
        }
    } */

    const submitProductToCart = (e: any) => {
        const id = props.id.toString() + e.colors[0] + e.sizes[0]
        const product: Product = {
            id: Buffer.from(id).toString('base64'),
            image: productImage,
            productName: props.productName,
            color: e.colors[0],
            price: price,
            size: e.sizes[0],
            quantity: 1
        }
        addToCart(product)
        alert("producto añadido al carrito")
    }

    return (
        <div className={styles.DetailsForm} data-testid="detailsForm">
            <Formik
                initialValues={initialValues}
                onSubmit={submitProductToCart}>
                <Form className={styles.form}>
                    <div className={styles.color}>
                        <label>Main color</label>
                        <Field as="select" name="colors" multiple>
                            <option >Choose color</option>
                            {props.colors.map((color, i) => {
                                return <option key={i} value={color} >{color.toUpperCase()}</option>
                            })}
                        </Field>
                    </div>
                    <div className={styles.size}>
                        <label>Size</label>
                        <Field as="select" name="sizes" onChange={changePrice} multiple={true}>
                            <option >Choose size</option>
                            {Object.keys(props.catalogs.sizes).map((size, i) => {
                                return <option key={i} value={size}>{size.toUpperCase()} </option>
                            }).reverse()}
                        </Field>
                    </div>

                    {/* TRANSLADATE THIS TO CART */}
                    {/* <div className={styles.wrapping}>
                        <label>
                            Gift Wraping
                            <Field type="checkbox" name="toggle" onClick={addWrappingPrice} />
                        </label>
                    </div>*/}
                    <div className={styles.total}>
                        <p>Price</p>
                        {/* <p>{checked ? price + giftWrap : price} €</p> */}
                        <p>{price} €</p>
                    </div>
                    <div>
                        <p>This form is only for info purpose. If you want to order or ask something, please click contact button below</p>
                    </div>
                    <div className={styles.button}>
                        <button
                            type="submit">
                            Add to cart
                        </button>
                    </div>
                </Form>
            </Formik>
        </div>
    )
};

export default DetailsForm;
