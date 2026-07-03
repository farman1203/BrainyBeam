import { motion } from 'framer-motion';

function About() {
  return (
    <main className="page container">
      <motion.div
        className="page__content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <h1>About</h1>
        <p>
          This demo highlights micro animation patterns for a product landing page: floating cards, button responses and smooth navigation.
        </p>
      </motion.div>
    </main>
  );
}

export default About;
