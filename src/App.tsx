import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logoImage from "./assets/logo-removebg-preview.png";
import studioImage from "./assets/studio.jpeg";
import codeImage from "./assets/code.jpeg";
import { ChevronRight } from "lucide-react";
import PlatformSupport from "./PlatformSupport";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

// const typewriter = {
//   hidden: { width: "0%" },
//   visible: {
//     width: "100%",
//     transition: {
//       duration: 1.5,
//       ease: "easeInOut",
//     },
//   },
// };

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const staggerChildren = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const titleVariants = {
  initial: { opacity: 1 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
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
  // {
  //   title: "Tech Agnostic",
  //   description: [
  //     "Intelligent user flow breakdown",
  //     "Automated step-by-step execution",
  //     "Seamless navigation across mobile screens",
  //     "Handling of unexpected pop-ups",
  //   ],
  //   imageUrl: `${studioImage}`,
  // },
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
      <h2 className="text-6xl font-semibold mb-16 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-500">
        Key Features
      </h2>
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

// const Rocket: React.FC<{ style?: React.CSSProperties }> = ({ style }) => (
//   <svg
//     width="40"
//     height="40"
//     viewBox="0 0 24 24"
//     fill="none"
//     xmlns="http://www.w3.org/2000/svg"
//     style={style}
//   >
//     <path d="M12 2L8 6H16L12 2Z" fill="#FF6B6B" />
//     <path d="M8 6V16H16V6H8Z" fill="#4ECDC4" />
//     <path d="M10 16L8 20L12 18L16 20L14 16H10Z" fill="#FF6B6B" />
//   </svg>
// );

// const Satellite: React.FC<{ style?: React.CSSProperties }> = ({ style }) => (
//   <svg
//     width="40"
//     height="40"
//     viewBox="0 0 24 24"
//     fill="none"
//     xmlns="http://www.w3.org/2000/svg"
//     style={style}
//   >
//     <path d="M4 10L8 6L12 10L8 14L4 10Z" fill="#FFD93D" />
//     <path d="M12 10L16 6L20 10L16 14L12 10Z" fill="#FFD93D" />
//     <path d="M8 14L12 18L16 14H8Z" fill="#6C5CE7" />
//   </svg>
// );

const Moon: React.FC<{ opacity: number }> = ({ opacity }) => (
  <div
    className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-[800px] h-[400px] overflow-hidden transition-opacity duration-500"
    style={{ opacity }}
  >
    <div className="relative w-[800px] h-[800px]">
      {/* Dark side of the moon */}
      <div className="absolute inset-0 bg-gray-950 rounded-full" />

      {/* Glowing edge */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-l from-transparent via-gray-800 to-gray-950 animate-pulse" />

      {/* Extra glow effect */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-l from-cyan-500 via-transparent to-transparent opacity-20 animate-pulse" />

      {/* Craters */}
      <div className="absolute top-1/4 left-1/4 w-24 h-24 rounded-full bg-gray-900 opacity-30" />
      <div className="absolute top-2/3 left-1/3 w-16 h-16 rounded-full bg-gray-900 opacity-30" />
      <div className="absolute top-1/2 left-2/3 w-32 h-32 rounded-full bg-gray-900 opacity-30" />

      {/* Logo */}
      <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[200px] flex items-center justify-center">
        <img
          src={logoImage}
          alt="Stark Vision Logo"
          className="w-full h-auto max-w-[240px] max-h-[240px] object-contain invert"
        />
      </div>
    </div>
  </div>
);

const StarkVisionLandingPage: React.FC = () => {
  const [showFullTitle, setShowFullTitle] = useState(false);
  const [stars, setStars] = useState<React.ReactNode[]>([]);
  const [spaceElements] = useState<React.ReactNode[]>([]);
  const [moonOpacity, setMoonOpacity] = useState(1);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const titleTimer = setTimeout(() => setShowFullTitle(true), 2000);
    return () => clearTimeout(titleTimer);
  }, []);

  useEffect(() => {
    const generateStars = () => {
      const starCount = 200;
      const newStars = [];
      for (let i = 0; i < starCount; i++) {
        const style: React.CSSProperties = {
          position: "absolute",
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          width: `${Math.random() * 2 + 1}px`,
          height: `${Math.random() * 2 + 1}px`,
          backgroundColor: "white",
          borderRadius: "50%",
          opacity: Math.random() * 0.7 + 0.3,
          animation: `twinkle ${Math.random() * 3 + 2}s ease-in-out infinite`,
        };
        newStars.push(<div key={`star-${i}`} style={style} />);
      }
      setStars(newStars);
    };

    // const generateSpaceElements = () => {
    //   const elements = [];
    //   for (let i = 0; i < 3; i++) {
    //     const style: React.CSSProperties = {
    //       position: "absolute",
    //       top: `${Math.random() * 100}%`,
    //       left: `${Math.random() * 100}%`,
    //       transform: `rotate(${Math.random() * 360}deg)`,
    //       animation: `float ${Math.random() * 10 + 20}s linear infinite`,
    //     };
    //     elements.push(<Rocket key={`rocket-${i}`} style={style} />);
    //   }
    //   for (let i = 0; i < 2; i++) {
    //     const style: React.CSSProperties = {
    //       position: "absolute",
    //       top: `${Math.random() * 100}%`,
    //       left: `${Math.random() * 100}%`,
    //       animation: `orbit ${Math.random() * 30 + 60}s linear infinite`,
    //     };
    //     elements.push(<Satellite key={`satellite-${i}`} style={style} />);
    //   }

    //   setSpaceElements(elements);
    // };

    generateStars();
    // generateSpaceElements();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const headerHeight = headerRef.current?.offsetHeight || 0;
      const opacity = Math.max(0, 1 - scrollPosition / headerHeight);
      setMoonOpacity(opacity);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center relative overflow-hidden">
      <div className="fixed inset-0 overflow-hidden">
        {stars}
        {spaceElements}
      </div>

      <div
        ref={headerRef}
        className="w-full max-w-6xl px-4 py-8 text-center relative z-10"
      >
        <motion.header
          initial="hidden"
          animate="visible"
          variants={staggerChildren}
          className="mb-16"
        >
          <h1 className="text-7xl font-bold mb-6 h-[140px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              {!showFullTitle ? (
                <motion.span
                  key="short"
                  variants={titleVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 0.5 }}
                  className="text-blue-400"
                >
                  Stark Vision
                </motion.span>
              ) : (
                <motion.span
                  key="full"
                  variants={titleVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 0.5 }}
                  className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text"
                >
                  Appium Stark Vision
                </motion.span>
              )}
            </AnimatePresence>
          </h1>

          <section className="mb-16 mt-20 lg:min-h-[36rem]">
            <motion.h2
              className="text-3xl font-semibold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-500"
              variants={scaleIn}
            >
              AI powered Mobile Apps Testing
            </motion.h2>
            <motion.p
              className="text-3xl text-cyan-300 mb-8"
              variants={fadeInUp}
            >
              Tech Agnostic, Autonomous Testing
            </motion.p>
            {/* <motion.div className="overflow-hidden" variants={scaleIn}>
              <p className="text-3xl text-gray-300 mb-8 whitespace-nowrap">
                Tech Agnostic, Autonomous Testing
              </p>
            </motion.div> */}
          </section>
        </motion.header>
      </div>
      <Moon opacity={moonOpacity} />
      <div className="w-full max-w-6xl px-4">
        <motion.main
          initial="hidden"
          animate="visible"
          variants={staggerChildren}
        >
          <FeaturesSection features={features} />
          <PlatformSupport />
          <motion.section className="mb-16" variants={fadeIn}>
            <h2 className="text-5xl font-semibold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-red-500">
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
        </motion.main>

        <motion.footer
          variants={fadeIn}
          className="text-center text-gray-400 py-8"
        >
          <p>&copy; 2024 Appium Stark Vision. All rights reserved.</p>
        </motion.footer>
      </div>
    </div>
  );
};

export default StarkVisionLandingPage;
