import React, { useState } from "react";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";
import { hamburger } from "../assets/icons";
import { close } from "../assets/icons";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <header className="padding-x py-10 absolute z-10 w-full">
      <nav className="flex justify-between items-center mx-container">
        <a href="#">
          <img alt="logo" src={headerLogo} width={130} height={29} />
        </a>
        <ul className="flex flex-1 justify-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <a href={item.href} key={item.label}>
              {item.label}
            </a>
          ))}
        </ul>
        <ul>
          <a href="#" className="ml-auto max-lg:hidden">
            Register or login
          </a>
        </ul>
        <div className="hidden max-lg:block">
          <img
            src={open ? close : hamburger}
            width={25}
            height={25}
            className="cursor-pointer transition-opacity opacity-100"
            onClick={handleOpen}
          />
        </div>
      </nav>
      {open && (
        <ul
          style={{ opacity: open ? 1 : 0 }}
          className="flex flex-col gap-5 transition ease-in-out z-100 w-ful bg-slate-400 py-2 px-3 rounded "
        >
          {navLinks.map((item) => (
            <a
              href={item.href}
              key={item.label}
              className="border-b-2 hover:border-sky-500 "
            >
              {item.label}
            </a>
          ))}
        </ul>
      )}
    </header>
  );
};

export default Navbar;
