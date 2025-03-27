import React from "react";
import { menuItems } from "@/app/helpers/consts";
import NavItem from "./NavItem";
import { AnimatePresence, motion } from "motion/react";
import { menuSlide } from "@/app/helpers/anim";

interface INav {
  menuOpen: boolean;
}

export default function Nav({ menuOpen }: INav) {
  return (
    <AnimatePresence>
      {menuOpen && (
        <motion.div
          animate={menuOpen ? "enter" : "exit"}
          initial="initial"
          variants={menuSlide}
          exit="exit"
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className={`text-white flex flex-col items-center justify-center gap-4 h-full w-2xl bg-slate-900 fixed right-0 ${menuOpen ? "block" : "hidden"}`}
        >
          <div className="w-40 pl-4 mb-4 border-b-slate-100 border-b">
            <h1>Navigation</h1>
          </div>
          {menuItems.map((menuItem, idx) => (
            <NavItem key={`${menuItem}__${idx}`} label={menuItem} />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
