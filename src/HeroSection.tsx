import { motion } from 'framer-motion';
import YouTubePlayer from './YouTubePlayer';

const HeroSection = () => {
  return (
    <header id="home" className="relative text-white py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              Vision AI Native Mobile App Testing Agent
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl font-semibold text-purple-400 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 1 }}
            >
              From the contributors of Appium
            </motion.p>
            <motion.p
              className="text-lg md:text-xl max-w-3xl mx-auto md:mx-0 mb-10 text-gray-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
            >
              StarkVision understands the screen as human being would, enabling
              you to go above and beyond locators
            </motion.p>
            <motion.p
              className="text-lg md:text-xl max-w-3xl mx-auto md:mx-0 mb-10 text-gray-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
            >
              Host it on your own infrastructure for maximum security and
              control.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 1 }}
            >
              <a
                href="#contact"
                className="px-8 py-4 bg-purple-600 text-white font-bold rounded-full hover:bg-purple-700 transform transition-transform duration-300 ease-in-out"
              >
                Schedule a Demo
              </a>
            </motion.div>
          </motion.div>
          <motion.div
            className="w-full"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="aspect-w-16 aspect-h-9">
              <YouTubePlayer videoId="SOWxNVmNvVw" />
            </div>
          </motion.div>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
