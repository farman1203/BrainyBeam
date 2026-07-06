import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';

function About() {
  return (
    <main className="page container">
      <Helmet>
        <title>About </title>
        <meta name="description" content="Learn how this Task 661 demo focuses on navigation, responsive layouts, and SEO-friendly pages." />
        <meta name="keywords" content="about, task 661, React Vite demo" />
      </Helmet>

      <motion.div
        className="page__content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <h1>About</h1>
        <p>
          This demo highlights breadcrumb navigation, wishlist state, responsive checkout design, and SEO enhancements in a focused React app.
        </p>
      </motion.div>
    </main>
  );
}

export default About;
