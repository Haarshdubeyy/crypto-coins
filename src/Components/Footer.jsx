import React from 'react';
import { AiFillGithub } from 'react-icons/ai';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="mb-6 md:mb-0">
            <h2 className="text-lg font-semibold mb-2">CryptoTracker</h2>
            <p className="text-sm">
              All the latest news and information about cryptocurrencies in one place.
            </p>
          </div>
          <div>
            <h3 className="text-base font-semibold mb-2">Quick Links</h3>
            <ul className="text-sm">
              <li>
                <a href="/About" className="hover:text-blue-400">About</a>
              </li>
              <li>
                <a href="/News" className="hover:text-blue-400">News</a>
              </li>
              <li>
                <a href="/Exchanges" className="hover:text-blue-400">Crypto Exchanges</a>
              </li>
              <li>
                <a href="/Currency-converter" className="hover:text-blue-400">Currency Converter</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-base font-semibold mb-2">Resources</h3>
            <ul className="text-sm">
              <li>
                <a href="/" className="hover:text-blue-400">Learning Center</a>
              </li>
              <li>
                <a href="/" className="hover:text-blue-400">API Documentation</a>
              </li>
              <li>
                <a href="/" className="hover:text-blue-400">Pricing</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-base font-semibold mb-2">Company</h3>
            <ul className="text-sm">
              <li>
                <a href="/" className="hover:text-blue-400">Contact Us</a>
              </li>
              <li>
                <a href="/" className="hover:text-blue-400">Careers</a>
              </li>
              <li>
                <a href="/" className="hover:text-blue-400">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex items-center mt-6 md:mt-8 justify-center md:justify-start">
          <h3 className="text-lg font-semibold mr-2">Created by</h3>
          <a
            href="https://github.com/Haarshdubeyy"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-blue-500 hover:text-blue-400"
          >
            Harsh Dubey <AiFillGithub className="ml-1" />
          </a>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
