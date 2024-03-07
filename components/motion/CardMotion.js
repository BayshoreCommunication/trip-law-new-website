"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const CardMotion = ({ children, initial, whileInView }) => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const mainControls = useAnimation();

  const [scrollDirection, setScrollDirection] = useState(null);
  const [prevScrollY, setPrevScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > prevScrollY) {
      setScrollDirection("down");
    } else if (currentScrollY < prevScrollY) {
      setScrollDirection("up");
    }
    setPrevScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollY]);

  useEffect(() => {
    if (isInView && scrollDirection === "down") {
      mainControls.start("visible");
    } else if (isInView && scrollDirection === "up") {
      mainControls.stop();
    }
  }, [isInView, scrollDirection, mainControls]);

  return (
    <div ref={ref}>
      <motion.div
        initial={initial}
        whileInView={whileInView}
        // animate={mainControls}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default CardMotion;
