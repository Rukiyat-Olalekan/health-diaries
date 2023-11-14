import React from "react";
import styles from "./Testimonials.module.css";

import Testimonial from "./Testimonial";

const dummyTestimonials = [
  {
    id: "t1",
    title: "Health",
    text: "Whether you're a fitness novice or a seasoned enthusiast, Health Diaries offers a range of fitness routines, nutrition tips, and expert advice. Our goal is to help you discover enjoyable ways to stay active and nourish your body for optimal health...",
  },
  {
    id: "t2",
    title: "Health",
    text: "Whether you're a fitness novice or a seasoned enthusiast, Health Diaries offers a range of fitness routines, nutrition tips, and expert advice. Our goal is to help you discover enjoyable ways to stay active and nourish your body for optimal health...",
  },
  {
    id: "t3",
    title: "Health",
    text: "Whether you're a fitness novice or a seasoned enthusiast, Health Diaries offers a range of fitness routines, nutrition tips, and expert advice. Our goal is to help you discover enjoyable ways to stay active and nourish your body for optimal health...",
  },
  {
    id: "t4",
    title: "Health",
    text: "Whether you're a fitness novice or a seasoned enthusiast, Health Diaries offers a range of fitness routines, nutrition tips, and expert advice. Our goal is to help you discover enjoyable ways to stay active and nourish your body for optimal health...",
  },
  {
    id: "t5",
    title: "Health",
    text: "Whether you're a fitness novice or a seasoned enthusiast, Health Diaries offers a range of fitness routines, nutrition tips, and expert advice. Our goal is to help you discover enjoyable ways to stay active and nourish your body for optimal health...",
  },
  {
    id: "t6",
    title: "Health",
    text: "Whether you're a fitness novice or a seasoned enthusiast, Health Diaries offers a range of fitness routines, nutrition tips, and expert advice. Our goal is to help you discover enjoyable ways to stay active and nourish your body for optimal health...",
  },
  {
    id: "t7",
    title: "Health",
    text: "Whether you're a fitness novice or a seasoned enthusiast, Health Diaries offers a range of fitness routines, nutrition tips, and expert advice. Our goal is to help you discover enjoyable ways to stay active and nourish your body for optimal health...",
  },
  {
    id: "t",
    title: "Health",
    text: "Whether you're a fitness novice or a seasoned enthusiast, Health Diaries offers a range of fitness routines, nutrition tips, and expert advice. Our goal is to help you discover enjoyable ways to stay active and nourish your body for optimal health...",
  },
];

export default function Testimonials() {
  return (
    <div>
      <ul className={styles.testimonials}>
        {dummyTestimonials.map((detail) => (
          <Testimonial
            key={detail.id}
            title={detail.title}
            text={detail.text}
          />
        ))}
      </ul>
    </div>
  );
}
