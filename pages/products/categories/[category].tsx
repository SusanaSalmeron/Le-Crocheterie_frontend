import { FC, useEffect, useState } from 'react';
import { getAllProducts, getProductsBy } from '../../../lib/products';
import ProductCard from '../../(productCard)';
import MainLayout from '../../../components/mainLayout';
import styles from '../../../styles/productList.module.css'
import Spinner from '../../(spinner)';
import { GetServerSideProps } from 'next';

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

export interface CategoryParams {
  category: string
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const category: any = context.params?.category
  let allProducts: ProductListProps
  if (category === undefined) {
    allProducts = await getAllProducts()
  } else {
    allProducts = await getProductsBy(category)
  }
  return {
    props: { allProducts }
  }
}

const ProductListByCategory: FC<ProductListProps> = ({ allProducts }) => {
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
            {!allProducts?.length ? <h2>No products in this category</h2> : <>
              <h1>PRODUCTS</h1>
              <div className={styles.list}>
                {allProducts.map((product, i) => <ProductCard key={i} id={product.id} name={product.name} price={product.price} />)}
              </div>
            </>}
          </div>
        }
      </MainLayout>
    </>
  )
};

export default ProductListByCategory;