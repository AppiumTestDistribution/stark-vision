import React from "react";
import { motion } from "framer-motion";
import { Apple, Code } from "lucide-react";

const SwiftIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M21.984 16.348c.056-.112.056-.224.112-.336 1.346-5.272-1.851-11.44-7.347-14.693 2.412 3.253 3.365 7.122 2.524 10.599-.056.28-.168.617-.28.897a5.173 5.173 0 0 1-.45-.28S11.104 9.17 5.273 3.282c-.169-.168 3.14 4.71 6.841 8.58-1.738-1.01-6.673-4.542-9.758-7.403.337.617.842 1.234 1.346 1.851 2.58 3.309 5.945 7.346 9.983 10.43-2.86 1.74-6.842 1.851-10.88 0-1.01-.448-1.85-1.009-2.804-1.682 1.682 2.636 4.318 5.048 7.459 6.337 3.757 1.627 7.57 1.515 10.318.112h.057c.112-.056.224-.112.336-.224 1.346-.673 3.982-1.402 5.44 1.402.392.785 1.121-2.86-1.626-6.337z" />
  </svg>
);

const AndroidIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4483-.9993.9993-.9993c.5511 0 .9993.4483.9993.9993.0001.5511-.4482.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4483.9993.9993 0 .5511-.4483.9997-.9993.9997m11.4045-6.02l1.9973-3.45a.416.416 0 00-.1521-.5676.416.416 0 00-.5676.1521l-2.0223 3.50337C15.5902 8.4837 13.8533 8.0003 12 8.0003s-3.5902.4834-5.1367.97937l-2.0223-3.50337a.4161.4161 0 00-.5677-.1521.4157.4157 0 00-.1521.5676l1.9973 3.45C4.0053 10.8222 2.5 13.1853 2.5 15.8468v2.742c0 .8412.6841 1.5253 1.5253 1.5253h1.4247v2.9087c0 .8411.6841 1.5253 1.5253 1.5253h1.3413c.8412 0 1.5253-.6842 1.5253-1.5253v-2.9087h5.3067v2.9087c0 .8411.6841 1.5253 1.5253 1.5253h1.3413c.8412 0 1.5253-.6842 1.5253-1.5253v-2.9087h1.4247c.8412 0 1.5253-.6841 1.5253-1.5253v-2.742c0-2.6615-1.5053-5.0246-3.7233-6.5254z" />
  </svg>
);

const FlutterIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M14.314 0L2.3 12 6 15.7 21.684.012h-7.357L14.314 0zm.014 11.072l-6.471 6.457 6.47 6.47H21.7l-6.46-6.468 6.46-6.46h-7.371z" />
  </svg>
);

const platforms = [
  { name: "iOS", icon: Apple },
  { name: "Android", icon: AndroidIcon },
  { name: "React Native", icon: Code },
  { name: "Swift", icon: SwiftIcon },
  { name: "Flutter", icon: FlutterIcon },
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

const PlatformSupport: React.FC = () => {
  return (
    <section className="relative py-20 bg-gradient-to-r from-blue-900 to-black-200 overflow-hidden">
      <StarryBackground />
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          className="text-2xl font-semibold mb-12 text-center text-white uppercase tracking-wider"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Cross-Platform Mobile Testing Excellence
        </motion.h2>
        <motion.div
          className="flex justify-center items-center space-x-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {platforms.map((platform, index) => (
            <motion.div
              key={platform.name}
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
            >
              <platform.icon className="w-12 h-12 text-white mb-2" />
              <span className="text-sm text-white">{platform.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PlatformSupport;
