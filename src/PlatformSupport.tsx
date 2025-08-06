import { motion } from "framer-motion";
import androidLogo from "./assets/android.svg";
import iosLogo from "./assets/apple.svg";
import flutterLogo from "./assets/flutter.svg";
import reactNativeLogo from "./assets/react.svg";
import swiftLogo from "./assets/swift.svg";

const platforms = [
  { src: iosLogo, name: "iOS" },
  { src: androidLogo, name: "Android" },
  { src: reactNativeLogo, name: "React Native" },
  { src: swiftLogo, name: "Swift" },
  { src: flutterLogo, name: "Flutter" },
];

const PlatformSupport = () => {
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
        Cross Platform Excellence
      </motion.h2>
      <p className="text-xl text-gray-400 mb-6 text-center">
        Test your native and hybrid apps with a single, powerful solution.
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
            <span className="font-semibold text-white">Native iOS & Android:</span>{" "}
            Full support for applications built in Swift, Objective-C, Kotlin, and Java.
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
            <span className="font-semibold text-white">React Native:</span>{" "}
            Seamlessly test your cross-platform React Native applications.
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
            <span className="font-semibold text-white">Flutter:</span>{" "}
            Comprehensive testing for your Flutter-based apps on both platforms.
          </span>
        </li>
      </ul>
      <div className="flex justify-center items-center space-x-8 mt-8">
        {platforms.map((platform, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ delay: index * 0.2 }}
          >
            <img
              src={platform.src}
              alt={platform.name}
              className="h-12 mb-2"
            />
            <span className="text-white text-sm">{platform.name}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PlatformSupport;
