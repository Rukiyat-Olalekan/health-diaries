import React from "react";
import Link from "next/link";
import Image from "next/image";
import fitness from "../../components/Images/fitness.jpg";
import styles from "./page.module.css";

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
  {
    id: "t5",
    detail: "Whether you are a fitness novice",
  },
  {
    id: "t6",
    detail: "Whether you are a fitness novice",
  },
  {
    id: "t7",
    detail: "Whether you are a fitness novice",
  },
  {
    id: "t8",
    detail: "Whether you are a fitness novice",
  },
  {
    id: "t9",
    detail: "Whether you are a fitness novice",
  },
  {
    id: "t10",
    detail: "Whether you are a fitness novice",
  },
  {
    id: "t11",
    detail: "Whether you are a fitness novice",
  },
  {
    id: "t12",
    detail: "Whether you are a fitness novice",
  },
  {
    id: "t13",
    detail: "Whether you are a fitness novice",
  },
  {
    id: "t14",
    detail: "Whether you are a fitness novice",
  },
  {
    id: "t15",
    detail: "Whether you are a fitness novice",
  },
];

export function ViewAll(props) {
  return (
    <li className={styles.view}>
      <Link href="/blog/exercise">
        <Image alt="fitness picture" src={fitness} width={200} height={200} />
      </Link>
      <div className={styles.detail}>
        <Link href="/blog/exercise">
          <p>{props.detail}</p>
        </Link>
      </div>
    </li>
  );
}

export default function ViewAllPage() {
  return (
    <ul className={styles.views}>
      {posts.map((post) => (
        <ViewAll key={post.id} detail={post.detail} />
      ))}
    </ul>
  );
}
