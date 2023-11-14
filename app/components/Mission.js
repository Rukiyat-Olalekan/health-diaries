import React from "react";
import Image from "next/image";
import Link from "next/link";

import styles from "./Mission.module.css";
import meditation from "./Images/meditation.jpg";
import fitness from "./Images/fitness.jpg";
import lifestyle from "./Images/lifestyle.jpg";
import community from "./Images/community.jpg";
import procrastination from "./Images/procrastination.jpg";

export default function Mission() {
  return (
    <div className={styles.mission}>
      <p className={styles["mission-para"]}>
        Our mission is simple: to inspire and guide you to embrace a healthier
        lifestyle that resonates with your unique preferences and goals. We
        understand that embarking on a wellness journey can feel overwhelming,
        and that's why Health Diaries is designed to be your supportive
        companion every step of the way.
      </p>
      <p className={styles["mission-para"]}>
        Welcome to a space where determination, growth, and mutual support
        converge – Health Diaries' interactive community. Here, we're more than
        just readers; we're a collective of like-minded individuals who rise
        above challenges to embrace each day as an opportunity for
        self-improvement. Join us as we break down barriers, share our journeys,
        and uplift one another in our pursuit of becoming the best versions of
        ourselves.
      </p>
      <h1>Our Focus</h1>
      <div className={styles.goals}>
        <Image
          src={lifestyle}
          alt="a man meditating"
          width={500}
          height={300}
        ></Image>
        <div className={styles.box}>
          <h6><Link href="lifestyle">Lifestyle Enhancement</Link>:</h6>
          <p>
            Health Diaries encourages you to make conscious choices that align
            with your values. From practical tips on time management and
            organization to strategies for creating a balanced daily routine, we
            provide actionable advice to enhance your lifestyle.
          </p>
        </div>
      </div>
      <div className={styles.goals}>
        <Image
          src={meditation}
          alt="a man meditating"
          width={500}
          height={300}
        ></Image>
        <div className={styles.box}>
          <h6><Link href="wellness">Holistic Wellness</Link>:</h6>
          <p>
            We approach wellness as a comprehensive, interconnected system
            encompassing physical, mental, emotional, and spiritual well-being.
            Our articles cover topics such as mindfulness, stress management,
            self-care practices, and techniques for cultivating a positive
            mindset.
          </p>
        </div>
      </div>
      <div className={styles.goals}>
        <Image
          src={fitness}
          alt="a man meditating"
          width={500}
          height={300}
        ></Image>
        <div className={styles.box}>
          <h6><Link href="health">Health and Fitness</Link>:</h6>
          <p>
            Whether you're a fitness novice or a seasoned enthusiast, Health
            Diaries offers a range of fitness routines, nutrition tips, and
            expert advice. Our goal is to help you discover enjoyable ways to
            stay active and nourish your body for optimal health.
          </p>
        </div>
      </div>
      <div className={styles.goals}>
        <Image
          src={procrastination}
          alt="a man meditating"
          width={500}
          height={300}
        ></Image>
        <div className={styles.box}>
          <h6><Link href="wellness" >Overcoming Procrastination</Link>:</h6>
          <p>
            Procrastination can hinder progress and personal growth. At Health
            Diaries, we understand the challenges of overcoming procrastination
            and offer techniques to break free from this cycle. We're here to
            motivate and guide you towards taking meaningful action.
          </p>
        </div>
      </div>
      <div className={styles.goals}>
       
        <div className={styles.box}>
          <h6><Link href="contact">Safe and Supportive Community</Link>:</h6>
          <p>
            We've created a welcoming online community where you can connect
            with like-minded individuals who share your aspirations. Our comment
            sections and forums provide a platform to ask questions, share
            experiences, and find encouragement from others on their wellness
            journeys.
          </p>
        </div>
        <h1>Keep Your Body Moving</h1>
      <p>All the fitness tips in one place</p>
      <div className={styles.container}>
        <div>
          <h1>Featured post</h1>
          <p>The secret for positive training</p>
        </div>
      </div>
      <h3>
            Introducing Health Diaries: Empowering Your Journey to Wellness
          </h3>
          <p className={styles.description}>
            Welcome to Health Diaries, a transformative blog dedicated to
            empowering individuals on their journey towards improved wellness,
            lifestyle enhancement, and a holistic approach to health and
            fitness. If you've ever felt stuck in the cycle of procrastination,
            unsure of where to start, or longing for a safe space to explore and
            take charge of your life, you've come to the right place. Here at
            Health Diaries, we believe in the power of small, consistent steps
            to create lasting positive change.
          </p>
    </div>
    </div>
  );
}
