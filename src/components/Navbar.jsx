import React from "react";
import logo from "../assets/kevinRushLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaMailBulk, FaStickyNote } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-10" src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-3xl">
        <a href="https://www.linkedin.com/in/nathan-jason-lowen-43218b25b/" target="_blank">
          <FaLinkedin />
        </a>
        <a href="https://github.com/JasonLowen" target="_blank">
          <FaGithub />
        </a>
        <a href="mailto:nathan.lowen@binus.ac.id" target="_blank">
          <FaMailBulk />
        </a>
        <a href="/Nathan Jason Lowen - Updated CV.pdf" download={true} target="_blank" rel="noreferrer">
          <FaStickyNote />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
