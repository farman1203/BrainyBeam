import { motion } from 'framer-motion';

function Contact() {
  return (
    <main className="page container">
      <motion.div
        className="page__content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <h1>Contact</h1>
        <p>
          Need help deciding? This section is intentionally minimal to keep the demo focused on UI animation and responsive interactions.
        </p>
      </motion.div>
    </main>
  );
}

export default Contact;
