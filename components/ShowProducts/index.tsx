"use client";

import { FC, useEffect, useState } from "react";
import ProductCard from "../ProductCard"
import MainLayout from "../mainLayout";
import styles from "../../styles/showProducts.module.css"
import Spinner from "../spinner";

interface Products {
    id: number,
    name: string,
    material: string,
    colors: string[],
    description: string,
    price: number
}

interface ShowProductsProps {
    Products: Products[],
}

export interface CategoryParams {
    category: string
}

const ShowProducts: FC<ShowProductsProps> = ({ Products }) => {
    const [loading, setLoading] = useState<boolean>(true)
    useEffect(() => {
        window.scrollTo({ top: -10, left: 0, behavior: "smooth" })
        setLoading(false)
    }, [])
    return (
        <>
            <MainLayout>
                {
                    loading ? <Spinner size={30} /> : <div className={styles.productList} data-testid="productList">
                        {!Products?.length ? <h2>No products in this category</h2> : <>
                            <h1>PRODUCTS</h1>
                            <div className={styles.list}>
                                {Products.map((product: Products, i: any) => <ProductCard key={i} id={product.id} name={product.name} price={product.price} />)}
                            </div>
                        </>}
                    </div>
                }
            </MainLayout>
        </>
    )
};

export default ShowProducts;