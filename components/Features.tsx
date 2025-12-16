import React from 'react';
import { BarChart3, Target, Sparkles, ShieldCheck } from 'lucide-react';

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-rave-base overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Feature 1 */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="order-2 lg:order-1">
             <div className="bg-rave-surface rounded-3xl p-8 sm:p-12 relative border border-rave-highlight shadow-2xl">
                {/* Replace src below with your actual App Dashboard screenshot */}
                <img 
                  src="https://images.pexels.com/photos/4392032/pexels-photo-4392032.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Analytics Dashboard showing fitness stats" 
                  className="rounded-xl shadow-lg rotate-1 hover:rotate-0 transition-transform duration-500 opacity-90 grayscale hover:grayscale-0"
                />
                <div className="absolute -bottom-6 -right-6 bg-rave-black p-6 rounded-xl shadow-xl max-w-xs hidden sm:block border border-rave-highlight">
                  <div className="flex items-center gap-3 mb-2">
                    <BarChart3 className="text-strive-500" />
                    <span className="font-bold text-white">Monthly Consistency</span>
                  </div>
                  <div className="flex gap-1 h-12 items-end">
                     {[40, 60, 45, 70, 85, 60, 75].map((h, i) => (
                       <div key={i} style={{height: `${h}%`}} className="w-3 bg-rave-surface rounded-t-sm hover:bg-strive-500 hover:shadow-[0_0_10px_#61F25C] transition-all"></div>
                     ))}
                  </div>
                </div>
             </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/30 border border-blue-700 text-blue-300 text-sm font-medium mb-6">
              <BarChart3 className="w-4 h-4" />
              Insights
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              See your progress, not just your performance.
            </h3>
            <p className="text-lg text-slate-400 mb-6">
              Most apps focus on speed and power. We focus on consistency. Our clean, dark-mode analytics show how you're showing up for yourself.
            </p>
            <ul className="space-y-3">
              {[
                "Consistency streaks that celebrate showing up",
                "Monthly mood vs. movement correlation",
                "Private journaling attached to activities"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-300">
                  <div className="w-6 h-6 rounded-full bg-strive-500/20 text-strive-500 flex items-center justify-center text-xs">✓</div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-900/30 border border-purple-700 text-purple-300 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              AI Recommendations
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Guidance that adapts to how you feel.
            </h3>
            <p className="text-lg text-slate-400 mb-6">
              Strive's gentle AI learns your habits and energy levels. Feeling tired? It suggests a restorative walk or yoga.
            </p>
            <div className="bg-rave-surface p-6 rounded-2xl border border-rave-highlight">
               <p className="italic text-slate-300 mb-4">"Based on your high activity yesterday and reported sleep quality, we recommend a light 15-minute mobility flow today."</p>
               <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-strive-500 flex items-center justify-center text-rave-base">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <span className="font-semibold text-sm text-white">Strive Coach</span>
               </div>
            </div>
          </div>
          <div>
             <div className="bg-rave-surface rounded-3xl p-8 sm:p-12 border border-rave-highlight">
                <div className="grid grid-cols-2 gap-4">
                   <div className="bg-rave-base p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-rave-highlight">
                      <Target className="w-8 h-8 text-purple-400 mb-4" />
                      <h4 className="font-bold text-white mb-1">Weekly Goals</h4>
                      <p className="text-sm text-slate-500">Flexible targets that adjust.</p>
                   </div>
                   <div className="bg-rave-base p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-rave-highlight">
                      <ShieldCheck className="w-8 h-8 text-strive-500 mb-4" />
                      <h4 className="font-bold text-white mb-1">Recovery First</h4>
                      <p className="text-sm text-slate-500">Prioritizing rest is key.</p>
                   </div>
                   <div className="col-span-2 bg-rave-base p-6 rounded-2xl shadow-sm border border-rave-highlight flex items-center justify-between">
                      <div>
                        <h4 className="font-bold text-white">Habit Builder</h4>
                        <p className="text-sm text-slate-500">Small steps, big results.</p>
                      </div>
                      <div className="w-12 h-12 rounded-full bg-strive-500/20 flex items-center justify-center text-strive-500 font-bold border border-strive-500/30">
                        5d
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Features;