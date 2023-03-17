import React, { FC } from 'react';
import styles from './detailsForm.module.css';
import { Formik, Form, Field } from 'formik';


interface DetailsFormProps { }

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

const DetailsForm: FC<DetailsFormProps> = () => {
  return (
    <div className={styles.DetailsForm} data-testid="detailsForm">
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
  )
};

export default DetailsForm;
