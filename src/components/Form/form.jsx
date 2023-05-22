import React from "react";
import { useState } from "react";
// import { useEffect } from "react";
import validate from "./validation";
import "./form.module.css";
import style from "./form.module.css";

export default function Form({ Login }) {
  const [userData, setUserData] = useState({
    email: "diego@email.com",
    password: "654321",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const [typePassword, setTypePassword] = useState("password");

  // const [disabled, setDisabled] = useState(true);

  // useEffect(() => {
  //   if (
  //     userData.email !== "" &&
  //     userData.password !== "" &&
  //     errors.email === "" &&
  //     errors.password === ""
  //   ) {
  //     setDisabled(false);
  //   } else {
  //     setDisabled(true);
  //   }
  // }, [userData, errors]);

  const handleChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    if (property === "password") {
      setTypePassword("text");
      setTimeout(() => {
        setTypePassword("password");
      }, 800);
    }
    setUserData({ ...userData, [property]: value });
    setErrors(validate({ ...userData, [property]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    Login(userData);
  };

  return (
    <div className={style.container}>
      
      <form className={style.form} onSubmit={handleSubmit}>
        <h2>Welcome!</h2>
        <div className={style.contInput}>
          <label htmlFor="email">User: </label>
          <input
            type="text"
            name="email"
            value={userData.email}
            onChange={handleChange}
            className={errors.email && style.warning}
            placeholder="Email.."
          />
          <p className={style.danger}>{errors.email}</p>
        </div>

        <div className={style.contInput}>
          <label htmlFor="password">Password: </label>
          <input
            type={typePassword}
            name="password"
            value={userData.password}
            onChange={handleChange}
            className={errors.password && style.warning}
            placeholder="Password.."
          />
          <p className={style.danger}> {errors.password}</p>
        </div>

        <button className={style.btn} type="submit">
          <span className={style.span}>Submit</span>
        </button>
      </form>
      <img className={style.img} src="ram.png" alt="Rick" />
    </div>
  );
}
