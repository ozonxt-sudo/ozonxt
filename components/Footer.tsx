
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
    const SocialIcon = ({ href, iconPath }: { href: string; iconPath: React.ReactNode }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-ozonxt-blue-light transition-colors">
      {iconPath}
    </a>
  );
    
  return (
    <footer className="bg-ozonxt-blue-dark text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold">Ozon<span className="text-ozonxt-blue-light">xt</span></h3>
            <p className="mt-2 text-gray-400">Pure water, premium life.</p>
             <div className="flex space-x-4 mt-4">
              <SocialIcon href="#" iconPath={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" /></svg>} />
              <SocialIcon href="#" iconPath={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664-4.771 4.919-4.919 1.266-.058 1.644-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44-.645-1.44-1.441-1.44z"/></svg>} />
              <SocialIcon href="#" iconPath={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616v.064c0 2.298 1.634 4.212 3.793 4.649-.69.188-1.432.233-2.186.084.618 1.933 2.413 3.328 4.544 3.364-1.785 1.393-4.032 2.195-6.411 2.195-.417 0-.829-.024-1.234-.072 2.298 1.474 5.021 2.333 7.952 2.333 9.49 0 14.681-7.854 14.681-14.681 0-.224-.005-.447-.014-.67.998-.722 1.864-1.621 2.559-2.659z"/></svg>} />
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="mt-4 space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white">Home</Link></li>
              <li><Link to="/products" className="text-gray-400 hover:text-white">Products</Link></li>
              <li><Link to="/track-order" className="text-gray-400 hover:text-white">Track Order</Link></li>
              <li><Link to="/support" className="text-gray-400 hover:text-white">Support</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold">Support</h4>
            <ul className="mt-4 space-y-2">
              <li><Link to="/support" className="text-gray-400 hover:text-white">FAQ</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-white">Contact Us</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-white">Privacy Policy</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-white">Terms of Service</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold">Contact Us</h4>
            <ul className="mt-4 space-y-2 text-gray-400">
              <li>123 Premium Lane, Water City, 110011</li>
              <li>Email: support@ozonxt.com</li>
              <li>Phone: 1800-123-4567</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Ozonxt. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
