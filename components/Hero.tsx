import React from 'react';
import Button from './ui/Button';
import { ArrowRight, PlayCircle } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-rave-base">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-strive-500/20 rounded-full blur-[100px] opacity-40 -z-10 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[400px] h-[400px] bg-purple-600/30 rounded-full blur-[100px] opacity-40 -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Content */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rave-surface border border-rave-highlight text-strive-500 text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-strive-400 opacity-85"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-strive-500"></span>
              </span>
              New: Night Runner Challenges
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
              Move Together. <br/>
              <span className="text-strive-500 [text-shadow:_0_0_30px_rgb(97_242_92_/_50%),_0_0_10px_rgb(97_242_92_/_80%)] animate-pulse">
                Glow Together.
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-slate-400 mb-8 leading-relaxed">
              Strive is the inclusive home for your active life. Whether you run, meditate, walk, or stretch — track your progress and find belonging.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group">
                Start Free
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
                Explore Communities
              </Button>
            </div>

            <div className="mt-10 flex items-center gap-4 text-sm text-slate-400">
              <div className="flex -space-x-3">
                <img className="w-10 h-10 rounded-full border-2 border-rave-base grayscale opacity-80 hover:grayscale-0 transition-all" src="https://picsum.photos/100/100?random=1" alt="User" />
                <img className="w-10 h-10 rounded-full border-2 border-rave-base grayscale opacity-80 hover:grayscale-0 transition-all" src="https://picsum.photos/100/100?random=2" alt="User" />
                <img className="w-10 h-10 rounded-full border-2 border-rave-base grayscale opacity-80 hover:grayscale-0 transition-all" src="https://picsum.photos/100/100?random=3" alt="User" />
                <div className="w-10 h-10 rounded-full border-2 border-rave-base bg-rave-surface flex items-center justify-center font-medium text-white text-xs">
                  +2k
                </div>
              </div>
              <p>Join 2,000+ members striving tonight.</p>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
             <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-strive-500/10 bg-rave-surface aspect-[4/5] sm:aspect-square lg:aspect-[4/5] group border border-rave-highlight">
                <img 
                  src="https://images.pexels.com/photos/1076081/pexels-photo-1076081.jpeg?random=5&grayscale" 
                  alt="People running together" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100 mix-blend-overlay"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-rave-base/80 to-transparent pointer-events-none"></div>
                
                {/* Floating UI Card 1 */}
                <div className="absolute top-8 right-8 bg-rave-surface/90 backdrop-blur-md p-4 rounded-2xl shadow-xl w-48 animate-in fade-in slide-in-from-bottom-4 duration-1000 border border-rave-highlight">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-rave-base text-strive-500 rounded-lg">
                      <PlayCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400">Currently</p>
                      <p className="font-semibold text-sm text-white">Midnight Flow</p>
                    </div>
                  </div>
                  <div className="h-1.5 w-full bg-rave-base rounded-full overflow-hidden">
                    <div className="h-full bg-strive-500 w-3/4 shadow-[0_0_10px_#61F25C]"></div>
                  </div>
                </div>

                {/* Floating UI Card 2 */}
                <div className="absolute bottom-8 left-8 bg-rave-surface/90 backdrop-blur-md p-4 rounded-2xl shadow-xl w-56 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200 border border-rave-highlight">
                   <div className="flex justify-between items-end mb-1">
                      <div>
                         <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Weekly Goal</p>
                         <p className="font-bold text-2xl text-white">12.5 mi</p>
                      </div>
                      <span className="text-xs text-rave-base font-bold bg-strive-500 px-2 py-1 rounded-full">+2.4%</span>
                   </div>
                   <p className="text-xs text-slate-500">Keep it up! You're glowing.</p>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;