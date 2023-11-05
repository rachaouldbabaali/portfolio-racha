import React from "react";
import NavLink from "./NavLink";

const MenuOverlay = ({ links }) => {

  const scrollToHash = (hash) => {
    const el = document.querySelector(hash);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <ul className="flex flex-col py-4 items-center">
      {links.map((link, index) => (
        <li key={index} onClick={() => scrollToHash(link.path)} className="cursor-pointer block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white" >
          {link.title}
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;