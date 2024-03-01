'use client'
import React, { FC, FormEvent, useState } from "react";
import styles from "../../styles/detailsForm.module.css"
import { Formik, Form, Field, FieldArray } from "formik";
import { useCartStore } from "../../app/store/useCartStore";
import { Product } from "../../app/store/useCartStore";
import Swal from 'sweetalert2';
import ValidationForDetailsForm from "../../lib/validationDetailsForm";
import { MenuItem, Select } from "@ariakit/react";


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

    const colorSelected = (e: FormEvent<HTMLInputElement>): void => {
        const currentColor: any = e.currentTarget.value
        initialValues.colors = currentColor
    }

    const submitProductToCart = (e: any, actions: any) => {
        const id = props.id.toString() + e.colors + e.sizes
        const product: Product = {
            id: Buffer.from(id).toString('base64'),
            image: productImage,
            productName: props.productName,
            color: e.colors,
            price: price,
            size: e.sizes,
            quantity: 1
        }
        addToCart(product)
        Swal.fire({
            position: "center",
            width: "auto",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (alert) => {
                alert.onmouseenter = Swal.stopTimer;
                alert.onmouseleave = Swal.resumeTimer;
            },
            icon: "success",
            title: "Product has been added successfully",
            background: "#f9f0f2",
            color: "#bb5644",
        });
        initialValues.colors = [""]
    }

    return (
        <div className={styles.DetailsForm} data-testid="detailsForm">
            <Formik
                initialValues={initialValues}
                onSubmit={(submitProductToCart)}
                validationSchema={ValidationForDetailsForm}
            >
                {
                    ({ isSubmitting, dirty, isValid }) =>
                        <Form className={styles.form}>
                            <div className={styles.color}>
                                {/* <Field name="colors" component="select">
                                    {props.colors.map((color, i) => {
                                        return <option value={color}>{color}</option>
                                    })}
                                </Field> */}

                                <div id="colorRadioGroup">
                                    <h5>Choose Main Color</h5>
                                </div>
                                <div role="group"
                                    className={styles.content}>
                                    {props.colors.map((color, i) => {
                                        return <div key={i}>
                                            <label>{color.toUpperCase()}</label>
                                            <Field
                                                type="radio" name="colors" value={color}
                                                onClick={colorSelected}
                                            />
                                        </div>
                                    })}
                                </div>
                            </div>
                            <div className={styles.sizes}>
                                <div id="sizesRadioGroup">
                                    <h5 className={styles.title}>Choose Size</h5>
                                </div>
                                <div role="group" className={styles.content}>
                                    {Object.keys(props.catalogs.sizes).map((size, i) => {
                                        return <div key={i}>
                                            <label>{size.toUpperCase()}</label>
                                            <Field
                                                type="radio"
                                                name="sizes"
                                                value={size}
                                                onClick={changePrice}
                                            />
                                        </div>
                                    }).reverse()}
                                </div>
                            </div>

                            <div className={styles.total}>
                                <p>Price</p>
                                <p>{price} €</p>
                            </div>
                            <div className={styles.button}>
                                <button
                                    type="submit"
                                    disabled={!dirty || !isValid || isSubmitting}
                                >
                                    Add to cart
                                </button>
                            </div>
                        </Form>
                }
            </Formik>
        </div>
    )
};

export default DetailsForm;
