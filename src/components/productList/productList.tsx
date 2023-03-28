import { FC, useEffect, useState } from 'react';
import { getAllProducts, getProductsBy } from '../../services/productsService';
import ProductCard from '../productCard/productCard';
import styles from './productList.module.css';
import Spinner from '../spinner/spinner';
import { useParams } from 'react-router-dom';

interface ProductProps {
  id: number,
  name: string,
  material: string,
  colors: string[],
  description: string,
  price: number
}

interface ProductListProps { }

interface CategoryParams {
  category: string
}

const ProductList: FC<ProductListProps> = () => {
  const [products, setProducts] = useState<ProductProps[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const { category } = useParams<keyof CategoryParams>() as CategoryParams

  useEffect(() => {
    window.scrollTo({ top: -10, left: 0, behavior: "smooth" })
    if (!category) {
      getAllProducts()
        .then(response => {
          setProducts(response)
          setLoading(false)
        })
    } else {
      getProductsBy(category)
        .then(response => {
          setProducts(response)
          setLoading(false)
        })
    }
  }, [category, products])

  return (
    <>
      {loading ? <Spinner /> : <div className={styles.productList} data-testid="productList">
        {!products.length ? <h2>No products in this category</h2> : <>
          <h1>PRODUCTS</h1>
          <div className={styles.list}>
            {products.map((product, i) => <ProductCard key={i} id={product.id} name={product.name} price={product.price} />)}
          </div>
        </>}
      </div>
      }
    </>
  )
};

export default ProductList;