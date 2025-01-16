"use client";

import React from "react";
import { useState } from "react";
import logo from "@/public/assets/icons/logo.png";
import hamburger from "@/public/assets/icons/menu.png";
import { navLinks } from "@/public/constants";
import Button from "./ui/Button";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <nav className="absolute left-0 top-0 z-50 flex w-full items-center justify-between p-8 pt-12 sm:px-20 xl:px-32 2xl:left-auto 2xl:w-4/5">
      <Link href="/">
        <Image src={logo} alt="logo" className="w-24" />
      </Link>
      <ul className="hidden items-center justify-center gap-6 xl:flex">
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link
              className="font-raleway uppercase tracking-widest text-white"
              href={link.href}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
      <div className="flex gap-x-4">
        <a href="tel:+917018349322" className="hidden sm:block">
          <Button label={"Call Now"} light />
        </a>
        <button className="xl:hidden">
          <Image
            src={hamburger}
            onClick={() => setMenu(!menu)}
            alt="hamburger icon"
            width={25}
            height={25}
          />
        </button>
      </div>
      <div
        className="fixed left-0 top-0 z-10 h-screen overflow-hidden bg-white text-black transition-all duration-500"
        style={{
          width: `${menu ? "300px" : "0px"}`,
        }}
      >
        <ul className="mx-8 my-16 space-y-8">
          <li>
            <Link
              onClick={() => setMenu(false)}
              className="font-raleway uppercase tracking-widest"
              href="/"
            >
              Home
            </Link>
          </li>
          {navLinks.map((link) => (
            <li onClick={() => setMenu(false)} key={link.href}>
              <Link
                className="font-raleway uppercase tracking-widest"
                href={link.href}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <button
              onClick={() => setMenu(false)}
              className="font-raleway uppercase tracking-widest text-red-500"
            >
              Close
            </button>
          </li>
          <li>
            <a href="tel:+917018349322" className="sm:hidden">
              <Button label={"Call Now"} />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
