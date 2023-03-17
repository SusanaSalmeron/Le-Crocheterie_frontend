import { FC, useEffect, useState } from 'react';
import { getAllProducts } from '../../services/productsService';
import ProductCard from '../productCard/productCard';
import styles from './productList.module.css';

interface ProductProps {
  id: number,
  name: string,
  material: string,
  colors: string[],
  description: string,
  price: number
}

interface ProductListProps { }

const ProductList: FC<ProductListProps> = () => {
  const [products, setProducts] = useState<ProductProps[]>([])

  useEffect(() => {
    getAllProducts()
      .then(response => {
        setProducts(response)
      })
  }, [])

  return (
    <div className={styles.productList} data-testid="productList">
      <h1>PRODUCTS</h1>
      <div className={styles.list}>
        {products.map(product => <ProductCard id={product.id} name={product.name} price={product.price} />)}
      </div>
    </div>
  )
};

export default ProductList;
