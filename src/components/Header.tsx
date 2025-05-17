import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link } from './Link';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { 
      name: 'Services', 
      href: '#services',
      submenu: [
        { name: 'Workstations', href: '#workstations' },
        { name: 'Workshops', href: '#workshops' },
        { name: 'Mentorship', href: '#mentorship' },
      ] 
    },
    { name: 'Events', href: '#events' },
    { name: 'Success Stories', href: '#success-stories' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed w-full z-30 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="#home" className="flex items-center">
              <span className="sr-only">RCC Business Innovation Center</span>
              <div className="h-10 w-10 mr-2 bg-blue-800 rounded-md flex items-center justify-center text-white font-bold">BIC</div>
              <div className={`font-semibold text-lg ${isScrolled ? 'text-blue-900' : 'text-white'}`}>
                <span className="hidden md:inline">RCC Business Innovation Center</span>
                <span className="md:hidden">RCC BIC</span>
              </div>
            </Link>
          </div>
          
          <div className="-mr-2 -my-2 md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className={`rounded-md p-2 inline-flex items-center justify-center ${isScrolled ? 'text-blue-800 hover:text-blue-900 hover:bg-gray-100' : 'text-white hover:bg-blue-900/20'}`}
            >
              <span className="sr-only">Open menu</span>
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => !item.submenu ? (
              <Link 
                key={item.name}
                href={item.href}
                className={`font-medium hover:text-blue-600 ${isScrolled ? 'text-gray-700' : 'text-white'}`}
              >
                {item.name}
              </Link>
            ) : (
              <div key={item.name} className="relative group">
                <button 
                  className={`font-medium inline-flex items-center hover:text-blue-600 ${isScrolled ? 'text-gray-700' : 'text-white'}`}
                >
                  {item.name}
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                <div className="absolute left-0 mt-2 w-48 origin-top-left rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className="py-1">
                    {item.submenu.map((subitem) => (
                      <Link
                        key={subitem.name}
                        href={subitem.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        {subitem.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </nav>
          
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <Link
              href="#contact"
              className={`ml-8 inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white ${isScrolled ? 'bg-blue-800 hover:bg-blue-900' : 'bg-blue-700 hover:bg-blue-800'}`}
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden ${
          isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
        }`}
      >
        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
          <div className="pt-5 pb-6 px-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="h-8 w-8 mr-2 bg-blue-800 rounded-md flex items-center justify-center text-white font-bold">BIC</div>
                <div className="text-blue-900 font-semibold text-lg">RCC BIC</div>
              </div>
              <div className="-mr-2">
                <button
                  onClick={() => setIsOpen(false)}
                  type="button"
                  className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100"
                >
                  <span className="sr-only">Close menu</span>
                  <X className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
            </div>
            <div className="mt-6">
              <nav className="grid gap-y-8">
                {navigation.map((item) => (
                  <React.Fragment key={item.name}>
                    <Link
                      href={item.href}
                      className="text-base font-medium text-gray-900 hover:text-blue-700"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                    {item.submenu && (
                      <div className="ml-4 grid gap-y-4">
                        {item.submenu.map((subitem) => (
                          <Link
                            key={subitem.name}
                            href={subitem.href}
                            className="text-sm font-medium text-gray-700 hover:text-blue-700"
                            onClick={() => setIsOpen(false)}
                          >
                            {subitem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </React.Fragment>
                ))}
              </nav>
            </div>
          </div>
          <div className="py-6 px-5 space-y-6">
            <Link
              href="#contact"
              className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-800 hover:bg-blue-900"
              onClick={() => setIsOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;