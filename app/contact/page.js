import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { BiLogoTwitter } from "react-icons/bi";
import { BsPinterest } from "react-icons/bs";

import styles from "./page.module.css";

export default function page() {
  return (
    <form className={styles.form}>
      <div className={styles.new}>
        <h2>Join the Health Diaries Family</h2>
        <h3>
          Sign up to receive first access to daily workouts, meal plans, &
          healthy lifestyle tips. Join 100s of people, share your testimony!
        </h3>
      </div>
      <div className={styles.input}>
        <label htmlFor="name">Name</label>
        <input id="name" type="text" />
      </div>
      <div className={styles.input}>
        <label htmlFor="email">Email</label>
        <input id="email" type="email" />
      </div>
      <div className={styles.action}>
        <button>Get started!</button>
      </div>
      <div className={styles.socials}>
        <div className={styles.instagram}>
          <FaInstagram size="50px" color="purple" />
        </div>
        <div className={styles.instagram}>
          <FaFacebook size="50px" color="purple" />
        </div>

        <div className={styles.instagram}>
          <BiLogoTwitter size="50px" color="purple" />
        </div>

        <div className={styles.instagram}>
          <BsPinterest size="50px" color="purple" />
        </div>
      </div>
      <div className={styles.contact}>
        <h4>Get in touch</h4>
        <h2>Contact us</h2>
        <p>
          Address: 1600 Pennsylvania Ave NW, Washington Castle, PA 16101-5161
        </p>
        <p>Phone: 080 000 000 0000</p>
      </div>
    </form>
  );
}
