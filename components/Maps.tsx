import React from 'react';
import { Map, Lock, Share2, MapPin } from 'lucide-react';
import Button from './ui/Button';

const Maps: React.FC = () => {
  return (
    <section id="maps" className="py-24 bg-rave-black text-white relative overflow-hidden">
      {/* Decorative background map lines */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
         <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0 50 Q 25 25 50 50 T 100 50" stroke="#454545" strokeWidth="0.5" fill="none" />
            <path d="M0 30 Q 25 80 50 30 T 100 80" stroke="#454545" strokeWidth="0.5" fill="none" />
            <path d="M0 70 Q 25 10 50 70 T 100 20" stroke="#454545" strokeWidth="0.5" fill="none" />
         </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
           <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rave-surface border border-rave-highlight text-strive-300 text-sm font-medium mb-6">
                <Map className="w-4 h-4" />
                Intelligent Maps
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Explore freely. <br />
                <span className="text-strive-500">Share carefully.</span>
              </h2>
              <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                Discover safe, movement-friendly routes in your city. Strive puts privacy first, allowing you to hide your start/end points or keep your maps entirely private by default.
              </p>

              <div className="space-y-6 mb-10">
                <div className="flex gap-4">
                   <div className="w-12 h-12 rounded-xl bg-rave-surface flex items-center justify-center shrink-0 border border-rave-highlight">
                      <Lock className="w-6 h-6 text-strive-500" />
                   </div>
                   <div>
                      <h4 className="text-xl font-bold mb-1">Privacy Zones</h4>
                      <p className="text-slate-400 text-sm">Automatically obscure your home and office locations from all shared maps.</p>
                   </div>
                </div>
                <div className="flex gap-4">
                   <div className="w-12 h-12 rounded-xl bg-rave-surface flex items-center justify-center shrink-0 border border-rave-highlight">
                      <MapPin className="w-6 h-6 text-purple-400" />
                   </div>
                   <div>
                      <h4 className="text-xl font-bold mb-1">Scenic Routes</h4>
                      <p className="text-slate-400 text-sm">Find paths rated by the community for quietness, scenery, and safety.</p>
                   </div>
                </div>
              </div>

              <Button className="bg-white text-rave-base hover:bg-slate-200 border-none">
                View Sample Maps
              </Button>
           </div>

           <div className="relative">
              {/* Abstract Map Graphic */}
              <div className="bg-rave-surface/50 backdrop-blur-sm rounded-3xl p-4 border border-rave-highlight shadow-2xl">
                 <div className="aspect-video w-full rounded-2xl bg-rave-black relative overflow-hidden border border-rave-highlight">
                    {/* Simulated Map */}
                    <img 
                      src="https://images.pexels.com/photos/11815816/pexels-photo-11815816.jpeg?grayscale" 
                      alt="Map view" 
                      className="w-full h-full object-cover opacity-30 mix-blend-screen"
                    />
                    {/* Route Line */}
                    <svg className="absolute inset-0 w-full h-full drop-shadow-[0_0_8px_rgba(97,242,92,0.8)]">
                       <path d="M 50 150 C 150 100, 250 200, 350 150 S 550 50, 650 100" stroke="#61F25C" strokeWidth="4" fill="none" strokeDasharray="10 5" strokeLinecap="round" />
                    </svg>
                    
                    {/* Floating Controls */}
                    <div className="absolute top-4 left-4 flex flex-col gap-2">
                       <div className="bg-rave-black/90 p-2 rounded-lg text-white shadow-lg border border-rave-highlight"><Share2 size={16}/></div>
                       <div className="bg-rave-black/90 p-2 rounded-lg text-strive-500 shadow-lg border border-rave-highlight"><Lock size={16}/></div>
                    </div>

                    <div className="absolute bottom-4 right-4 bg-rave-black/90 px-4 py-2 rounded-lg text-white text-xs font-mono shadow-lg border border-rave-highlight flex items-center gap-2">
                       <span className="text-strive-500 animate-pulse">●</span> Live Tracking
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Maps;