"use client"

import { FC } from "react";
import styles from "../../../../styles/productDetails.module.css"
import { getProductBy } from "../../../../lib/products";
import { getCatalogs } from "../../../../lib/catalogs";
import Image from "next/image";
import MainLayout from "../../../../components/mainLayout";
import DetailsForm from "../../../../components/DetailsForm";
import { useParams } from "next/navigation";

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

const ProductDetails: any = async () => {
  const params = useParams()
  const productId: any = params?.productId

  let product: ProductProps = await getProductBy(productId)
  //let catalogs: Catalogs = await getCatalogs()
  let catalogs: Catalogs = {
    colors: ["blue", "red", "green", "pink", "white", "black"],
    materials: ["algodon"],
    sizes: {
      l: "30",
      m: "20",
      s: "15"
    }
  }
  const prices: any = Object.values(catalogs.sizes)

  const maxPrice = Math.max(...prices)
  const minPrice = Math.min(...prices)

  return (
    <MainLayout>
      <div className={styles.ProductDetails} data-testid="productDetails">
        <div className={styles.item}>
          <figure>
            <Image alt={product.name} src={`https://dk1ny38iy5de8.cloudfront.net/${productId}/main.jpg`} width={800} height={800} />

          </figure>
          <div className={styles.details}>
            <h3>{product.name}</h3>
            <h4 className={styles.range}>{minPrice}€ - {maxPrice}€</h4>
            <DetailsForm id={product.id} colors={product.colors} catalogs={catalogs} productName={product.name} />
          </div>
        </div>
      </div>
    </MainLayout>
  )
};

export default ProductDetails;
