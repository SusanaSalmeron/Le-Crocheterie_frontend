
import { FC, useEffect, useState } from 'react';
import styles from '../../../styles/productDetails.module.css';
import DetailsForm from '../../../src/components/detailsForm/detailsForm';
/* import { useParams } from 'react-router-dom'; */
import { getProductBy } from '../../../lib/products';
import { getCatalogs } from '../../../lib/catalogs';
import { GetServerSideProps } from 'next';
import { NextRouter, useRouter } from 'next/router';
import Image from 'next/image';
import MainLayout from '../../../components/mainLayout';

interface ProductDetailsProps {
  product: ProductProps,
  catalogs: Catalogs
}
interface ProductProps {
  id: number,
  name: string,
  material: string[],
  colors: string[],
  description: string,
  price: number
}

type ProductParams = {
  productId: string
}

interface Catalogs {
  colors: string[];
  materials: string[]
  sizes: {}
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const productId: any = context.params?.productId
  let product: ProductProps = await getProductBy(productId)
  let catalogs: Catalogs = await getCatalogs()
  return {
    props: { product, catalogs }
  }
}


const ProductDetails: FC<ProductDetailsProps> = ({ product, catalogs }) => {
  const router = useRouter()
  const productId = router.query
  console.log(productId)
  const prices: any = Object.values(catalogs.sizes)

  const maxPrice = Math.max(...prices)
  const minPrice = Math.min(...prices)

  return (
    <MainLayout>
      <div className={styles.ProductDetails} data-testid="productDetails">
        <div className={styles.item}>
          <figure>
            <img alt={product.name} src={`https://d1ccwz5tu7strp.cloudfront.net/${productId.productId}/main.jpg`} />

          </figure>
          <div className={styles.details}>
            <h3>{product.name}</h3>
            <h4 className={styles.range}>{minPrice}€ - {maxPrice}€</h4>
            {/*         <DetailsForm id={product.id} colors={product.colors} />
 */}      </div>
        </div>
      </div>
    </MainLayout>
  )
};

export default ProductDetails;
