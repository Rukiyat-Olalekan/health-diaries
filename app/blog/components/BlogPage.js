import React from "react";
import Image from "next/image";
import Link from "next/link";

import styles from "./BlogPage.module.css";
import fitness from "../../components/Images/fitness.jpg"

const posts = [
  {
    id: "t1",
    detail: "Whether you are a fitness novice",
  },
  {
    id: "t2",
    detail: "Whether you are a fitness novice",
  },
  {
    id: "t3",
    detail: "Whether you are a fitness novice",
  },
  {
    id: "t4",
    detail: "Whether you are a fitness novice",
  },
];

export function BlogItems(props) {
  return (
    <li className={styles["blog-post"]}>
      <Link className={styles.image} href="/blog/exercise">
        <Image
          alt="fitness picture"
          src={fitness}
          width={200}
          height={200}
          className={styles.img}
        />
      </Link>
      <div className={styles.detail}>
        <Link href="/blog/exercise">
          <p>{props.detail}</p>
        </Link>
      </div>
    </li>
  );
}

export default function BlogPage() {
  return (
    <ul className={styles["blog-posts"]}>
      {posts.map((post) => (
        <BlogItems key={post.id} detail={post.detail} />
      ))}
    </ul>
  );
}
