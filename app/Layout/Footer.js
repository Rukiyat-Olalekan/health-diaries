import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { BiLogoTwitter } from "react-icons/bi";
import { BsPinterest } from "react-icons/bs";

import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.links}>
        {" "}
        <ul>
          <li>
            <Link href="https://github.com/rukkyy">
              <FaInstagram size="40px" />
            </Link>
          </li>
          <li>
            <Link href="https://www.linkedin.com/in/rukiyat-olalekan/">
              <FaFacebook size="40px" />
            </Link>
          </li>
          <li>
            <Link href="https://twitter.com/TheDevRukky">
              <BiLogoTwitter size="40px" />
            </Link>
          </li>
          <li>
            <Link href="https://twitter.com/TheDevRukky">
              <BsPinterest size="40px" />
            </Link>
          </li>
        </ul>
      </div>
      <div className={classes.routes}>
        {" "}
        <ul>
          <li>
            <Link href="/story">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <Link href="/contact">Terms & Condition</Link>
          </li>
          <li>
            <Link href="/contact">Work With Me</Link>
          </li>
        </ul>
      </div>
      <div className={classes.reserved}><p>&copy; {new Date().getFullYear()} Health Diaries. All rights reserved.</p></div>
    </footer>
  );
};

export default Footer;
