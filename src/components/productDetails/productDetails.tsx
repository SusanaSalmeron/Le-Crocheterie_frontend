import React, { FC } from 'react';
import styles from './productDetails.module.css';
import { Formik, Form, Field } from 'formik';

interface ProductDetailsProps { }

interface InitialValues {
  color: string;
  size: string;
  toggle: boolean;
  total: number
}


const initialValues: InitialValues = {
  color: "",
  size: "",
  toggle: false,
  total: 0
}

const ProductDetails: FC<ProductDetailsProps> = () => {
  return (<div className={styles.ProductDetails} data-testid="ProductDetails">
    <div className={styles.item}>
      <figure>
        <img alt="rabbit" src={'https://d1ccwz5tu7strp.cloudfront.net/1/main.jpg'} />
      </figure>
      <div className={styles.details}>
        <h3>Rabbit</h3>
        <h4 className={styles.range}>15€ - 30€</h4>
        <Formik
          initialValues={initialValues}
          onSubmit={(values, actions) => {
            console.log({ values, actions });
            alert(JSON.stringify(values, null, 2));
          }}>
          {({ values }) => (
            <Form className={styles.form}>
              <div className={styles.color}>
                <label>Main color</label>
                <Field as="select" name="color">
                  <option >Choose color</option>
                  <option value="pink" >Pink</option>
                  <option value="blue">Blue</option>
                  <option value="green">Green</option>
                </Field>
              </div>
              <div className={styles.size}>
                <label>Size</label>
                <Field as="select" name="size">
                  <option >Choose size</option>
                  <option value="s">S</option>
                  <option value="m">M</option>
                  <option value="l">L</option>
                </Field>
              </div>
              <div className={styles.wrapping}>
                <label>
                  Gift Wraping
                  <Field type="checkbox" name="toggle" />
                </label>
              </div>
              <div className={styles.total}>
                <p>Total Price</p>
                <p>{initialValues.total} €</p>
              </div>
              <div className={styles.button}>
                <button type="submit">Submit</button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  </div>
  )
};

export default ProductDetails;
