import React, { useState } from "react";
import { Menu, X } from "lucide-react";

interface NavItemProps {
  children: React.ReactNode;
  href: string;
  onClick?: () => void;
  isMobile?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({
  children,
  href,
  onClick,
  isMobile = false,
}) => (
  <li
    className={`text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-purple-500 to-blue-700 transition-colors duration-300 ${
      isMobile ? "w-full" : ""
    }`}
  >
    <a
      href={href}
      onClick={(e) => {
        smoothScroll(e, href);
        if (onClick) onClick();
      }}
      className={`block py-3 px-6 text-base font-bold tracking-widest ${
        isMobile ? "text-center hover:bg-gray-800" : ""
      }`}
    >
      {children}
    </a>
  </li>
);

const smoothScroll = (
  e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  target: string
) => {
  e.preventDefault();
  const element = document.querySelector(target);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-90">
      <ul className="hidden md:flex justify-center items-center h-16 text-sm font-medium">
        <NavItem href="#home">HOME</NavItem>
        <NavItem href="#features">KEY FEATURES</NavItem>
        <NavItem href="#waitlist">JOIN THE WAITLIST</NavItem>
      </ul>

      <div className="md:hidden flex justify-end items-center h-16 px-4">
        <button
          onClick={toggleMenu}
          className="text-white hover:text-[#CB6CE6] transition-colors duration-300"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-black bg-opacity-95">
          <ul className="flex flex-col items-center py-4">
            <NavItem href="#home" onClick={closeMenu} isMobile>
              HOME
            </NavItem>
            <NavItem href="#features" onClick={closeMenu} isMobile>
              KEY FEATURES
            </NavItem>
            <NavItem href="#waitlist" onClick={closeMenu} isMobile>
              JOIN THE WAITLIST
            </NavItem>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
