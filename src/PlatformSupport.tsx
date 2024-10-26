import { motion } from "framer-motion";
import react from "./assets/react.svg";
import flutter from "./assets/flutter.svg";
import swift from "./assets/swift.svg";
import android from "./assets/android.svg";
import apple from "./assets/apple.svg";

const platforms = [
  {
    name: "iOS",
    Icon: apple,
    className: "text-white",
  },
  {
    name: "Android",
    Icon: android,
    className: "text-white",
  },
  {
    name: "React Native",
    Icon: react,
    className: "text-white",
  },
  {
    name: "Swift",
    Icon: swift,
    className: "text-white",
  },
  {
    name: "Flutter",
    Icon: flutter,
    className: "text-white",
  },
];

const StarryBackground = () => (
  <div className="absolute inset-0 overflow-hidden">
    {[...Array(50)].map((_, i) => (
      <div
        key={i}
        className="absolute bg-white rounded-full"
        style={{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          width: `${Math.random() * 2 + 1}px`,
          height: `${Math.random() * 2 + 1}px`,
          opacity: Math.random() * 0.7 + 0.3,
        }}
      />
    ))}
  </div>
);

const PlatformSupport = () => {
  return (
    <section className="relative py-12 md:py-20 overflow-hidden">
      <StarryBackground />
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          className="text-2xl md:text-3xl font-bold text-center text-cyan-400 mb-8 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Cross Platform Excellence
        </motion.h2>
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:flex lg:justify-center gap-8 md:gap-12 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {platforms.map((platform, index) => (
            <motion.div
              key={platform.name}
              className="flex flex-col items-center space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
            >
              <div
                className={`w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 ${platform.className}`}
              >
                <img
                  src={platform.Icon}
                  alt={`${platform.name} icon`}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-base md:text-lg lg:text-xl font-medium text-white text-center whitespace-nowrap">
                {platform.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PlatformSupport;
