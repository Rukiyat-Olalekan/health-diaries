import React from "react";
import Image from "next/image";
import BlogForm from "../blog/components/BlogForm";

import styles from "./page.module.css";
import fitness from "../components/Images/fitness.jpg";
import procrastination from "../components/Images/procrastination.jpg";

export default function page() {
  return (
    <section className={styles.work}>
      <div className={styles.images}>
        <div className={styles.first}>
          {" "}
          <div>
            <Image src={fitness} width={150} height={315} />
          </div>
          <div>
            <Image src={procrastination} width={150} height={150} />
          </div>
          <div>
            <Image src={fitness} width={150} height={150} />
          </div>
        </div>

        <div className={styles.first}>
          <div>
            <Image src={procrastination} width={150} height={315} />
          </div>
          <div>
            <Image src={fitness} width={150} height={150} />
          </div>
          <div>
            <Image src={fitness} width={150} height={150} />
          </div>
        </div>
        <div className={styles.first}>
          <div>
            <Image src={procrastination} width={150} height={315} />
          </div>
          <div>
            <Image src={fitness} width={150} height={150} />
          </div>
          <div>
            <Image src={procrastination} width={150} height={150} />
          </div>
        </div>
        <div className={styles.first}>
          <div>
            <Image src={fitness} width={150} height={315} />
          </div>
          <div>
            <Image src={procrastination} width={150} height={150} />
          </div>
          <div>
            <Image src={fitness} width={150} height={150} />
          </div>
        </div>
      </div>
      <div className={styles.welcome}>
        <h3>Congratulations for discovering Health diaries!</h3>
        <p>
          Since the beginning of Health Diaries, I've had the honor of assisting
          over a hundred individuals in their transformative fitness journeys.
          Now, it's your opportunity to be part of this thriving community of
          hundreds who've not only enhanced their lives but also found a strong
          sense of belonging within Health Diaries. Are you ready to join us?
        </p>
      </div>
      <div className={styles.testimony}>
        <div className={styles.image}>
          <Image src={fitness} width={400} height={400} />
        </div>
        <p>
          Sarah's goal was to lose weight and improve her overall health. She
          had struggled with her weight for years, trying numerous diets and
          exercise plans with no lasting success. Together, we developed a
          personalized nutrition and fitness plan that suited her busy
          lifestyle. Over the course of a year, Sarah lost 50 pounds and gained
          a new lease on life. She now maintains her healthy weight and
          continues to set and achieve new fitness goals.
        </p>
      </div>
      <BlogForm />
    </section>
  );
}
