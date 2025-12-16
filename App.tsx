import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Activities from './components/Activities';
import Features from './components/Features';
import Maps from './components/Maps';
import Communities from './components/Communities';
import Subscription from './components/Subscription';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

const App: React.FC = () => {
  // Simple scroll progress tracker for potential UI enhancements (like nav bar transparency)
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-sans text-white bg-rave-base overflow-x-hidden selection:bg-strive-500 selection:text-rave-base">
      <Header scrolled={scrolled} />
      
      <main className="flex-grow">
        <Hero />
        <Activities />
        <Features />
        <Maps />
        <Communities />
        <Subscription />
        <Testimonials />
      </main>

      <Footer />
    </div>
  );
};

export default App;