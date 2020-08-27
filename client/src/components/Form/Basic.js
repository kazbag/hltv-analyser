// Render Prop
import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Button from "./Button";
import CustomRadio from "./CustomRadio";

const Basic = () => (
  <Formik
    initialValues={{
      email: "",
      password: "",
      target: "login",
    }}
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
    {({ isSubmitting }) => {
      return (
        <Form className="form">
          <CustomRadio label="Log in">
            <Field type="radio" value="login" name="target" />
          </CustomRadio>
          <CustomRadio label="Register me">
            <Field type="radio" value="register" name="target" />
          </CustomRadio>
          <ErrorMessage name="email" component="div" className="form__error" />
          <Field
            type="email"
            name="email"
            className="input"
            placeholder="Email"
          />
          <ErrorMessage
            name="password"
            component="div"
            className="form__error"
          />
          <Field
            type="password"
            name="password"
            className="input"
            placeholder="Password"
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
      );
    }}
  </Formik>
);

export default Basic;
