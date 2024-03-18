import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Header = () => {
  const buttonVariants = {
    hover: { scale: 1.1 },
  };

  return (
    <nav className="bg-gray-800 py-4 pr-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-white font-bold text-xl mb-4 md:mb-0 pl-10">CryptoTracker</div>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <motion.div
            variants={buttonVariants}
            whileHover="hover"
            className="text-white hover:text-gray-300 transition duration-200"
          >
            <Link to="/">Home</Link>
          </motion.div>
          <motion.div
            variants={buttonVariants}
            whileHover="hover"
            className="text-white hover:text-gray-300 transition duration-200"
          >
            <Link to="/coins">Coins</Link>
          </motion.div>
          <motion.div
            variants={buttonVariants}
            whileHover="hover"
            className="text-white hover:text-gray-300 transition duration-200"
          >
            <Link to="/Exchanges">Exchanges</Link>
          </motion.div>
          <motion.div
            variants={buttonVariants}
            whileHover="hover"
            className="text-white hover:text-gray-300 transition duration-200"
          >
            <Link to="/News">News</Link>
          </motion.div>
          <motion.div
            variants={buttonVariants}
            whileHover="hover"
            className="text-white hover:text-gray-300 transition duration-200"
          >
            <Link to="/CurrencyConverter">Currency-Converter</Link>
          </motion.div>
        </div>
      </div>
    </nav>
  );
};

export default Header;