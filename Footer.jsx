import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8 px-6 mt-auto">
      <div className="container mx-auto text-center">
        {/* Social Media Icons - Placeholder SVGs */}
        <div className="flex justify-center space-x-6 mb-4">
          <a href="#" className="hover:text-white transition-colors duration-200">
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.505 1.492-3.89 3.776-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33V22H12c5.523 0 10-4.477 10-10z" clipRule="evenodd" />
            </svg>
          </a>
          <a href="#" className="hover:text-white transition-colors duration-200">
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878V14.89h-2.54V12h2.54V9.797c0-2.505 1.492-3.89 3.776-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33V22H12c5.523 0 10-4.477 10-10z" clipRule="evenodd" />
            </svg> {/* This is a generic social icon, replace with actual Instagram/Twitter/LinkedIn SVGs */}
          </a>
          {/* Add more social media icons as needed */}
        </div>

        {/* Copyright and address */}
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Global Food Truck. All rights reserved.
        </p>
        <p className="text-sm mt-1">
          123 Culinary Lane, Foodie City, FC 90210
        </p>
      </div>
    </footer>
  );
}

export default Footer;