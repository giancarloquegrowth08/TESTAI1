import React from 'react';
import { Activity, Instagram, Twitter, Linkedin, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-rave-black pt-16 pb-8 border-t border-rave-highlight">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          
          <div className="col-span-2 lg:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-6 text-strive-500">
              <Activity className="w-8 h-8" />
              <span className="text-2xl font-bold text-white">Strive</span>
            </a>
            <p className="text-slate-400 max-w-sm mb-6">
              A community-driven platform for movement, mindfulness, and everyday wellness. Move at your own pace.
            </p>
            <div className="flex gap-4">
              {[Instagram, Twitter, Linkedin, Facebook].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-rave-surface border border-rave-highlight flex items-center justify-center text-slate-400 hover:text-strive-500 hover:border-strive-500 hover:bg-rave-base transition-all">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6">Product</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><a href="#" className="hover:text-strive-500 transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-strive-500 transition-colors">What's New</a></li>
              <li><a href="#" className="hover:text-strive-500 transition-colors">Stories</a></li>
              <li><a href="#" className="hover:text-strive-500 transition-colors">Subscription</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6">Company</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><a href="#" className="hover:text-strive-500 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-strive-500 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-strive-500 transition-colors">Press</a></li>
              <li><a href="#" className="hover:text-strive-500 transition-colors">Business</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6">Support</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><a href="#" className="hover:text-strive-500 transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-strive-500 transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-strive-500 transition-colors">System Status</a></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-rave-highlight pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <div>&copy; 2024 Strive Wellness Inc. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-strive-500 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-strive-500 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-strive-500 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;