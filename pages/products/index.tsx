import { FC, useEffect, useState } from 'react';
/* import { getAllProducts, getProductsBy } from '../../services/productsService'; */
/* import { useParams } from 'react-router-dom';
*/
import { getAllProducts } from '../../lib/products';
import ProductCard from '../(productCard)';
import MainLayout from '../../components/mainLayout';
import styles from '../../styles/productList.module.css'
import Spinner from '../(spinner)';

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

interface CategoryParams {
  category: string
}

export async function getServerSideProps() {
  let allProducts
  try {
    allProducts = await getAllProducts()
  } catch (e) {
    console.log(e)
  }
  return {
    props: { allProducts }
  }
}

const ProductList: FC<ProductListProps> = ({ allProducts }) => {
  const [loading, setLoading] = useState<boolean>(true)
  /*   const { category } = useParams<keyof CategoryParams>() as CategoryParams
  */
  useEffect(() => {
    window.scrollTo({ top: -10, left: 0, behavior: "smooth" })
    setLoading(false)
    /* if (!category) {
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
    } */
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

export default ProductList;