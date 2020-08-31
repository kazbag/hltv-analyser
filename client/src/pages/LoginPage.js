import React from "react";
import Basic from "../components/Form/Basic";
import axios from "axios";
import { apiUri } from "../cfg";

const handleUserDataRequest = (userData) => {
  const { email, password, target } = userData;
  console.log(userData);
  const user = {
    email,
    password,
  };
  axios
    .post(`${apiUri}/api/${target}`, { user })
    .then((response) => {
      console.log(response.data.token);
      if (response.data.token) {
        localStorage.clear();
        localStorage.setItem("token", response.data.token);
      }
    })
    .catch((err) => console.log(err.message));
};

const LoginPage = () => {
  return (
    <section className="section section__login">
      <h3 className="heading heading--title heading-3">
        Log in or create an account
      </h3>
      <Basic handleUserDataRequest={handleUserDataRequest} />
    </section>
  );
};

export default LoginPage;
