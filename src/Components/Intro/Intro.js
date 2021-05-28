import React, { useEffect, useState } from "react";
import FlipCard from "./FlipCard";
import dynamic from "next/dynamic";
import styles from "./Intro.module.scss";
const Leaf = dynamic(() => import("./Leaf"));
export default function Intro() {
 

  return (
    <div className={styles.IntroContainer} id="intro">
      <Leaf /> 

      <div className={`${styles.overlay}`}>
        <FlipCard />
      </div>
    </div>
  );
}
