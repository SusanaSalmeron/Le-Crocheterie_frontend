import { FC, useEffect, useState } from 'react';
import { getAllProducts } from '../../lib/products';
import ProductCard from '../(productCard)';
import MainLayout from '../../components/mainLayout';
import styles from '../../styles/productList.module.css'
import Spinner from '../(spinner)';
import { GetServerSideProps } from 'next';
import ProductListByCategory from './categories/[category]';

interface AllProducts {
  id: number,
  name: string,
  material: string,
  colors: string[],
  description: string,
  price: number
}

interface ProductListProps {
  allProducts: AllProducts[]
}


export const getServerSideProps: GetServerSideProps = async () => {
  const allProducts: ProductListProps = await getAllProducts()
  return {
    props: { allProducts }
  }
}

const ProductList: FC<ProductListProps> = ({ allProducts }) => {
  return (
    <>
      <ProductListByCategory allProducts={allProducts} />
    </>
  )
};

export default ProductList;