"use client";

import React, { FC } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import styles from "../../styles/contactForm.module.css"
import { sendContactForm } from "../../lib/contact";
import { popUpAlert } from "../../lib/clientUtils";
import { ValidationContactForm } from "../../lib/validationForm";
import MainLayout from "../../components/mainLayout";

interface ContactFormProps { }
interface InitialValues {
  name: string,
  topic: string,
  content: string,
  email: string
}

const initialValues: InitialValues = {
  name: "",
  topic: "",
  content: "",
  email: ""
}

const ContactForm: FC<ContactFormProps> = () => {
  return (
    <MainLayout>
      <div className={styles.contactForm} data-testid="contactForm">
        <Formik
          initialValues={initialValues}
          validationSchema={ValidationContactForm}
          onSubmit={async (values, actions) => {
            const isSent = await sendContactForm(values.name, values.topic, values.content, values.email)
            if (isSent) {
              actions.resetForm()
              await popUpAlert("center", "success", "We have received your data successfully", false, 2000)
            }
          }}
        >
          {
            ({ isSubmitting, dirty, isValid }) =>
              <Form className={styles.form}>
                <div className={styles.name}>
                  <label>Name</label>
                  <Field name="name" placeholder="Write your name" />
                </div>
                <ErrorMessage
                  className={styles.error}
                  name="name"
                  component="small"
                />
                <div className={styles.email}>
                  <label>Email</label>
                  <Field name="email" placeholder="Write your email" />
                </div>
                <ErrorMessage
                  className={styles.error}
                  name="email"
                  component="small"
                />
                <div className={styles.topic}>
                  <label>Subject</label>
                  <Field as="select" name="topic">
                    <option>Choose subject</option>
                    <option value="order">Order</option>
                    <option value="support">Support</option>
                    <option value="general">General</option>
                  </Field>
                </div>
                <ErrorMessage
                  className={styles.error}
                  name="topic"
                  component="small"
                />
                <div className={styles.comment}>
                  <label>Comment</label>
                  <Field as="textarea" name="content" placeholder="Write your order/question" rows="10" />
                </div>
                <ErrorMessage
                  className={styles.error}
                  name="content"
                  component="small"
                />
                <div className={styles.button}>
                  <button
                    type="submit"
                    disabled={!dirty || !isValid || isSubmitting}
                  >
                    Submit
                  </button>
                </div>
              </Form>
          }
        </Formik>
      </div>
    </MainLayout>
  )
};

export default ContactForm;
