import React from 'react';
import { AiFillGithub } from 'react-icons/ai';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 px-4 flex flex-col items-center sm:flex-row sm:justify-between">
      <div className="flex flex-col sm:flex-row gap-4 mb-4 sm:mb-0 items-center">
        
        <ul className="list-none inline flex flex-col justify-center sm:justify-start sm:space-y-0">
          <li>
            <a href="/About" className="text-base hover:underline ">About</a>
          </li>
          <li>
            <a href="/News" className="text-base hover:underline">News</a>
          </li>
          <li>
            <a href="/Exchanges" className="text-base hover:underline">Crypto Exchanges</a>
          </li>
          <li>
            <a href="/Currency-converter" className="text-base hover:underline">Currency Converter</a>
          </li>
        
          <li>
            <a href="/" className="text-base hover:underline">Resources</a>
          </li>
          <li>
            <a href="/" className="text-base hover:underline">Contact Us</a>
          </li>
        </ul>
        </div>
        <div className="flex items-center text-sm space-x-2 mt-4 sm:mt-0 items-center">
          <h1 className='text-3xl text-pretty-red font-bold'>Created by </h1>
          <a
            href="https://github.com/Haarshdubeyy"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-blue-500 hover:underline text-4xl"
          >
            Harsh Dubey <AiFillGithub className="ml-1 text-3xl" />
          </a>
        </div>
     
      <small className="text-gray-400 text-center sm:text-left">
        &copy; {new Date().getFullYear()} All rights reserved.
      </small>
    </footer>
  );
};

export default Footer;
