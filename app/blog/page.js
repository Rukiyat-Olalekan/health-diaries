import React from "react";
import Image from "next/image";
import Link from "next/link";

import styles from "./page.module.css";
import fitness from "../components/Images/fitness.jpg";
import BlogPage from "./components/BlogPage";
import BlogForm from "./components/BlogForm";

export default function page() {
  return (
    <section className={styles.blog}>
      <Image src={fitness} alt="a fit man" width={1440} height={500} />
      <div className={styles.introduction}>
        <h4>
          Welcome to Health Diaries, your go-to source for all things fitness,
          health, and wellness. Whether you're a seasoned athlete or just
          starting your fitness journey, we're here to guide and inspire you.
          Our blog is designed to empower you with the knowledge, motivation,
          and tools you need to lead a healthier, more active life.
        </h4>
      </div>
      <BlogPage />
      <div className={styles.button}>
        <button>
          <Link href="/blog/all">view all</Link>
        </button>
      </div>
       <BlogForm />
    </section>
  );
}
