import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 fixed bottom-0 w-full ">
      
        <div className="flex justify-center space-x-4">
            <a href="https://www.facebook.com/monhoo" className="hover:text-blue-500">Facebook</a>
            <a href="https://www.instagram.com/monhoo" className="hover:text-red-500">Instagram</a>
            <a href="https://www.twitter.com/monhoo" className="hover:text-blue-400">Twitter</a>
        </div>
        <div className="flex justify-center space-x-4">
            <a href="https://www.linkedin.com/monhoo" className="hover:text-blue-500">LinkedIn</a>
            <a href="https://www.github.com/monhoo" className="hover:text-black">GitHub</a>
            <a href="https://www.youtube.com/monhoo" className="hover:text-red-500">YouTube</a>
        </div>
    </footer>
  );
};

export default Footer;