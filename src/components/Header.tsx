import menuIcon from "@/assets/menu-icon.png";
import closeIcon from "@/assets/close-icon.png";
import githubIcon from "@/assets/github-icon.png";
import linkedinIcon from "@/assets/linkedin-icon.png";
import mailIcon from "@/assets/mail-icon.png";

import { useState, useEffect } from "react";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState(0);
  
  const navItems = [
    { href: "#hero", label: "Home", index: 0 },
    { href: "#about", label: "About", index: 1 },
    { href: "#skills", label: "Skills", index: 2 },
    { href: "#experience", label: "Experience", index: 3 },
    { href: "#projects", label: "Projects", index: 4 },
    { href: "#contact", label: "Contact", index: 5 }
  ];

const scrollToSection = (href: string, index: number) => {
    const element = document.querySelector(href) as HTMLElement;
    if (element) {
      // Calculate offset for fixed header
      const headerHeight = 80; // Account for fixed header
      const elementPosition = element.offsetTop - headerHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
      setCurrentSection(index);
    }
    setIsMobileMenuOpen(false);
  };

  // Update current section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // Offset for header
      
      navItems.forEach((item, index) => {
        const element = document.querySelector(item.href) as HTMLElement;
        if (element) {
          const elementTop = element.offsetTop;
          const elementBottom = elementTop + element.offsetHeight;
          
          if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
            setCurrentSection(index);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50 border-b border-gray-200 dark:border-gray-700">
      <div className="mx-auto px-auto sm:px-auto lg:px-auto">
        <div className="flex justify-between items-center h-16 px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="text-xl font-semibold text-gray-900 hover:text-primary transition-colors">
              Bella Tri's Portfolio
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href, item.index)}
                className={`text-gray-600 hover:text-primary transition-colors duration-200 relative group ${
                  currentSection === item.index ? 'text-primary' : ''
                }`}
              >
                {item.label}
                <span className={`absolute inset-x-0 bottom-0 h-0.5 bg-primary transform transition-transform duration-200 ${
                  currentSection === item.index ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`}></span>
              </button>
            ))}
          </nav>

          {/* Social Links */}
          <div className="hidden md:flex items-center space-x-4">
            {/* PERBAIKAN: Menggunakan tag <img> untuk menampilkan ikon gambar */}
            <a href="https://github.com/bellatrijuliana" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary transition-colors">
              <img src={githubIcon} alt="GitHub" className="w-5 h-5 dark:invert" />
            </a>
            <a href="https://www.linkedin.com/in/bellatrijuliana/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary transition-colors">
              <img src={linkedinIcon} alt="LinkedIn" className="w-5 h-5" />
            </a>
            <a href="mailto:bellatrij@gmail.com" className="text-gray-600 hover:text-primary transition-colors">
              <img src={mailIcon} alt="Email" className="w-5 h-5 dark:invert" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-600 hover:text-primary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {/* PERBAIKAN: Menggunakan tag <img> untuk tombol menu */}
            {isMobileMenuOpen 
              ? <img src={closeIcon} alt="Close menu" className="w-6 h-6 dark:invert" /> 
              : <img src={menuIcon} alt="Open menu" className="w-6 h-6 dark:invert" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-secondary border-t border-gray-100">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => {
                    if (window.innerWidth >= 1024) {
                      scrollToSection(item.href, item.index);
                    } else {
                      // On mobile, use regular anchor scrolling
                      document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' });
                      setIsMobileMenuOpen(false);
                    }
                  }}
                  className="block w-full text-left px-3 py-2 text-gray-600 hover:text-primary transition-colors"
                >
                  {item.label}
                </button>
              ))}
<div className="flex space-x-4 px-3 py-2">
                {/* PERBAIKAN: Menggunakan tag <img> untuk ikon sosial di menu mobile */}
                <a href="https://github.com/bellatrijuliana" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary transition-colors">
                  <img src={githubIcon} alt="GitHub" className="w-5 h-5 dark:invert" />
                </a>
                <a href="https://www.linkedin.com/in/bellatrijuliana/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary transition-colors">
                  <img src={linkedinIcon} alt="LinkedIn" className="w-5 h-5" />
                </a>
                <a href="mailto:bellatrij@gmail.com" className="text-gray-600 hover:text-primary transition-colors">
                  <img src={mailIcon} alt="Email" className="w-5 h-5 dark:invert" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}