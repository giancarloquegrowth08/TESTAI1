import React from 'react';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-rave-surface text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-16 text-center">Real People. Real Progress.</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              quote: "I used to feel intimidated by fitness apps. Strive made me feel like my 20-minute daily walk was a victory, not a failure.",
              author: "Sarah J.",
              role: "Casual Walker",
              img: "https://picsum.photos/100/100?random=30"
            },
            {
              quote: "The community features are amazing. I found a group of dads who do stroller runs on weekends. It keeps me sane.",
              author: "Marcus T.",
              role: "Runner & Dad",
              img: "https://picsum.photos/100/100?random=31"
            },
            {
              quote: "Finally, an app that values rest days as much as workout days. The insights helped me avoid burnout.",
              author: "Elena R.",
              role: "Yoga Instructor",
              img: "https://picsum.photos/100/100?random=32"
            }
          ].map((t, i) => (
            <div key={i} className="bg-rave-base p-8 rounded-2xl border border-rave-highlight hover:border-strive-500/50 hover:bg-rave-black transition-colors shadow-lg">
              <Quote className="w-8 h-8 text-strive-500 mb-6 opacity-50" />
              <p className="text-lg text-slate-300 mb-6 italic leading-relaxed">"{t.quote}"</p>
              <div className="flex items-center gap-4">
                <img src={t.img} alt={t.author} className="w-12 h-12 rounded-full border-2 border-strive-500 grayscale" />
                <div>
                  <div className="font-bold">{t.author}</div>
                  <div className="text-sm text-strive-400">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;