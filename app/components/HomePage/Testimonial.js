"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

import { FaComments } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import { BsTagsFill } from "react-icons/bs";

import fitness from "../Images/fitness.jpg";
import procrastination from "../Images/procrastination.jpg";
import styles from "./Testimonial.module.css";

export default function Testimonial(props) {
  const [currentImage, setCurrentImage] = useState(fitness);
  const images = [fitness, procrastination];

  useEffect(() => {
    const interval = setInterval(() => {
      const currentIndex = images.indexOf(currentImage);
      const nextImage = (currentIndex + 1) % images.length;
      setCurrentImage(images[nextImage]);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [currentImage]);

  return (
    <li className={`${styles.testimonial} ${styles["image-transition"]}`}>
      <div className={styles.overlay}>
        <div>
          {" "}
          <div className={styles["twenty-five"]}>25</div>
          <div className={styles.november}>Nov</div>
        </div>
      </div>
      <Image
        alt="fitness picture"
        src={currentImage}
        width={400}
        height={250}
        className={styles.image}
      />
      <div className={styles.width}>
        <h4>{props.title}</h4>
        <div className={styles.admin}>
          {" "}
          <p>
            <BsFillPersonFill color="purple" /> admin
          </p>
          <p>
            <FaComments color="purple" /> One Comment
          </p>
        </div>
        <p>{props.text}</p>
        <div className={styles["border-top"]}>
          <p>
            <BsTagsFill color="purple" /> Uncategorized
          </p>
          <p>
            <span style={{ color: "black", marginRight: "5px" }}>Tags:</span>
            Video, Audio, Website
          </p>
        </div>
        <div className={styles.action}>
          <button className={styles.button}>Read more</button>
        </div>
      </div>
    </li>
  );
}
