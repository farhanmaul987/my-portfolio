import { useState } from "react";
import { RiMenu3Fill, RiCloseFill } from "@remixicon/react";
import { motion } from "framer-motion";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <div className="fixed top-0 z-[998] w-full max-w-full">
        {/* Navbar */}
        <nav className="flex h-20 items-center justify-between bg-srBlack px-6 text-white md:px-12 lg:px-16">
          <a href="#">
            <h5 className="heading-5">
              My <span className="text-prLavender">Portofolio</span>
            </h5>
          </a>

          {/* Desktop Menu */}
          <ul className="hidden space-x-6 text-[17px] font-semibold md:flex">
            <li>
              <a href="#hero" className="hover:text-prLavender">
                Home
              </a>
            </li>
            <li>
              <a href="#aboutMe" className="hover:text-prLavender">
                About
              </a>
            </li>
            <li>
              <a href="#project" className="hover:text-prLavender">
                Project
              </a>
            </li>
            <li>
              <a href="#contactPerson" className="contactMe">
                Contact Me
              </a>
            </li>
          </ul>
          {/* End Desktop Menu */}

          {/* Mobile Menu Button */}
          <button
            className="text-white md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <RiCloseFill size={28} /> : <RiMenu3Fill size={28} />}
          </button>
          {/* End Mobile Menu Button */}
        </nav>
        {/* End Navbar */}

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute left-0 top-20 w-full bg-srBlack text-white md:hidden"
          >
            <ul className="flex flex-col space-y-6 px-6 py-6 text-right text-[17px] font-semibold">
              <li>
                <a
                  href="#hero"
                  className="hover:text-prLavender"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#aboutMe"
                  className="hover:text-prLavender"
                  onClick={() => setIsOpen(false)}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#project"
                  className="hover:text-prLavender"
                  onClick={() => setIsOpen(false)}
                >
                  Project
                </a>
              </li>
              <li>
                <a
                  href="#contactPerson"
                  className="hover:text-prLavender"
                  onClick={() => setIsOpen(false)}
                >
                  Contact Me
                </a>
              </li>
            </ul>
          </motion.div>
        )}
        {/* End Mobile Dropdown Menu */}
      </div>
    </header>
  );
}

export default Navbar;
