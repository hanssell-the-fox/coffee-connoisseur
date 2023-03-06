"use client";
import styles from "./page.module.css";
import Banner from "@/components/banner";
import Image from "next/image";

export default function Home() {
  const handleButtonClick = () => {
    console.log("a");
  };

  return (
    <header className={styles.container}>
      <Banner
        buttonText="View stores nearby"
        handleClick={handleButtonClick}
      />
      <span className={styles.headerImage}>
        <Image
          src="/coffee-break.png"
          fill
          alt="a drawing of a fox holding two cups of coffee"
        />
      </span>
    </header>
  );
}
