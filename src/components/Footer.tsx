import React from 'react';
import { Link } from './Link';
import { Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="flex items-center mb-4">
              <div className="h-10 w-10 mr-2 bg-white rounded-md flex items-center justify-center text-blue-800 font-bold">BIC</div>
              <span className="font-semibold text-lg">RCC Business Innovation Center</span>
            </div>
            <p className="text-blue-200 mt-2 mb-4">
              Empowering local entrepreneurs with resources, training, and connections to build successful businesses and foster community growth.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-white hover:text-blue-200 transition duration-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-blue-200 transition duration-300">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-blue-200 transition duration-300">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-blue-200 transition duration-300">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#home" className="text-blue-200 hover:text-white transition duration-300">Home</Link>
              </li>
              <li>
                <Link href="#about" className="text-blue-200 hover:text-white transition duration-300">About Us</Link>
              </li>
              <li>
                <Link href="#services" className="text-blue-200 hover:text-white transition duration-300">Our Services</Link>
              </li>
              <li>
                <Link href="#events" className="text-blue-200 hover:text-white transition duration-300">Events</Link>
              </li>
              <li>
                <Link href="#success-stories" className="text-blue-200 hover:text-white transition duration-300">Success Stories</Link>
              </li>
              <li>
                <Link href="#contact" className="text-blue-200 hover:text-white transition duration-300">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#workstations" className="text-blue-200 hover:text-white transition duration-300">Workstations & Meeting Space</Link>
              </li>
              <li>
                <Link href="#workshops" className="text-blue-200 hover:text-white transition duration-300">Workshops & Training</Link>
              </li>
              <li>
                <Link href="#mentorship" className="text-blue-200 hover:text-white transition duration-300">Mentorship & Networking</Link>
              </li>
              <li>
                <Link href="#resources" className="text-blue-200 hover:text-white transition duration-300">Access to Resources</Link>
              </li>
              <li>
                <Link href="#partnerships" className="text-blue-200 hover:text-white transition duration-300">Strategic Partnerships</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Information</h3>
            <address className="not-italic text-blue-200">
              <p>1234 Columbus Avenue</p>
              <p>Boston, MA 02120</p>
              <p className="mt-4">
                <a href="tel:+16175551234" className="hover:text-white transition duration-300">
                  (617) 555-1234
                </a>
              </p>
              <p>
                <a href="mailto:bic@rcc.edu" className="hover:text-white transition duration-300 flex items-center mt-1">
                  <Mail className="h-4 w-4 mr-1" /> bic@rcc.edu
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-blue-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-blue-200 text-sm">
              &copy; {year} Roxbury Community College Business Innovation Center. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 flex space-x-4 text-sm text-blue-200">
              <a href="#" className="hover:text-white transition duration-300">Privacy Policy</a>
              <a href="#" className="hover:text-white transition duration-300">Terms of Service</a>
              <a href="#" className="hover:text-white transition duration-300">Accessibility</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;