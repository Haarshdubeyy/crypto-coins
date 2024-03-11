
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Header = () => {
  const buttonVariants = {
    hover: { scale: 1.1 },
  };

  return (
    <div className='bg-gradient-to-r from-purple-600 to-indigo-600 shadow shadow-gray-300 w-full px-8 md:px-auto text-white font-mono'>
      <div className='container mx-auto flex justify-center'>
        <motion.button
          variants={buttonVariants}
          whileHover="hover"
          className='md:px-4 md:py-2 hover:text-yellow-300'
        >
          <Link to="/">Home</Link>
        </motion.button>
        <motion.button
          variants={buttonVariants}
          whileHover="hover"
          className='md:px-4 md:py-2 hover:text-yellow-300 p-2'
        >
          <Link to='/coins'>Coins</Link>
        </motion.button>
        <motion.button
          variants={buttonVariants}
          whileHover="hover"
          className='md:px-4 md:py-2 hover:text-yellow-300'
        >
          <Link to='/Exchanges'>Exchanges</Link>
        </motion.button>
        <motion.button
          variants={buttonVariants}
          whileHover="hover"
          className='md:px-4 md:py-2 hover:text-yellow-300 p-2'
        >
          <Link to='/News'>News</Link>
        </motion.button>
        <motion.button
          variants={buttonVariants}
          whileHover="hover"
          className='md:px-4 md:py-2 hover:text-yellow-300 p-2'
        >
          <Link to='/CurrencyConverter'>Currency-Converter</Link>
        </motion.button>
      </div>
    </div>
  );
};

export default Header;
