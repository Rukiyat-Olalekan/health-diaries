import React from "react";
import Image from "next/image";
import nathan from "../components/Images/nathan.jpg";
import styles from "./page.module.css";

export default function page() {
  return (
    <section className={styles.story}>
      <div className={styles["story-header"]}>
        <div className={styles["story-title"]}>
          <p>
            Hey there! I'm Rukky, and I'm thrilled to have you join our fitness
            and health community. Here, we're all about breaking a sweat,
            fueling our bodies with goodness, and embracing the journey to a
            healthier, happier you. Whether you're a seasoned fitness pro or
            just getting started, you're in the right place! Expect inspiring
            stories, expert advice, tasty recipes, and tons of motivation to
            keep you going. Let's crush those goals together! Stay tuned for
            weekly updates, and remember, your health journey starts now.
          </p>
        </div>
        <div className={styles.img}>
          <Image src={nathan} width={400} height={300} className={styles.image}/>
        </div>
      </div>
      <div className={styles["story-body"]}>
        <h2>About Me</h2>
        <p>
          I used to be the ultimate couch potato. My idea of exercise was
          lifting the TV remote. Fast food was my best friend, and I could
          easily finish a family-sized pizza solo. But one fateful day, I had a
          wake-up call in the form of an unflattering vacation photo. Staring at
          that picture, I realized it was time for a change. I wanted to be
          healthier, fitter, and more energetic. So, I started my fitness
          journey, one tiny step at a time. <br />
          <br />
          My first foray into fitness was comical. Picture this: me, in
          mismatched workout clothes, attempting to jog around the block. I made
          it about 100 yards before collapsing in a fit of wheezing laughter.
          But you know what? I kept at it. I started with simple exercises,
          improved my diet, and slowly transformed my body. As my journey
          progressed, I became obsessed with learning about fitness and health.
          I devoured books, blogs, and videos. It wasn't just about losing
          weight anymore; it was a quest for knowledge and self-improvement.
        </p>
        <div className={styles.image}>
          <Image src={nathan} width={750} height={300} className={styles.image}/>
        </div>
        <p>
          One day, the idea hit me like a lightning bolt: "Why not share this
          journey with others?" So, I started my fitness and health website. It
          was a simple affair at first, just me and my laptop, writing about my
          experiences and the things I'd learned. To my surprise, people started
          reading! I was no fitness guru, but I was real, relatable, and
          enthusiastic. My readers loved it. They laughed at my early exercise
          mishaps and cheered me on as I tackled 5Ks and conquered my fear of
          the gym. The more I shared, the more the website grew. It wasn't long
          before I had experts wanting to contribute and readers sending their
          own inspiring stories. We were becoming a community, bound by a shared
          goal of living healthier lives. <br />
          <br />
          My website has come a long way since those early days, but my mission
          remains the same: to inspire others to take that first step toward a
          healthier life. I'm still no fitness guru, just a regular person who
          found a love for fitness and wants to share it. So, whether you're a
          seasoned athlete or a couch potato like I once was, remember this:
          Every fitness journey starts with a single step. You don't have to be
          perfect; you just have to start. And hey, if I can do it, anyone can.{" "}
          <br />
          <br />
          Thanks for joining me on this incredible adventure!
        </p>
      </div>
    </section>
  );
}
