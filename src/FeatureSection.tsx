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
      backgroundColor: 'rgb(65 80 224)',
      opacity: 1,
      willChange: 'transform',
      transform: 'none'
    }}  id="features">
      <div className="container mx-auto px-4 py-20">
        <motion.h2
          className="text-4xl font-bold mb-16 text-center text-white tracking-widest"
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
            <h3 className="text-3xl font-bold mb-10 mt-8 text-[#5FD3F3]">
              AI Studio
            </h3>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-start space-x-2">
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
                <div className="text-white-200 text-lg">
                  Intelligent user flow breakdown
                </div>
              </div>

              <div className="flex items-start space-x-2">
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
                <div className="text-white-200 text-lg">
                  Automated step-by-step execution
                </div>
              </div>

              <div className="flex items-start space-x-2">
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
                <div className="text-white-200 text-lg">
                  Seamless navigation across mobile screens
                </div>
              </div>

              <div className="flex items-start space-x-2">
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
                <div className="text-white-200 text-lg">
                  Handling of unexpected pop-ups
                </div>
              </div>
            </div>

          </div>
        </motion.div>

        <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
        >
          <div>
            <div className="max-w-lg mx-auto">
              <h3 className="text-3xl font-bold mb-10 mt-8 text-[#5FD3F3]">
                AI-Powered Visual Interaction
              </h3>

              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-start space-x-2">
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
                  <div className="text-white-200 text-lg">
                    Utilizes screen output for navigation
                  </div>
                </div>

                <div className="flex items-start space-x-2">
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
                  <div className="text-white-200 text-lg">
                    Eliminates UI hierarchy dependencies
                  </div>
                </div>

                <div className="flex items-start space-x-2">
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
                  <div className="text-white-200 text-lg">
                    No need for element identifiers
                  </div>
                </div>

                <div className="flex items-start space-x-2">
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
                  <div className="text-white-200 text-lg">
                    Adapts to UI changes automatically
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#1E1E1E] rounded-lg p-4 shadow-lg">
            <img
                src={codeImage}
                alt="AI Studio"
                className="w-full rounded-lg shadow-lg"
            />
          </div>
        </motion.div>

        <CloudLogosSection/>
      </div>
    </section>
  );
};

export default FeatureSection;
