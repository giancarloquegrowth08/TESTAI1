import React from 'react';
import { Users, UserPlus, Coffee, BookOpen } from 'lucide-react';
import Button from './ui/Button';

const communities = [
  {
    image: "https://images.pexels.com/photos/5928337/pexels-photo-5928337.jpeg?random=20",
    name: "Early Risers Club",
    category: "Routine",
    members: "12k members",
    desc: "We commit to 15 minutes of movement before 8 AM. Pictures of sunrises encouraged!"
  },
  {
    image: "https://images.pexels.com/photos/5036900/pexels-photo-5036900.jpeg?random=21",
    name: "Mindful Miles",
    category: "Running",
    members: "8.5k members",
    desc: "A running group where pace doesn't matter. Focus on breath, nature, and mental clarity."
  },
  {
    image: "https://images.pexels.com/photos/5149639/pexels-photo-5149639.jpeg?random=22",
    name: "Desk Worker Mobility",
    category: "Wellness",
    members: "24k members",
    desc: "Daily 5-minute stretch breaks to combat the 9-to-5 slouch. Your back will thank you."
  }
];

const Communities: React.FC = () => {
  return (
    <section id="communities" className="py-24 bg-rave-base">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-strive-500 font-semibold tracking-wider text-sm uppercase mb-2 block">Belonging</span>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl mb-6">
            Find Your People
          </h2>
          <p className="text-lg text-slate-400">
            Connect with communities based on shared interests, not just sports. From book lovers who walk to competitive runners who meditate.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
           {communities.map((comm, idx) => (
             <div key={idx} className="bg-rave-surface rounded-2xl overflow-hidden shadow-lg hover:shadow-[0_0_20px_rgba(97,242,92,0.2)] transition-all duration-300 border border-rave-highlight flex flex-col">
                <div className="h-48 overflow-hidden relative">
                   <img src={comm.image} alt={comm.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 grayscale hover:grayscale-0"/>
                   <div className="absolute top-4 left-4 bg-rave-black/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-strive-500 border border-strive-500/30">
                      {comm.category}
                   </div>
                </div>
                <div className="p-6 flex-grow flex flex-col">
                   <h3 className="text-xl font-bold text-white mb-1">{comm.name}</h3>
                   <div className="flex items-center gap-1 text-slate-400 text-sm mb-4">
                      <Users className="w-4 h-4" />
                      {comm.members}
                   </div>
                   <p className="text-slate-300 text-sm mb-6 flex-grow">
                      {comm.desc}
                   </p>
                   <Button variant="outline" size="sm" fullWidth>Join Group</Button>
                </div>
             </div>
           ))}
        </div>

        <div className="bg-rave-black rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden border border-rave-highlight">
           <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4">Start your own circle</h3>
              <p className="text-slate-400 mb-8 max-w-xl mx-auto">
                 Create a private group for your family, office, or local club. Set gentle challenges and cheer each other on.
              </p>
              <Button className="bg-strive-500 hover:bg-white text-rave-base border-none">Create Community</Button>
           </div>
           
           {/* Abstract Circles Background */}
           <div className="absolute top-0 left-0 w-32 h-32 bg-strive-500 rounded-full blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
           <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-600 rounded-full blur-3xl opacity-20 translate-x-1/3 translate-y-1/3"></div>
        </div>
      </div>
    </section>
  );
};

export default Communities;