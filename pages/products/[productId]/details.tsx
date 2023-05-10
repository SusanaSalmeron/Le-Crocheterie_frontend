import { FC } from 'react';
import styles from '../../../styles/productDetails.module.css';
import { getProductBy } from '../../../lib/products';
import { getCatalogs } from '../../../lib/catalogs';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import Image from 'next/image';
import MainLayout from '../../../components/mainLayout';
import DetailsForm from '../../(detailsForm)';

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
  const prices: any = Object.values(catalogs.sizes)

  const maxPrice = Math.max(...prices)
  const minPrice = Math.min(...prices)

  return (
    <MainLayout>
      <div className={styles.ProductDetails} data-testid="productDetails">
        <div className={styles.item}>
          <figure>
            <Image alt={product.name} src={`https://d1ccwz5tu7strp.cloudfront.net/${productId.productId}/main.jpg`} width={800} height={800} />

          </figure>
          <div className={styles.details}>
            <h3>{product.name}</h3>
            <h4 className={styles.range}>{minPrice}€ - {maxPrice}€</h4>
            <DetailsForm id={product.id} colors={product.colors} catalogs={catalogs} />
          </div>
        </div>
      </div>
    </MainLayout>
  )
};

export default ProductDetails;
