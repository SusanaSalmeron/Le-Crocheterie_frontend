import React, { FC } from 'react';
import styles from '../../styles/productCard.module.css';
import Link from 'next/link';
import Image from 'next/image';

interface ProductCardProps {
  id: number,
  name: string,
  price: number
}

const ProductCard: FC<ProductCardProps> = (props: ProductCardProps) => {
  const onEnter = (e: any) => {
    e.target.children[0].className = "fa-solid fa-heart"
  }
  const onLeave = (e: any) => {
    e.target.children[0].className = "fa-regular fa-heart"
  }

  return (
    <div className={styles.productCard} data-testid="productCard">
      <div className={styles.card}>
        <figure>
          <Link href={`/products/${props.id}/details`}>
            <Image src={`https://d1ccwz5tu7strp.cloudfront.net/${props.id}/main.jpg`} alt={props.name} width={100} height={100} />
          </Link>
          <button
            onMouseEnter={onEnter}
            onMouseLeave={onLeave}>
            <i className="fa-regular fa-heart" data-testid="icon" />
          </button>
        </figure>
        <figcaption className={styles.data}>
          {props.name}
        </figcaption>
        <figcaption className={styles.data}>
          {props.price} €
        </figcaption>
      </div>
    </div>
  )
};

export default ProductCard;
