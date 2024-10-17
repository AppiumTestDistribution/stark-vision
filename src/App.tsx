import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import logoImage from "./assets/sv2.png";
import { ChevronDown } from "lucide-react";
import PlatformSupport from "./PlatformSupport";
import FeatureSection from "./FeatureSection";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const NavItem: React.FC<{ children: React.ReactNode; href: string }> = ({
  children,
  href,
}) => (
  <li className="text-white hover:text-purple-300 transition-colors duration-300">
    <a
      href={href}
      onClick={(e) => smoothScroll(e, href)}
      className="block py-3 px-6 text-sm font-medium tracking-wider"
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
    <div className="min-h-screen bg-[#000000] text-white font-['Inter',sans-serif]">
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
          className="mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <img src={logoImage} alt="Stark Vision Logo" className="w-[400px]" />
        </motion.div>
        <motion.p
          className="text-xl mb-8 font-light tracking-wider uppercase"
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
            className="bg-gradient-to-r from-[#8A2BE2] to-[#FF69B4] hover:from-[#9400D3] hover:to-[#FF1493] text-sm uppercase"
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
          <h2 className="text-2xl font-semibold mb-4 text-[#E0B0FF] uppercase tracking-wider">
            KEY FEATURES
          </h2>
          <ChevronDown className="w-8 h-8 text-[#E0B0FF] animate-bounce" />
        </motion.div>
      </header>

      <FeatureSection />
      <PlatformSupport />

      <motion.section
        id="waitlist"
        className="min-h-screen flex flex-col items-center justify-center px-4 py-16"
        variants={fadeIn}
        initial="hidden"
        animate="visible"
      >
        <h2 className="text-4xl font-semibold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-[#E0B0FF] to-[#FF69B4]">
          Join the Waitlist
        </h2>
        <div className="w-full max-w-2xl bg-[#1E1E1E] bg-opacity-80 backdrop-blur-sm p-8 rounded-lg shadow-lg border border-[#3D3D3D] overflow-hidden">
          <div className="relative" style={{ height: "600px" }}>
            <iframe
              src="https://app.youform.com/forms/0uzjwfkk"
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

      <footer id="contact" className="text-center py-6 text-sm text-gray-400">
        <p>&copy; 2024 Stark Vision. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default StarkVisionLandingPage;
