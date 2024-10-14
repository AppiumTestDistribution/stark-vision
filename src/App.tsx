import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import logoImage from "./assets/sv2.png";
import studioImage from "./assets/studio.jpeg";
import codeImage from "./assets/code.jpg";
import { ChevronDown, ChevronRight } from "lucide-react";
import PlatformSupport from "./PlatformSupport";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const features = [
  {
    title: "AI Studio",
    description: [
      "Intelligent user flow breakdown",
      "Automated step-by-step execution",
      "Seamless navigation across mobile screens",
      "Handling of unexpected pop-ups",
    ],
    imageUrl: `${studioImage}`,
  },
  {
    title: "AI-Powered Visual Interaction",
    description: [
      "Utilizes screen output for navigation",
      "Eliminates UI hierarchy dependencies",
      "No need for element identifiers",
      "Adapts to UI changes automatically",
    ],
    imageUrl: `${codeImage}`,
  },
];

type FeaturesProps = {
  features: Array<{
    title: string;
    description: string[];
    imageUrl: string;
  }>;
};

const FeaturesSection: React.FC<FeaturesProps> = ({ features }) => {
  const sectionRef = useRef(null);

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section ref={sectionRef} className="mb-24">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerChildren}
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className={`flex flex-col ${
              index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
            } items-center justify-between mb-24`}
            variants={fadeIn}
          >
            <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
              <img
                src={feature.imageUrl}
                alt={feature.title}
                className="rounded-lg shadow-2xl w-full h-auto object-cover"
                style={{ maxHeight: "500px" }}
              />
            </div>
            <div className="w-full lg:w-1/2 lg:px-12">
              <div className="bg-gray-900 bg-opacity-50 backdrop-blur-sm p-8 rounded-lg">
                <h3 className="text-4xl font-semibold mb-6 text-cyan-300">
                  {feature.title}
                </h3>
                <motion.ul className="space-y-4">
                  {feature.description.map((point, pointIndex) => (
                    <motion.li
                      key={pointIndex}
                      className="flex items-start"
                      variants={listItemVariants}
                    >
                      <ChevronRight className="flex-shrink-0 h-6 w-6 text-purple-400 mr-3 mt-1" />
                      <span className="text-gray-100 text-lg leading-relaxed">
                        {point}
                      </span>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

const NavItem: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <li className="text-white hover:text-purple-300 transition-colors duration-300 px-4">
    {children}
  </li>
);

const Button: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className,
}) => (
  <button
    className={`px-6 py-2 rounded-full text-white font-semibold transition-all duration-300 ${className}`}
  >
    {children}
  </button>
);

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

      <nav className="absolute top-0 left-0 right-0 p-6">
        <ul className="flex justify-center space-x-8 text-sm font-medium">
          <NavItem>Home</NavItem>
          <NavItem>Key Features</NavItem>
          <NavItem>About Stark Vision</NavItem>
          <NavItem>Contact</NavItem>
        </ul>
      </nav>

      <header className="min-h-screen flex flex-col items-center justify-center text-center relative">
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <img src={logoImage} alt="Stark Vision Logo" className="w-[400px]" />
        </motion.div>
        <motion.p
          className="text-xl mb-8 font-light tracking-wide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 1 }}
        >
          AI powered Mobile Apps Testing
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 1 }}
        >
          <Button className="bg-gradient-to-r from-[#8A2BE2] to-[#FF69B4] hover:from-[#9400D3] hover:to-[#FF1493] text-sm font-medium py-3 px-8 mb-16">
            JOIN THE WAITLIST
          </Button>
        </motion.div>
        <motion.div
          className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          <h2 className="text-3xl font-semibold mb-4 text-[#E0B0FF]">
            KEY FEATURES
          </h2>
          <ChevronDown className="w-10 h-10 text-white animate-bounce" />
        </motion.div>
      </header>

      <section className="py-20">
        <FeaturesSection features={features} />
        <PlatformSupport />
      </section>

      <motion.section className="mb-16" variants={fadeIn}>
        <h2 className="text-4xl font-semibold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-[#E0B0FF] to-[#FF69B4]">
          Join the Waitlist
        </h2>
        <div className="bg-gray-900 bg-opacity-70 backdrop-blur-sm p-4 rounded-lg shadow-lg border border-gray-700 overflow-hidden">
          <iframe
            src="https://app.youform.com/forms/vkihsce9"
            loading="lazy"
            width="100%"
            height="700"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            title="Join Waitlist Form"
            className="rounded-md"
          ></iframe>
        </div>
      </motion.section>

      <footer className="text-center py-6 text-sm text-gray-400">
        <p>&copy; 2024 Stark Vision. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default StarkVisionLandingPage;
