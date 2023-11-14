import Link from "next/link";

import styles from "./AboutButton.module.css";
const buttonlist = [
  {
    id: "b1",
    text: "exercise",
    href: "/blog/exercise",
  },
  {
    id: "b2",
    text: "blog",
    href: "/blog",
  },
  {
    id: "b3",
    text: "diet",
    href: "/blog",
  },
  {
    id: "b4",
    text: "health",
    href: "/blog",
  },
  {
    id: "b5",
    text: "join",
    href: "/blog",
  },
  {
    id: "b6",
    text: "contact",
    href: "/blog",
  },
];

export function AboutButtonItem(props) {
  return (
    <li>
      <button className={styles.button}>
        <Link href={props.href}>{props.text}</Link>
      </button>
    </li>
  );
}

import React from "react";

export default function AboutButton() {
  return (
    <ul className={styles["about-button"]}>
      {buttonlist.map((list) => (
        <AboutButtonItem key={list.id} text={list.text} href={list.href} />
      ))}
    </ul>
  );
}
