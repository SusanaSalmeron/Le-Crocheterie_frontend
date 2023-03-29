import React, { FC, FormEvent, useEffect, useState } from 'react';
import styles from './detailsForm.module.css';
import { Formik, Form, Field } from 'formik';
import { getCatalogs } from '../../services/catalogService';
import { useNavigate } from 'react-router-dom';


interface DetailsFormProps {
  id: number,
  colors: string[],
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
  const [catalogs, setCatalogs] = useState<Catalogs>({ colors: initialValues.colors, materials: [""], sizes: initialValues.sizes })
  const [price, setPrice] = useState<number>(0)
  const [checked, setchecked] = useState<boolean>(false)
  const navigate = useNavigate()

  useEffect(() => {
    getCatalogs()
      .then(response => {
        setCatalogs(response)
      })
  }, [])

  const changePrice = (e: FormEvent<HTMLInputElement>): void => {
    const currentSize: any = e.currentTarget.value
    const sizes: any = catalogs.sizes
    setPrice(sizes[currentSize])
  }

  const addWrappingPrice = (e: any) => {
    console.log(e.currentTarget.value)
    if (e.currentTarget.value) {
      setchecked(!checked)
    }
  }

  return (
    <div className={styles.DetailsForm} data-testid="detailsForm">
      <Formik
        initialValues={initialValues}
        onSubmit={() => {
          navigate('/home')
        }}>
        {({ values }) => (
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
                {Object.keys(catalogs.sizes).map((size, i) => {
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
        )}
      </Formik>

    </div>
  )
};

export default DetailsForm;
