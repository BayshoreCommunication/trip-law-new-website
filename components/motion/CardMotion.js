"use client";
import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const CardMotion = ({ children, width = "fit-content" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <div
      ref={ref}
      style={
        {
          // position: "relative",
          // width,
          // overflow: "hidden",
        }
      }
    >
      <motion.div
        initial={{
          opacity: 0,
          // if odd index card,slide from right instead of left
          x: -100,
        }}
        whileInView={{
          opacity: 1,
          x: 0, // Slide in to its original position
          transition: {
            duration: 1.2, // Animation duration
          },
        }}
        viewport={{ once: true }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default CardMotion;
