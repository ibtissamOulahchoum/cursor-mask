"use client";

import styles from "./page.module.scss";
import { useState } from "react";
import { motion } from "framer-motion";
import useMousePosition from "./utils/useMousePosition";

export default function Home() {
  // Track if mouse is hovering over text
  const [isHovered, setIsHovered] = useState(false);

  // Get mouse position on screen
  const { x, y } = useMousePosition();

  // Size changes from 40 to 400 when hovered
  const size = isHovered ? 300 : 40;

  return (
    <main className={styles.main}>
      {/* This div follows mouse movement and creates a mask effect */}
      <motion.div
        className={styles.mask}
        animate={{
          // Moves mask based on mouse position
          WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
      >
        {/* Text that shows when hovered */}
        <p
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          Ibtissam doesn’t need a superhero cape; she just needs a good Wi-Fi
          connection and a stash of snacks to save the day, one bug at a time!{" "}
        </p>
      </motion.div>

      {/* Background text */}
      <div className={styles.body}>
        <p>
          Ibtissam’s code is like her jokes—sometimes{" "}
          <span> it’s a little messy, but it always gets a laugh... </span> and
          occasionally a round of applause!
        </p>
      </div>
    </main>
  );
}
