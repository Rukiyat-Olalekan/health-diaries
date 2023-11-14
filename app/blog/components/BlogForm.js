"use client";

import React, { useRef } from "react";
import styles from "./BlogForm.module.css";

export default function BlogForm() {
  const nameInputRef = useRef("");
  const emailInputRef = useRef("");

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;

    console.log(enteredName, enteredEmail);
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <div className={styles.new}>
        <h2>Join the Health Diaries Family</h2>
        <h3>
          Sign up to receive first access to daily workouts, meal plans, &
          healthy lifestyle tips
        </h3>
      </div>
      <div className={styles["form-actions"]}>
        <div className={styles.input}>
          <input
            id="name"
            type="text"
            placeholder="e.g health-diaries"
            ref={nameInputRef}
          />
        </div>
        <div className={styles.input}>
          <input
            id="email"
            type="email"
            placeholder="e.g healthdiaries@gmail.com"
            ref={emailInputRef}
          />
        </div>
        <div className={styles.action}>
          <button type="submit">Get started!</button>
        </div>
      </div>
    </form>
  );
}
