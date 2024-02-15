"use client"

import { getAllProducts } from "../../lib/products";
import ShowProducts from "../../components/ShowProducts";

interface AllProducts {
  id: number,
  name: string,
  material: string,
  colors: string[],
  description: string,
  price: number
}


const AllProducts = async () => {
  let allProducts: AllProducts[] = await getAllProducts()
  return (
    <>
      <ShowProducts Products={allProducts} />
    </>
  )
};

export default AllProducts;