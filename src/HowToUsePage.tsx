import { motion } from "framer-motion";
import NavBar from "./NavBar";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const HowToUsePage = () => {
  return (
    <div className="min-h-screen bg-black text-white font-['Open Sans']">
      <NavBar />

      <div className="relative">
        <motion.div
          className="max-w-4xl mx-auto px-4 pt-24 pb-16"
          variants={fadeIn}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-500 to-blue-700 bg-clip-text text-transparent mb-4">
              Stark Vision Documentation 🚀
            </h1>
            <p className="text-gray-300 text-lg">
              AI-powered mobile test automation framework that transforms mobile
              app testing!
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-6 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="bg-gradient-to-br from-purple-500/10 to-blue-700/10 rounded-lg p-6 border border-purple-500/20">
              <h3 className="text-xl font-semibold text-white mb-3">
                🤖 AI-Powered Automation
              </h3>
              <p className="text-gray-300">
                Automate mobile apps effortlessly without relying on traditional
                locators.
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-500/10 to-blue-700/10 rounded-lg p-6 border border-purple-500/20">
              <h3 className="text-xl font-semibold text-white mb-3">
                📝 Natural Language Testing
              </h3>
              <p className="text-gray-300">
                Write test cases in simple natural language, and let AI handle
                the complexities.
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-500/10 to-blue-700/10 rounded-lg p-6 border border-purple-500/20">
              <h3 className="text-xl font-semibold text-white mb-3">
                🔄 Native SDK Switching
              </h3>
              <p className="text-gray-300">
                Switch to native SDKs seamlessly for advanced use cases and
                added flexibility.
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-500/10 to-blue-700/10 rounded-lg p-6 border border-purple-500/20">
              <h3 className="text-xl font-semibold text-white mb-3">
                👁️ Vision-Based Testing
              </h3>
              <p className="text-gray-300">
                Perform automation based on visual elements to boost accuracy
                and efficiency.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="mb-12 space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-blue-700 bg-clip-text text-transparent mb-6">
              Getting Started
            </h2>

            <div className="space-y-6">
              {[
                {
                  title: "1. Install Dependencies",
                  code: "npm install stark-vision",
                },
                {
                  title: "2. Running the Appium Server",
                  code: "appium server -pa /wd/hub",
                },
                {
                  title: "3. Running the Stark Server",
                  code: "stark-vision",
                  note: "Default port: 4040 (http://localhost:4040/wd/hub)",
                },
              ].map((step, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-purple-500/10 to-blue-700/10 rounded-lg p-6 border border-purple-500/20"
                >
                  <h3 className="text-xl text-white mb-3">{step.title}</h3>
                  <pre className="bg-gray-900/50 p-4 rounded-lg overflow-x-auto">
                    <code className="text-gray-300">{step.code}</code>
                  </pre>
                  {step.note && (
                    <p className="text-gray-400 mt-2 text-sm">{step.note}</p>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-blue-700 bg-clip-text text-transparent mb-6">
              Configuration Options
            </h2>

            <div className="space-y-6">
              {[
                {
                  title: "Element Visibility Check",
                  code: "await ai('Click on the button', { elementVisibleCheck: false });",
                  description:
                    "Determines whether Stark should check if the element is visible before performing an action.",
                },
                {
                  title: "Save to Cache",
                  code: "await ai('Fetch current data', { saveToCache: false });",
                  description:
                    "Specifies whether the result of Stark's action should be cached for later use.",
                },
                {
                  title: "Scrolling Options",
                  code: "await ai('Scroll until you find the \"Next\" button', { maxScrolls: 5, scrollSize: 'SMALL' });",
                  description:
                    "Controls the scrolling behavior when finding elements not currently in view.",
                },
              ].map((option, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-purple-500/10 to-blue-700/10 rounded-lg p-6 border border-purple-500/20"
                >
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {option.title}
                  </h3>
                  <pre className="bg-gray-900/50 p-4 rounded-lg overflow-x-auto mb-3">
                    <code className="text-gray-300">{option.code}</code>
                  </pre>
                  <p className="text-gray-300">{option.description}</p>
                </div>
              ))}
              <a
                href="https://github.com/AppiumTestDistribution/stark-vision/blob/main/README.md"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-sm text-blue-400 hover:text-blue-300 transition-colors duration-200"
              >
                Check out our GitHub README for more details →
              </a>
            </div>
          </motion.div>
        </motion.div>

        <footer className="bg-black text-center py-6 space-y-2">
          <p className="text-sm text-gray-400">
            &copy; 2024 Stark Vision. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default HowToUsePage;
