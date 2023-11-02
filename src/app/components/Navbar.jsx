"use client";
import React, { useState, useRef  } from "react";
import Link from "next/link";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import styles from "../globals.css"

const navLinks = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const aboutSectionRef = useRef(null);
  const projectsSectionRef = useRef(null);
  const contactSectionRef = useRef(null);

  const smoothScrollToTarget = (targetRef) => {
    const targetElement = targetRef.current;
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const handleLinkClick = (path) => {
    if (path === "#about") {
      smoothScrollToTarget(aboutSectionRef);
    } else if (path === "#projects") {
      smoothScrollToTarget(projectsSectionRef);
    } else if (path === "#contact") {
      smoothScrollToTarget(contactSectionRef);
    }
  };


  // return (
  //   <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-90">
  //     <div className="flex flex-wrap items-center justify-between mx-auto p-8">
  //       <Link
  //         href="/"
  //         className="text-2xl md:text-3xl text-white font-semibold"
  //       >
  //         Racha
  //       </Link>
  //       <div className=" w-auto mx-5 block default">
  //         <ul className="font-medium flex p-4 md:p-0 rounded-lg flex-row md:space-x-8 mt-0">
  //           {navLinks.map(({ title, path }) => (
  //             <li key={title}>
  //               <NavLink title={title} href={path} />
  //             </li>
  //           ))}
  //         </ul>
  //       </div>
  //       <div className="block md:hidden">
  //         {!navbarOpen ? (
  //           <button
  //             id="nav-toggle"
  //             className="flex items-center px-3 py-2 border rounded text-slate-200 border-slate-200 hover:text-white hover:border-white"
  //             onClick={() => setNavbarOpen(true)}
  //           >
  //             <Bars3Icon className="h-5 w-5" />
  //           </button>
  //         ) : (
  //           <button
  //             id="nav-toggle"
  //             className="flex items-center px-3 py-2 border rounded text-slate-200 border-slate-200 hover:text-white hover:border-white"
  //             onClick={() => setNavbarOpen(false)}
  //           >
  //             <XMarkIcon className="h-5 w-5" />
  //           </button>
  //         )}
  //       </div>
        
  //     </div>
  //     {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
  //   </nav>
  // );

  
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-90">
      <div className="flex flex-wrap items-center justify-between mx-auto p-8">
        <Link href="/" className="text-2xl md:text-3xl text-white font-semibold">
          Racha
        </Link>
        <div className=" w-auto mx-5 block default">
          <ul className="font-medium flex p-4 md:p-0 rounded-lg flex-row md:space-x-8 mt-0">
            {navLinks.map(({ title, path }) => (
              <li key={title}>
                <NavLink title={title} href={path} onClick={() => handleLinkClick(path)} />
              </li>
            ))}
          </ul>
        </div>
        <div className="block md:hidden">
          {!navbarOpen ? (
            <button
              id="nav-toggle"
              className="flex items-center px-3 py-2 border rounded text-slate-200 border-slate-200 hover:text-white hover:border-white"
              onClick={() => setNavbarOpen(true)}
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              id="nav-toggle"
              className="flex items-center px-3 py-2 border rounded text-slate-200 border-slate-200 hover:text-white hover:border-white"
              onClick={() => setNavbarOpen(false)}
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;
