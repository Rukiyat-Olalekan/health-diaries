import React from "react";
import Image from "next/image";
import styles from "./Trending.module.css";

import lifestyle from "../Images/lifestyle.jpg";
import meditation from "../Images/meditation.jpg";
import fitness from "../Images/fitness.jpg";

export default function Trending() {
  return (
    <div className={styles.trending}>
      <h1>Our mission</h1>
      <p>
        Our mission is simple: to inspire and guide you to embrace a healthier
        lifestyle that resonates with your unique preferences and goals. We
        understand that embarking on a wellness journey can feel overwhelming,
        and that's why Health Diaries is designed to be your supportive
        companion every step of the way.
      </p>
      <div className={styles.flex}>
        <div className={styles.image}>
          <Image
            src={meditation}
            alt="a man meditating"
            width={350}
            height={250}
            className={styles.img}
          />
          <p>Wellness</p>
          <div className={styles.width}>
            <h3>Holistic Wellness</h3>
            <p>
              We approach wellness as a comprehensive, interconnected system
              encompassing physical, mental, emotional, and spiritual
              well-being. Our articles cover topics such as mindfulness, stress
              management, self-care practices, and techniques for cultivating a
              positive mindset...
            </p>
          </div>
        </div>
        <div className={styles.image}>
          <Image
            src={lifestyle}
            alt="a man meditating"
            width={350}
            height={250}
            className={styles.img}
          />
          <p>Lifestyle</p>
          <div className={styles.width}>
            <h3>Lifestyle Enhancement</h3>
            <p>
              Health Diaries encourages you to make conscious choices that align
              with your values. From practical tips on time management and
              organization to strategies for creating a balanced daily routine,
              we provide actionable advice to enhance your lifestyle...
            </p>
          </div>
        </div>

        <div className={styles.image}>
          <Image
            src={fitness}
            alt="a man meditating"
            width={350}
            height={250}
            className={styles.img}
          />
          <p>Health</p>
          <div className={styles.width}>
            <h3>Health and Fitness</h3>
            <p>
              Whether you're a fitness novice or a seasoned enthusiast, Health
              Diaries offers a range of fitness routines, nutrition tips, and
              expert advice. Our goal is to help you discover enjoyable ways to
              stay active and nourish your body for optimal health...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
