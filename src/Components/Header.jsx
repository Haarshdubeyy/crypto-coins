import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';


const SideNavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  const navVariants = {
    open: { x: 0, transition: { duration: 0.3 } },
    closed: { x: '-100%', transition: { duration: 0.3 } },
  };

  const linkVariants = {
    open: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    closed: { opacity: 0, y: -20 },
  };

  return (
    <div className="fixed top-0 left-0 z-50">
      <button
        className="p-4 bg-gray-800 text-white focus:outline-none"
        onClick={toggleNav}
      >
        <svg
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
          />
        </svg>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={navVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="bg-gray-800 text-white p-6 h-screen w-64"
          >
            <div className="text-xl font-bold mb-8">Navigation</div>
            <motion.div
              variants={linkVariants}
              whileHover={{ scale: 1.05 }}
              className="mb-4"
            >
              <Link to="/" onClick={toggleNav} className="text-gray-200 hover:text-white transition duration-200">
                Home
              </Link>
            </motion.div>
            <motion.div
              variants={linkVariants}
              whileHover={{ scale: 1.05 }}
              className="mb-4"
            >
              <Link to="/coins" onClick={toggleNav} className="text-gray-200 hover:text-white transition duration-200">
                Coins
              </Link>
            </motion.div>
            <motion.div
              variants={linkVariants}
              whileHover={{ scale: 1.05 }}
              className="mb-4"
            >
              <Link to="/exchanges" onClick={toggleNav} className="text-gray-200 hover:text-white transition duration-200">
                Exchanges
              </Link>
            </motion.div>
            <motion.div
              variants={linkVariants}
              whileHover={{ scale: 1.05 }}
              className="mb-4"
            >
              <Link to="/news" onClick={toggleNav} className="text-gray-200 hover:text-white transition duration-200">
                News
              </Link>
            </motion.div>
            <motion.div
              variants={linkVariants}
              whileHover={{ scale: 1.05 }}
              className="mb-4"
            >
              <Link to="/CurrencyConverter" onClick={toggleNav} className="text-gray-200 hover:text-white transition duration-200">
                Currency Converter
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SideNavBar;
