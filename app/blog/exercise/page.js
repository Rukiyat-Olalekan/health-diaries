import React from "react";
import Image from "next/image";
import styles from "./page.module.css";
import fitness from "../../components/Images/fitness.jpg";

import BlogForm from "../components/BlogForm";

export default function page() {
  return (
    <div className={styles.exercise}>
      <div className={styles["exercise-header"]}>
        <div className={styles.image}>
          <Image alt="fitness picture" src={fitness} width={900} height={800} />
        </div>
        <div className={styles["exercise-title"]}>
          <p>Tuesday, August 22, 2023</p>
          <h1>How exercise will completely transform your life</h1>
          <p className={styles["exercise-title-p"]}>3 Min Read <span>By: Rukky</span></p>
        </div>
      </div>
      <div className={styles["exercise-body"]}>
        <h1>Reconnecting with your inner self</h1>
        <p>
          In an increasingly fast-paced world, where demands on our time and
          energy are ever-growing, exercise often takes a back seat in our daily
          lives. However, the benefits of regular physical activity extend far
          beyond a fit physique. Exercise, whether it's a brisk walk, a yoga
          session, or an intense workout, is a powerful tool that can positively
          impact our physical, mental, and emotional well-being. In this blog
          post, we'll explore how exercise helps us lead healthier, happier
          lives.
        </p>
        <Image alt="fitness picture" src={fitness} width={700} height={700} />
        <h1>Physical Health Benefits</h1>
        <p>
          Exercise helps you manage your weight by burning calories and building
          muscles. It's like a superhero for your weight! It makes your heart
          strong, lowers blood pressure, and keeps your blood flowing smoothly.
          This way, it's like a shield against heart problems. Think of exercise
          as a bodyguard for your health. It makes your immune system stronger,
          helping you fight off sickness.
        </p>
        <h1>Mental Health Benefits</h1>
        <p>
          Exercise releases happy chemicals in your brain, making you feel less
          stressed and worried. It's like a brain workout! Exercise helps you
          remember things, be more creative, and stay sharp as you get older.
          Exercise helps you sleep like a baby, so you wake up feeling fresh and
          ready to take on the day. It's a natural mood lifter, like a happy
          pill without the side effects. It can help you feel happier and better
          about yourself.
        </p>
        <h1>Emotional Well-being</h1>
        <p>
          Achieving fitness goals makes you feel awesome and more confident in
          yourself. Joining group activities like yoga or sports is a great way
          to make friends and feel less lonely. Exercise gives you ways to
          handle life's challenges better. It's like a secret weapon for dealing
          with stress.
        </p>
        <Image alt="fitness picture" src={fitness} width={700} height={700} />
        <h1>Getting started</h1>
        <p>
          If you're new to exercise, take it slow, and choose things you enjoy.
          It could be dancing, swimming, or just a nice walk. The key is to keep
          at it, aiming for about 150 minutes of medium-intensity exercise every
          week, along with some muscle-strengthening stuff two or more days a
          week. So, let's get moving and be our healthiest, happiest selves!
        </p>
      </div>
      <BlogForm />
    </div>
  );
}
