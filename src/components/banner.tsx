"use client";

import styles from "./banner.module.css";

interface BannerProps {
  buttonText: string;
  handleClick: React.MouseEventHandler;
}

export default function Banner(props: BannerProps) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <span className={styles.title1}>Coffee</span>
        <span className={styles.title2}>Connoisseur</span>
      </h1>
      <p className={styles.subTitle}>Discover your local coffee shops!</p>
      <button className={styles.button} onClick={props.handleClick}>
        {props.buttonText}
      </button>
    </div>
  );
}
