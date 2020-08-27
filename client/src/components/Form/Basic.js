// Render Prop
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Button from "./Button";

const Basic = () => (
  <Formik
    initialValues={{ email: "", password: "", passwordConfirm: "" }}
    validate={(values) => {
      const errors = {};
      if (!values.email) {
        errors.email = "Email is required, buddy.";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
        errors.email = "Invalid email address!";
      }
      if (values.password.length < 8) {
        errors.password = "Password must be at least 8 characters";
      } else if (
        values.passwordConfirm.length > 0 &&
        values.password !== values.passwordConfirm
      ) {
        errors.password = "Passwords didn't match!";
      }
      return errors;
    }}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 400);
    }}
  >
    {({ isSubmitting }) => (
      <Form className="form">
        <ErrorMessage name="email" component="div" className="form__error" />
        <Field
          type="email"
          name="email"
          className="input"
          placeholder="Email"
        />
        <ErrorMessage name="password" component="div" className="form__error" />
        <Field
          type="password"
          name="password"
          className="input"
          placeholder="Password"
        />
        <ErrorMessage
          name="passwordConfirm"
          component="div"
          className="form__error"
        />
        <Field
          type="password"
          name="passwordConfirm"
          className="input"
          placeholder="Re-enter password"
        />
        <Button
          text="Submit"
          name="login-button"
          id="login-button"
          addictionalClasses="form__button form__button--submit"
          type="submit"
          disabled={isSubmitting}
        />
      </Form>
    )}
  </Formik>
);

export default Basic;
