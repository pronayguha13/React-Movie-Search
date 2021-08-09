import React, { useState } from "react";

import styles from "./styles.module.css";

const AuthForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const _onChangeHandler = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
    } else setPassword(value);
  };

  return (
    <div className={styles.formContainer}>
      <form autoComplete="off" className={styles.AuthForm}>
        <div className={styles.inputDiv}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={_onChangeHandler}
            autoComplete="c8KowjFsaT"
          />
        </div>
        <div className={styles.inputDiv}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={_onChangeHandler}
            autoComplete="AhPHKophhv"
          />
        </div>
        <button className={styles.submitBtn}>Get Started</button>
      </form>
    </div>
  );
};

export default AuthForm;
