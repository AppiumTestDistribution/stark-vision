import React from "react";
import { motion } from "framer-motion";
import codeImage from "./assets/code.jpg";
import CloudLogosSection from "./CloudLogosSection";
import YouTubePlayer from "./YouTubePlayer";

const FeatureSection = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-16" style={{
      backgroundColor: '#363684',
      opacity: 1,
      willChange: 'transform',
      transform: 'none'
    }}  id="features">
      <div className="container mx-auto px-4 py-20">
        <motion.h2
          className="text-4xl font-bold mb-16 text-center text-white"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          KEY FEATURES
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <YouTubePlayer />
          <div>
            <h3 className="text-3xl font-bold mb-6 text-[#5FD3F3]">
              AI Studio
            </h3>
            <ul className="space-y-7">
              <FeatureItem>Intelligent user flow breakdown</FeatureItem>
              <FeatureItem>Automated step-by-step execution</FeatureItem>
              <FeatureItem>
                Seamless navigation across mobile screens
              </FeatureItem>
              <FeatureItem>Handling of unexpected pop-ups</FeatureItem>
            </ul>
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <div>
            <h3 className="text-3xl font-bold mb-6 text-[#E0B0FF]">
              AI-Powered Visual
              <br />
              Interaction
            </h3>
            <ul className="space-y-7">
              <FeatureItem>Utilizes screen output for navigation</FeatureItem>
              <FeatureItem>Eliminates UI hierarchy dependencies</FeatureItem>
              <FeatureItem>No need for element identifiers</FeatureItem>
              <FeatureItem>Adapts to UI changes automatically</FeatureItem>
            </ul>
          </div>
          <div className="bg-[#1E1E1E] rounded-lg p-4 shadow-lg">
            <img
              src={codeImage}
              alt="AI Studio"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </motion.div>

        <CloudLogosSection />
      </div>
    </section>
  );
};

const FeatureItem = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-center space-x-3">
    <svg
      className="flex-shrink-0 w-8 h-8 text-[#5FD3F3]"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
        clipRule="evenodd"
      ></path>
    </svg>
    <span>{children}</span>
  </li>
);

export default FeatureSection;
