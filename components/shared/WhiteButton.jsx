"use client";
import { motion } from "framer-motion";

function WhiteButton({ title, link, style }) {
  return (
    <motion.a
      // href={link}
      whileTap={{ scale: 0.85 }}
      type="button"
      className={`text-stone-950 bg-stone-50  hover:bg-stone-100 font-medium text-lg px-8 py-2.5 me-6 mb-2 cursor-pointer ${style}`}
    >
      {title}
    </motion.a>
  );
}

export default WhiteButton;
