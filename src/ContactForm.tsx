import { motion } from 'framer-motion';
import { InlineWidget } from 'react-calendly';

const ContactForm = () => {
  return (
    <motion.section
      id="contact"
      className="py-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto px-4 text-center">
<div className="w-full max-w-3xl mx-auto bg-white/5 rounded-lg overflow-hidden backdrop-blur-sm">
          <InlineWidget
            url="https://calendly.com/atddevs/30min"
            styles={{
              height: "650px",
              width: "100%",
            }}
          />
        </div>
      </div>
    </motion.section>
  );
};

export default ContactForm;
