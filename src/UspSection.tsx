import { motion } from 'framer-motion';

const UspSection = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const usps = [
    {
      title: 'Bring Your Own Token',
      description:
        'A cost-effective solution that uses your own OpenAI/Claude/Gemini token for powerful, accurate Vision AI without the high cost.',
    },
    {
      title: 'Proximity Locators',
      description:
        'Use human-like commands, such as "click the second heart icon," for precise interactions, Say no to DOM locators.',
    },
    {
      title: 'Seamless Code Switching',
      description:
        'Seamlessly switch between Vision AI and native Appium commands in your existing test scripts without rewriting them.',
    },
  ];

  return (
    <section id="usps" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold mb-16 text-center text-white tracking-widest"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          UNIQUE SELLING PROPOSITIONS
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {usps.map((usp, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-8 rounded-lg shadow-lg"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ delay: index * 0.2 }}
            >
              <h3 className="text-2xl font-bold mb-4 text-purple-400">
                {usp.title}
              </h3>
              <p className="text-lg text-gray-300">{usp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UspSection;
