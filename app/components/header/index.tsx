"use client";

import { useState } from "react";
import BurgerMenu from "./BurgerMenu";
import Nav from "./nav";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div>
      <Nav menuOpen={menuOpen} />
      <BurgerMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </div>
  );
}
