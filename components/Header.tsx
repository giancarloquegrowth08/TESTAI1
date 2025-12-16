import React, { useState } from 'react';
import { Menu, X, Activity } from 'lucide-react';
import Button from './ui/Button';

interface HeaderProps {
  scrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ scrolled }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Activities', href: '#activities' },
    { name: 'Features', href: '#features' },
    { name: 'Maps', href: '#maps' },
    { name: 'Communities', href: '#communities' },
    { name: 'Subscription', href: '#subscription' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-rave-base/90 backdrop-blur-md shadow-lg shadow-black/20 py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-strive-500 text-rave-base flex items-center justify-center shadow-[0_0_15px_rgba(97,242,92,0.3)] group-hover:shadow-[0_0_25px_rgba(97,242,92,0.6)] transition-all duration-300">
              <Activity className="w-6 h-6" />
            </div>
            <span className="text-2xl font-bold tracking-tight text-white group-hover:text-strive-500 transition-colors">Strive</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-sm font-medium text-slate-300 hover:text-strive-500 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Auth */}
          <div className="hidden md:flex items-center gap-4">
            <a href="#" className="text-sm font-medium text-white hover:text-strive-500">Log In</a>
            <Button size="sm">Sign Up</Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-slate-300 hover:text-strive-500"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-rave-surface border-b border-rave-highlight shadow-2xl p-4 flex flex-col gap-4 animate-in slide-in-from-top-5">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="block text-base font-medium text-slate-200 py-2 hover:text-strive-500 hover:bg-rave-highlight px-4 rounded-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="border-t border-rave-highlight pt-4 flex flex-col gap-3">
            <Button variant="outline" fullWidth>Log In</Button>
            <Button fullWidth>Sign Up</Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;