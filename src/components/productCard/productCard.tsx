import React, { FC } from 'react';
import styles from './productCard.module.css';
import { Link } from 'react-router-dom';

interface ProductCardProps { }



const ProductCard: FC<ProductCardProps> = () => {
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
          <Link to='/products/1/details'>
            <img src='https://d1ccwz5tu7strp.cloudfront.net/1/main.jpg' alt="product" />
          </Link>

          <button
            onMouseEnter={onEnter}
            onMouseLeave={onLeave}>
            <i className="fa-regular fa-heart" data-testid="icon" />
          </button>
        </figure>
        <figcaption className={styles.data}>
          Rabbit
        </figcaption>
        <figcaption className={styles.data}>
          15€
        </figcaption>
      </div>
    </div>
  )
};

export default ProductCard;
