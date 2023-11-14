import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaRegCalendarAlt } from "react-icons/fa";

import styles from "./Popular.module.css";
import fitness from "../../Images/fitness.jpg";

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

export function PopularItems(props) {
  return (
    <div className={styles.popular}>
      <Link className={styles.image} href="/blog/all">
        <Image
          alt="fitness picture"
          src={fitness}
          width={60}
          height={60}
          className={styles.img}
        />
      </Link>
      <div>
        <div className={styles.date}>
          <FaRegCalendarAlt color="purple" />
          <span className={styles.margin}>22 Nov 2017</span>
        </div>
        <span className={styles.detail}>{props.detail}</span>
      </div>
    </div>
  );
}

export default function Popular() {
  return (
    <div>
      {posts.map((post) => (
        <PopularItems key={post.id} detail={post.detail} />
      ))}
    </div>
  );
}
