/* eslint-disable */
import ProductCard from './productCard';

export default {
  title: "ProductCard",
};

export const Default = () => <ProductCard id={5} name={"Pochi"} price={20} />;

Default.story = {
  name: 'default',
};
