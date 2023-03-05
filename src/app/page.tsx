"use client";

import Banner from "@/components/banner";

export default function Home() {
  const handleButtonClick = () => {
    console.log("a");
  };

  return (
    <>
      <Banner
        buttonText="View stores nearby"
        handleClick={handleButtonClick}
      />
    </>
  );
}
