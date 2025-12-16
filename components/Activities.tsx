import React from 'react';
import { Footprints, Bike, Dumbbell, Feather, Heart, Coffee } from 'lucide-react';

const activities = [
  { icon: Footprints, name: "Run & Walk", desc: "Track your pace, or just enjoy the fresh air. No pressure." },
  { icon: Bike, name: "Cycling", desc: "From intense climbs to casual city commutes." },
  { icon: Dumbbell, name: "Workouts", desc: "Gym sessions, HIIT, or home calisthenics." },
  { icon: Feather, name: "Yoga & Mobility", desc: "Stretch, flow, and recover. Every movement counts." },
  { icon: Heart, name: "Mindfulness", desc: "Log your meditation minutes and breathwork." },
  { icon: Coffee, name: "Lifestyle", desc: "Track habits like hydration, sleep, or daily steps." },
];

const Activities: React.FC = () => {
  return (
    <section id="activities" className="py-24 bg-rave-base relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-4">
            Every Way You Move
          </h2>
          <p className="text-lg text-slate-400">
            Strive isn't just for athletes. It's for movers. Whether you're training for a marathon or building a walking habit, we have a place for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity, idx) => (
            <div 
              key={idx} 
              className="group bg-rave-surface rounded-2xl p-8 shadow-lg hover:shadow-[0_0_30px_rgba(97,242,92,0.1)] hover:-translate-y-1 transition-all duration-300 border border-rave-highlight hover:border-strive-500/50"
            >
              <div className="w-14 h-14 bg-rave-base rounded-2xl flex items-center justify-center text-strive-500 mb-6 group-hover:bg-strive-500 group-hover:text-rave-base transition-colors shadow-inner">
                <activity.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{activity.name}</h3>
              <p className="text-slate-400 leading-relaxed">
                {activity.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Activities;