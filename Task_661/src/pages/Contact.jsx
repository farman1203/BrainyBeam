import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';

function Contact() {
  return (
    <main className="page container">
      <Helmet>
        <title>Contact </title>
        <meta name="description" content="Contact the demo team for support or feedback regarding the Task 661 experience." />
        <meta name="keywords" content="contact, support, React demo" />
      </Helmet>

      <motion.div
        className="page__content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <h1>Contact</h1>
        <p>
          Need help deciding? This section remains intentionally compact so the focus stays on navigation, wishlist, and checkout patterns.
        </p>
      </motion.div>
    </main>
  );
}

export default Contact;
