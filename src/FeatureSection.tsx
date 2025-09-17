import { motion } from 'framer-motion';
import codeImage from './assets/code.jpg';
import studioImage from './assets/studio.png';

const FeatureSection = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold mb-16 text-center text-white tracking-widest"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          KEY FEATURES
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={studioImage}
              alt="AI Studio"
              className="rounded-lg shadow-lg"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold mb-2 text-purple-400">
              Stark Vision AI Studio
            </h3>
            <p className="text-xl text-gray-400 mb-6">
              Your Intelligent Testing Command Center
            </p>
            <ul className="space-y-4 text-lg text-gray-300">
              <li className="flex items-start">
                <svg
                  className="w-6 h-6 text-green-400 mr-3 mt-1 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span>
                  <span className="font-semibold text-white">
                    Intelligent User Flow Analysis:
                  </span>{' '}
                  Analyzes and deconstructs complex user journeys automatically.
                </span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-6 h-6 text-green-400 mr-3 mt-1 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span>
                  <span className="font-semibold text-white">
                    Automated Step-by-Step Execution:
                  </span>{' '}
                  Executes test scenarios with full automation.
                </span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-6 h-6 text-green-400 mr-3 mt-1 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span>
                  <span className="font-semibold text-white">
                    Seamless Cross-Screen Navigation:
                  </span>{' '}
                  Navigates seamlessly across different app screens and states.
                </span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-6 h-6 text-green-400 mr-3 mt-1 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span>
                  <span className="font-semibold text-white">
                    Robust Pop-up and Alert Handling:
                  </span>{' '}
                  Handles unexpected pop-ups, alerts, and interruptions intelligently.
                </span>
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={codeImage}
              alt="Flexible Deployment"
              className="rounded-lg shadow-lg"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold mb-2 text-purple-400">
              Flexible Deployment
            </h3>
            <p className="text-xl text-gray-400 mb-6">
              Host Stark Vision on Your Own Infrastructure
            </p>
            <ul className="space-y-4 text-lg text-gray-300">
              <li className="flex items-start">
                <svg
                  className="w-6 h-6 text-green-400 mr-3 mt-1 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span>
                  <span className="font-semibold text-white">
                    On-Premise Hosting:
                  </span>{' '}
                  Deploy Stark Vision within your own private cloud or
                  on-premise servers for maximum security and control.
                </span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-6 h-6 text-green-400 mr-3 mt-1 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span>
                  <span className="font-semibold text-white">
                    Data Privacy:
                  </span>{' '}
                  Keep all your test data, reports, and sensitive information
                  within your own network.
                </span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-6 h-6 text-green-400 mr-3 mt-1 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span>
                  <span className="font-semibold text-white">
                    Custom Integrations:
                  </span>{' '}
                  Seamlessly integrate with your existing internal tools and
                  CI/CD pipelines.
                </span>
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            className="md:order-2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={codeImage}
              alt="AI-Native Visual Interaction"
              className="rounded-lg shadow-lg"
            />
          </motion.div>
          <motion.div
            className="md:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold mb-2 text-purple-400">
              AI-Native Visual Interaction
            </h3>
            <p className="text-xl text-gray-400 mb-6">
              See Your App The Way Your Users Do
            </p>
            <ul className="space-y-4 text-lg text-gray-300">
              <li className="flex items-start">
                <svg
                  className="w-6 h-6 text-green-400 mr-3 mt-1 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span>
                  <span className="font-semibold text-white">
                    Screen-Based Navigation:
                  </span>{' '}
                  Interacts with your app based on what's visually on the
                  screen, just like a real user.
                </span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-6 h-6 text-green-400 mr-3 mt-1 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span>
                  <span className="font-semibold text-white">
                    Hierarchy-Free Interaction:
                  </span>{' '}
                  Frees you from relying on fragile UI element hierarchies and
                  locators.
                </span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-6 h-6 text-green-400 mr-3 mt-1 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span>
                  <span className="font-semibold text-white">
                    Identifier-less Testing:
                  </span>{' '}
                  No more hunting for element IDs, names, or XPaths.
                </span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-6 h-6 text-green-400 mr-3 mt-1 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span>
                  <span className="font-semibold text-white">
                    Automatic UI Adaptation:
                  </span>{' '}
                  Seamlessly adapts to changes in your app's UI without breaking
                  tests.
                </span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
