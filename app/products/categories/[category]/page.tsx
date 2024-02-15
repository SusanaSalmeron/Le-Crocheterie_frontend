"use client"

import { getProductsBy } from "../../../../lib/products"
import ShowProducts from "../../../../components/ShowProducts";
import { useParams } from "next/navigation";


interface ProductsByCategory {
  id: number,
  name: string,
  material: string,
  colors: string[],
  description: string,
  price: number
}

const ProductsByCategory = async () => {
  const params = useParams()
  let productsByCategory: ProductsByCategory[] = await getProductsBy(params?.category)

  return (
    <>
      <ShowProducts Products={productsByCategory} />
    </>
  )
};

export default ProductsByCategory;