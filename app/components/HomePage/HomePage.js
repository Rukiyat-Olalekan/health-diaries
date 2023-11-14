
import styles from "./HomePage.module.css"

import Testimonials from "./Testimonials";
import About from "./About/About";

export default function HomePage() {
  return (
    <div className={styles.homepage}>
      <Testimonials />
      <About />
    </div>
  );
}
