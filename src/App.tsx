import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import logoImage from "./assets/sv2.png";
import { ChevronDown } from "lucide-react";
import FeatureSection from "./FeatureSection";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const NavItem: React.FC<{ children: React.ReactNode; href: string }> = ({
  children,
  href,
}) => (
  <li className="text-white hover:text-[#CB6CE6] transition-colors duration-300">
    <a
      href={href}
      onClick={(e) => smoothScroll(e, href)}
      className="block py-3 px-6 text-base font-bold tracking-widest"
    >
      {children}
    </a>
  </li>
);

const Button: React.FC<{
  children: React.ReactNode;
  className?: string;
  href: string;
}> = ({ children, className, href }) => (
  <a
    href={href}
    onClick={(e) => smoothScroll(e, href)}
    className={`px-8 py-3 rounded-full text-white font-semibold transition-all duration-300 cursor-pointer ${className}`}
  >
    {children}
  </a>
);

const smoothScroll = (
  e: React.MouseEvent<HTMLAnchorElement>,
  target: string
) => {
  e.preventDefault();
  const element = document.querySelector(target);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

const StarkVisionLandingPage = () => {
  const [stars, setStars] = useState<
    { top: string; left: string; animationDuration: string }[]
  >([]);

  useEffect(() => {
    const generateStars = () => {
      const starCount = 200;
      const newStars = [];
      for (let i = 0; i < starCount; i++) {
        newStars.push({
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          animationDuration: `${Math.random() * 3 + 2}s`,
        });
      }
      setStars(newStars);
    };

    generateStars();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white font-['Open Sans']">
      <div className="fixed inset-0 overflow-hidden">
        {stars.map((star, index) => (
          <div
            key={index}
            className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
            style={{
              top: star.top,
              left: star.left,
              animationDuration: star.animationDuration,
            }}
          />
        ))}
      </div>

      <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">
        <ul className="flex justify-center items-center h-16 text-sm font-medium">
          <NavItem href="#home">HOME</NavItem>
          <NavItem href="#features">KEY FEATURES</NavItem>
          <NavItem href="#waitlist">JOIN THE WAITLIST</NavItem>
        </ul>
      </nav>

      <header
        id="home"
        className="min-h-screen flex flex-col items-center justify-center text-center relative"
      >
        <motion.div
          className="mb-9"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <img src={logoImage} alt="Stark Vision Logo" className="w-[500px]" />
        </motion.div>
        <motion.p
          className="text-xl mb-16 font-sans tracking-wider"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 1 }}
        >
          AI POWERED MOBILE APP TESTING
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 1 }}
        >
          <Button
            href="#waitlist"
            className="px-9 py-4 rounded-full text-white font-semibold transition-all duration-300 cursor-pointer bg-gradient-to-r from-purple-500 to-blue-700 hover:opacity-90 text-lg uppercase tracking-wider"
          >
            JOIN THE WAITLIST
          </Button>
        </motion.div>
        <motion.div
          className="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          <h2 className="text-2xl font-semibold mb-1 text-[#CB6CE6] uppercase tracking-wider">
          </h2>
          <ChevronDown className="w-12 h-12 text-[#4050e0] animate-bounce" />
        </motion.div>
      </header>

      <FeatureSection />

      <motion.section
        id="waitlist"
        className="bg-black min-h-screen flex flex-col items-center justify-center px-4 py-16"
        variants={fadeIn}
        initial="hidden"
        animate="visible"
      >
        <h2 className="text-4xl font-semibold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-700">
          Join the Waitlist
        </h2>
        <div className="w-full max-w-2xl border-[#3D3D3D] overflow-hidden">
          <div className="relative" style={{ height: "600px" }}>
            <iframe
              src="https://app.youform.com/forms/vkihsce9"
              loading="lazy"
              width="100%"
              height="100%"
              frameBorder="0"
              title="Join Waitlist Form"
              className="absolute inset-0 w-full h-full"
              style={{
                background: "transparent",
                border: "none",
              }}
            />
          </div>
        </div>
      </motion.section>

      <footer
        id="contact"
        className="bg-black text-center py-6 text-sm text-gray-400"
      >
        <p>&copy; 2024 Stark Vision. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default StarkVisionLandingPage;
