import React from 'react';
import { Check } from 'lucide-react';
import Button from './ui/Button';

const Subscription: React.FC = () => {
  return (
    <section id="subscription" className="py-24 bg-rave-base">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white sm:text-4xl mb-4">Simple, Transparent Pricing</h2>
          <p className="text-lg text-slate-400">Invest in your wellness journey. No hidden fees.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Free Plan */}
          <div className="bg-rave-surface rounded-3xl p-8 border border-rave-highlight hover:border-strive-500/50 transition-colors">
            <h3 className="text-2xl font-bold text-white mb-2">Basic</h3>
            <p className="text-slate-400 mb-6">Essential tools for everyday movement.</p>
            <div className="text-4xl font-bold text-white mb-8">Free</div>
            
            <ul className="space-y-4 mb-8">
              {['Unlimited activity tracking', 'Join public communities', 'Basic progress stats', 'Ad-free experience'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-300">
                  <div className="w-5 h-5 rounded-full bg-rave-base flex items-center justify-center border border-rave-highlight">
                    <Check className="w-3 h-3 text-slate-400" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
            <Button variant="outline" fullWidth size="lg">Get Started</Button>
          </div>

          {/* Pro Plan */}
          <div className="bg-rave-black rounded-3xl p-8 border-2 border-strive-500 shadow-[0_0_30px_rgba(97,242,92,0.15)] relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-strive-500 text-rave-base text-xs font-bold px-3 py-1 rounded-bl-xl uppercase tracking-wide">
              Most Popular
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-2">Strive Pro</h3>
            <p className="text-strive-400 mb-6 font-medium">Advanced insights & personal growth.</p>
            <div className="flex items-baseline gap-1 mb-8">
               <span className="text-4xl font-bold text-white">$6.99</span>
               <span className="text-slate-500">/mo</span>
            </div>
            
            <ul className="space-y-4 mb-8">
              {[
                'Everything in Basic', 
                'Advanced health insights & trends', 
                'AI-powered recommendations', 
                'Create unlimited private groups',
                'Route planning & offline maps'
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-200">
                  <div className="w-5 h-5 rounded-full bg-strive-500/20 flex items-center justify-center">
                    <Check className="w-3 h-3 text-strive-500" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
            <Button variant="primary" fullWidth size="lg">Upgrade to Pro</Button>
            <p className="text-center text-xs text-slate-500 mt-4">14-day free trial. Cancel anytime.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscription;