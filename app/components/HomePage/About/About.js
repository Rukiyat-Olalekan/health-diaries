import Image from "next/image";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { BiLogoTwitter } from "react-icons/bi";
import { BsPinterest } from "react-icons/bs";
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";

import styles from "./About.module.css";
import nathan from "../../Images/nathan.jpg";
import Popular from "./Popular";
import AboutButton from "./AboutButton";

export default function About() {
  return (
    <div className={styles.about}>
      <div className={styles.me}>
        <h4>About Me </h4>
        <div className={styles.image}>
          {" "}
          <Image
            alt="nathan profile"
            src={nathan}
            width={150}
            height={150}
            className={styles.img}
          />
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt
        </p>
      </div>
      <div className={styles.follow}>
        {" "}
        <h4>Follow me</h4>
        <div className={styles.socials}>
          <Link href="#">
            <FaInstagram size="30px" />
          </Link>

          <Link href="#">
            <FaFacebook size="30px" />
          </Link>

          <Link href="#">
            <BiLogoTwitter size="30px" />
          </Link>

          <Link href="#">
            <BsPinterest size="30px" />
          </Link>
        </div>
      </div>
      <div className={styles.banner}>
        {" "}
        <h4>Banner</h4>
        <Image alt="nathan profile" src={nathan} width={250} height={250} className={styles.img} />
      </div>
      <Popular />
      <div className={styles.twitter}>
        <h4>Twitter</h4>
        <BiLogoTwitter color="purple" />
        <p style={{ color: "black" }}>@twitter</p>
        <p>
          <FaQuoteLeft size="10px" color="purple" />
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt...
          <FaQuoteRight size="10px" color="purple" />
        </p>
      </div>
      <div className={styles.tag}>
        {" "}
        <h4>Tag cloud</h4>
        <AboutButton />
      </div>
      <div className={styles.form}>
        <h4>Subscribe</h4>
        <p style={{ color: "black" }}>Follow my latest news</p>
        <form>
          <input id="email" type="email" />
        </form>
      </div>
    </div>
  );
}
