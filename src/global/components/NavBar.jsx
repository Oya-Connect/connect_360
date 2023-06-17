"use client";

import { useEffect, useRef, useState } from "react";
import Logo from "../../../public/images/logo.png";
import Image from "next/image";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

const NavBar = () => {
  const [menubarOpen, setMenuBarOpen] = useState(false);
  const navMenu = useRef(null);
  useEffect(() => {
    const body = document.querySelector("body");

    body.addEventListener("click", (e) => {
      const classList = e.target.classList;
      const elementContains = classList.contains.bind(classList);
      if (
        !(
          elementContains("navbar__menu--mobile") ||
          elementContains("navbar__links") ||
          elementContains("capitalize") ||
          elementContains("navbar__signup-btn")
        )
      ) {
        setMenuBarOpen(false);
        navMenu.current.setAttribute("data-show-menu", "false");
      }
    });
  }, []);

  const toggleNavMenu = () => {
    let currentMenuState = navMenu.current.dataset.showMenu;
    const body = document.querySelector("body");

    switch (currentMenuState) {
      case "true":
        navMenu.current.setAttribute("data-show-menu", "false");
        body.style.overflowY = "auto";
        setMenuBarOpen(false);
        break;
      case "false":
        navMenu.current.setAttribute("data-show-menu", "true");
        body.style.overflowY = "hidden";
        setMenuBarOpen(true);
        break;
      default:
        break;
    }
  };
  return (
    <nav className="navbar flex gap-0 md:gap-p-20 px-8 items-center">
      <div
        className="navbar__menu-btn block md:hidden  cursor-pointer z-10"
        onClick={toggleNavMenu}
      >
        {menubarOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
      </div>
      <div className="navbar__logo-container w-36 mx-auto md:m-auto">
        <Image
          src={Logo}
          className="navbar__logo w-full -z-20"
          alt="organization logo"
        />
      </div>

      {/* NAVBAR NORMAL   */}
      <div className="navbar__menu hidden md:flex md:flex-grow justify-between items-center">
        <ul className="navbar__links gap-6 flex">
          <li className="navbar__link capitalize">Home</li>
          <li className="navbar__link capitalize">Search</li>
          <li className="navbar__link capitalize">About Us</li>
          <li className="navbar__link capitalize">Contact</li>
          <li className="navbar__link capitalize">Blog</li>
        </ul>
        <button className="bg-blue-500 px-3 py-2 rounded">
          <span className="capitalize">signup</span>
        </button>
      </div>

      {/* NAVBAR MENU MOBILE */}
      <div
        data-show-menu="false"
        ref={navMenu}
        className="navbar__menu--mobile flex flex-col h-auto md:hidden py-20 z-0 px-8 gap-10"
      >
        <ul className="navbar__links  flex flex-col gap-7">
          <li className="capitalize">Home</li>
          <li className="capitalize">Search</li>
          <li className="capitalize">About Us</li>
          <li className="capitalize">Contact</li>
          <li className="capitalize">Blog</li>
        </ul>
        <button className="navbar__signup-btn bg-blue-500 px-3 py-2 rounded">
          <span className="capitalize">signup</span>
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
