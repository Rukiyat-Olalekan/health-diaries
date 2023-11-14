import React from "react";
import Image from "next/image";

import styles from "./HomeImages.module.css";
import procrastination from "../Images/procrastination.jpg";
import community from "../Images/community.jpg";
import lifestyle from "../Images/lifestyle.jpg";

export default function HomePage() {
  return (
    <section className={styles.home}>
      <div>
        <Image
          src={community}
          alt="a man meditating"
          width={360}
          height={300}
          className={styles.img}
        />
      </div>
      <div className={styles.hide}>
        <div>
          <Image
            src={procrastination}
            alt="a man meditating"
            width={360}
            height={300}
          />
        </div>
        <div>
          <Image
            src={lifestyle}
            alt="a man meditating"
            width={360}
            height={300}
          />
        </div>
        <div>
          <Image
            src={community}
            alt="a man meditating"
            width={360}
            height={300}
          />
        </div>
      </div>
    </section>
  );
}
