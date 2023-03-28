import { FC, useEffect, useState } from 'react';
import styles from './productDetails.module.css';
import DetailsForm from '../detailsForm/detailsForm';
import { useParams } from 'react-router-dom';
import { getProductBy } from '../../services/productsService';

interface ProductDetailsProps { }
interface ProductProps {
  id: number,
  name: string,
  material: string,
  colors: string,
  description: string,
  price: number
}

type ProductParams = {
  productId: string
}


const ProductDetails: FC<ProductDetailsProps> = () => {
  const [product, setProduct] = useState<ProductProps>({ id: 0, name: "", material: "", colors: "", description: "", price: 0 })
  const { productId } = useParams<keyof ProductParams>() as ProductParams

  useEffect(() => {
    getProductBy(productId)
      .then(response => {
        setProduct(response)
      })
  }, [productId])

  return (<div className={styles.ProductDetails} data-testid="productDetails">
    <div className={styles.item}>
      <figure>
        <img alt={product.name} src={`https://d1ccwz5tu7strp.cloudfront.net/${productId}/main.jpg`} />
      </figure>
      <div className={styles.details}>
        <h3>{product.name}</h3>
        <h4 className={styles.range}>15€ - 30€</h4>
        <DetailsForm id={product.id} material={product.material} colors={product.colors} />
      </div>
    </div>
  </div>
  )
};

export default ProductDetails;
