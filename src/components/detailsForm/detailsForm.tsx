import React, { FC } from 'react';
import styles from './detailsForm.module.css';
import { Formik, Form, Field } from 'formik';


interface DetailsFormProps {
  id: number,
  material: string,
  colors: string,
}

interface InitialValues {
  colors: string;
  size: string;
  toggle: boolean;
  total: number
}

const initialValues: InitialValues = {
  colors: "",
  size: "",
  toggle: false,
  total: 0
}

const DetailsForm: FC<DetailsFormProps> = (props: DetailsFormProps) => {
  const optionsColors: string[] = props.colors.split("|")

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
                {optionsColors.map((color, i) => {
                  return <option key={i} value={color} >{color}</option>
                })}
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
