import React, { useState } from "react";
import Basic from "../components/Form/Basic";
import axios from "axios";
import { apiUri } from "../cfg";
import Loading from "../components/Loading";

const LoginPage = () => {
  const [loading, setLoading] = useState(false);
  const handleUserDataRequest = (userData) => {
    setLoading(true);
    const { email, password, target } = userData;
    const user = {
      email,
      password,
    };
    axios
      .post(`${apiUri}/api/${target}`, { user })
      .then((response) => {
        if (response.data.token) {
          localStorage.clear();
          localStorage.setItem("token", response.data.token);
        }
      })
      .catch((err) => console.log(err.message))
      .finally(() => setLoading(false));
  };
  return (
    <section className="section section__login">
      <h3 className="heading heading--title heading-3">
        Log in or create an account
      </h3>
      <Basic handleUserDataRequest={handleUserDataRequest} />
      {loading && <Loading />}
    </section>
  );
};

export default LoginPage;
