import React from "react";
import Input from "./Input";
import Button from "./Button";
const Form = () => (
  <form className="form">
    <Input
      type="email"
      name="input__email"
      placeholder="your email"
      label="email"
    />
    <Input
      type="email"
      name="input__email--confirm"
      placeholder="confirm email"
      label="confirm email"
    />

    <Input
      type="password"
      name="input__password"
      placeholder="your new password"
      label="new password"
    />
    <Input
      type="password"
      name="input__password--confirm"
      placeholder="confirm password"
      label="confirm new password"
    />
    <Button text="Save your data" name="form__button--submit" />
  </form>
);

export default Form;
