import React from "react";
import { motion } from "motion/react";
import { slide } from "@/app/helpers/anim";

interface INavItem {
  label: string;
}

export default function NavItem({ label }: INavItem) {
  return (
    <motion.a
      variants={slide}
      animate="enter"
      exit="exit"
      initial="initial"
      href="#"
      className="font-semibold text-2xl no-underline hover:underline transition-all duration-300"
    >
      {label}
    </motion.a>
  );
}
