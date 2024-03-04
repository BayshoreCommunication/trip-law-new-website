"use client";
import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const CardMotion = ({ children, initial, whileInView }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {});
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <div ref={ref}>
      <motion.div initial={initial} whileInView={whileInView}>
        {children}
      </motion.div>
    </div>
  );
};

export default CardMotion;
