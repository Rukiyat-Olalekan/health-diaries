import HomeImages from "./components/HomePage/HomeImages";
import Trending from "./components/HomePage/Trending";
// import HomePage from "./components/HomePage/HomePage";

import styles from "./page.module.css";
import HomePage from "./components/HomePage/HomePage";

export default function Home() {
  return (
    <main className={styles.main}>
      <HomeImages />
      <Trending />
      <HomePage />
    </main>
  );
}
