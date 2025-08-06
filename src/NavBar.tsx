import { Menu, X } from "lucide-react";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import logoImage from './assets/sv2.png';

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
}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const isLandingPage = location.pathname === "/";

  const handleClick = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    if (href.startsWith("#")) {
      if (!isLandingPage) {
        await navigate("/");
        setTimeout(() => {
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
            window.history.replaceState(null, "", href);
          }
        }, 100);
      } else {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
          window.history.replaceState(null, "", href);
        }
      }
    } else {
      navigate(href);
    }

    if (onClick) onClick();
  };

  return (
    <li
      className={`text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-purple-500 to-blue-700 transition-colors duration-300 ${
        isMobile ? "w-full" : ""
      }`}
    >
      <a
        href={href}
        onClick={handleClick}
        className={`block py-3 px-6 text-base font-bold tracking-widest ${
          isMobile ? "text-center hover:bg-gray-800" : ""
        } ${
          location.hash === href
            ? "text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-700"
            : ""
        }`}
      >
        {children}
      </a>
    </li>
  );
};

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isLandingPage = location.pathname === "/";

  React.useEffect(() => {
    if (location.hash && isLandingPage) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    }
  }, [location.hash, isLandingPage]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navItems = [
    { href: isLandingPage ? "#home" : "/", label: "HOME" },
    { href: isLandingPage ? "#features" : "/#features", label: "KEY FEATURES" },
    { href: "/how-to-use", label: "HOW TO USE" },
    {
      href: isLandingPage ? "#contact" : "/#contact",
      label: "SCHEDULE DEMO",
    },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="container mx-auto flex justify-center items-center h-16 px-4">
        <a href={isLandingPage ? "#home" : "/"} className="flex items-center mr-8">
          <img src={logoImage} alt="Stark Vision Logo" className="h-12" />
        </a>
        <ul className="hidden md:flex justify-center items-center h-16 text-sm font-medium">
          {navItems.map((item) => (
            <NavItem key={item.href} href={item.href}>
              {item.label}
            </NavItem>
          ))}
        </ul>

        <div className="md:hidden flex justify-end items-center h-16">
          <button
            onClick={toggleMenu}
            className="text-white hover:text-[#CB6CE6] transition-colors duration-300"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-black bg-opacity-95">
          <ul className="flex flex-col items-center py-4">
            {navItems.map((item) => (
              <NavItem
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                isMobile
              >
                {item.label}
              </NavItem>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
