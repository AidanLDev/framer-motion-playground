import React, { SetStateAction } from "react";

interface IBurgerMenuProps {
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<SetStateAction<boolean>>;
}

export default function BurgerMenu({
  menuOpen,
  setMenuOpen,
}: IBurgerMenuProps) {
  return (
    <div
      className={`fixed right-0 margin-4 w-20 h-20 bg-[#455ce9] cursor-pointer rounded-full burger-menu mr-4 mt-4 ${menuOpen ? "burger-active" : ""}`}
      onClick={() => setMenuOpen((prevState) => !prevState)}
    ></div>
  );
}
