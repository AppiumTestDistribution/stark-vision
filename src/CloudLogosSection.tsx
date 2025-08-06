import { motion } from "framer-motion";
import browserstackLogo from "./assets/BS.png";
import lambdatestLogo from "./assets/lambdatest.png";
import pcloudyLogo from "./assets/pcloudy.png";
import saucelabsLogo from "./assets/SL.png";

const logos = [
  { src: browserstackLogo, name: "BrowserStack" },
  { src: lambdatestLogo, name: "LambdaTest" },
  { src: pcloudyLogo, name: "pCloudy" },
  { src: saucelabsLogo, name: "Sauce Labs" },
];

const CloudLogosSection = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div>
      <motion.h2
        className="text-4xl font-bold mb-2 text-center text-purple-400 tracking-widest"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        Cloud Support
      </motion.h2>
      <p className="text-xl text-gray-400 mb-6 text-center">
        Integrate with your favorite cloud-based testing platforms.
      </p>
      <ul className="space-y-4 text-lg text-gray-300 mb-8">
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
            <span className="font-semibold text-white">Seamless Integration:</span>{" "}
            Connect to BrowserStack, Sauce Labs, LambdaTest, and pCloudy with ease.
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
            <span className="font-semibold text-white">Extensive Device Coverage:</span>{" "}
            Test on thousands of real devices and browsers in the cloud.
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
            <span className="font-semibold text-white">Parallel Testing:</span>{" "}
            Run tests concurrently on multiple devices to speed up your release cycles.
          </span>
        </li>
      </ul>
      <div className="flex justify-center items-center space-x-8 mt-8">
        {logos.map((logo, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center text-center"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ delay: index * 0.2 }}
          >
            <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center p-3 shadow-lg">
              <img
                src={logo.src}
                alt={logo.name}
                className="max-h-full max-w-full object-contain"
              />
            </div>
            <p className="mt-2 text-white font-semibold text-sm">
              {logo.name}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CloudLogosSection;
