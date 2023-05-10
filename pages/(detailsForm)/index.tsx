import React, { FC, FormEvent, useEffect, useState } from 'react';
import styles from '../../styles/detailsForm.module.css'
import { Formik, Form, Field } from 'formik';
import { useRouter } from 'next/router';


interface DetailsFormProps {
  id: number,
  colors: string[],
  catalogs: Catalogs
}

interface InitialValues {
  colors: string[];
  sizes: string[];
  toggle: boolean;
  total: number
}

interface Catalogs {
  colors: string[];
  materials: string[]
  sizes: {}
}

const initialValues: InitialValues = {
  colors: [""],
  sizes: [""],
  toggle: false,
  total: 0
}

const DetailsForm: FC<DetailsFormProps> = (props: DetailsFormProps) => {
  const [price, setPrice] = useState<number>(0)
  const [checked, setchecked] = useState<boolean>(false)
  const router = useRouter()


  const changePrice = (e: FormEvent<HTMLInputElement>): void => {
    const currentSize: any = e.currentTarget.value
    const sizes: any = props.catalogs.sizes
    setPrice(sizes[currentSize])
  }

  const addWrappingPrice = (e: any) => {
    if (e.currentTarget.value) {
      setchecked(!checked)
    }
  }

  return (
    <div className={styles.DetailsForm} data-testid="detailsForm">
      <Formik
        initialValues={initialValues}
        onSubmit={() => {
          router.push('/contact')
        }}>

        <Form className={styles.form}>
          <div className={styles.color}>
            <label>Main color</label>
            <Field as="select" name="color">
              <option >Choose color</option>
              {props.colors.map((color, i) => {
                return <option key={i} value={color} >{color.toUpperCase()}</option>
              })}
            </Field>
          </div>
          <div className={styles.size}>
            <label>Size</label>
            <Field as="select" name="size" onChange={changePrice}>
              <option >Choose size</option>
              {Object.keys(props.catalogs.sizes).map((size, i) => {
                return <option key={i} value={size}>{size.toUpperCase()}</option>
              }).reverse()}
            </Field>
          </div>
          <div className={styles.wrapping}>
            <label>
              Gift Wraping
              <Field type="checkbox" name="toggle" onClick={addWrappingPrice} />
            </label>
          </div>
          <div className={styles.total}>
            <p>Total Price</p>
            <p>{checked ? price + 5 : price} €</p>
          </div>
          <div>
            <p>This form is only for info purpose. If you want to order or ask something, please click contact button below</p>
          </div>
          <div className={styles.button}>
            <button type="submit">Contact</button>
          </div>
        </Form>
      </Formik>
    </div>
  )
};

export default DetailsForm;
