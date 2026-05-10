import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Shield, Zap, TrendingUp, Headphones, ChevronDown, CheckCircle2, Award, Clock, Heart, Users } from 'lucide-react';

const steps = [
  { title: 'Discovery', desc: 'Understanding your business, goals, and target audience.' },
  { title: 'Strategy', desc: 'Developing a comprehensive digital roadmap for success.' },
  { title: 'Design', desc: 'Crafting high-end visuals and interactive prototypes.' },
  { title: 'Development', desc: 'Building clean, fast, and scalable code solutions.' },
  { title: 'Testing', desc: 'Rigorous QA to ensure flawless performance.' },
  { title: 'Launch', desc: 'Deployment and ongoing strategic support.' }
];

const faqs = [
  { q: "How long does a typical project take?", a: "Project timelines vary depending on complexity. A standard landing page takes 1-2 weeks, while a full corporate website might take 4-6 weeks." },
  { q: "Do you offer post-launch support?", a: "Yes, we offer ongoing maintenance and strategic support packages to ensure your digital product continues to scale and perform." },
  { q: "Will my website be SEO friendly?", a: "Every project at Khushtech is built with SEO-first principles including clean code, perfect metadata, and ultra-fast loading speeds." },
  { q: "Can you help with app development too?", a: "Absolutely. We specialize in cross-platform mobile apps for both iOS and Android using modern frameworks like React Native." }
];

export default function WhyChooseUs() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="pt-24 pb-24 px-6">
      <section className="max-w-7xl mx-auto mb-32 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-8">Elevating Brands Through <span className="text-gradient">Innovation</span></h1>
        <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
          At Khushtech, we don't just build websites – we architect digital success stories. 
          Our approach combines aesthetic brilliance with technical precision to ensure your 
          brand stands out in a crowded digital landscape.
        </p>
      </section>

      {/* Comparison Grid */}
      <section className="max-w-7xl mx-auto mb-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          { icon: Zap, title: 'Rapid Delivery', val: 'Agile Execution', desc: 'Our streamlined workflow ensures your project goes live faster without compromising on a single pixel.' },
          { icon: TrendingUp, title: 'Strategic Growth', val: 'ROI Driven', desc: 'Every design choice is backed by data to maximize conversions and drive measurable business growth.' },
          { icon: Shield, title: 'Unmatched Quality', val: 'Excellence', desc: 'We maintain a 100% satisfaction rate by delivering products that exceed global industry standards.' },
          { icon: Award, title: 'Branding Elite', val: 'Premium Craft', desc: 'We create cohesive brand identities that resonate deeply with your audience and build lasting trust.' }
        ].map((item, idx) => (
          <div key={idx} className="glass-card p-10 rounded-3xl border-white/5 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center text-blue-500 mb-6">
              <item.icon size={32} />
            </div>
            <div className="text-blue-400 font-bold uppercase tracking-widest text-xs mb-2">{item.title}</div>
            <div className="text-3xl font-display font-bold text-white mb-4">{item.val}</div>
            <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </section>

      {/* Process Steps */}
      <section className="max-w-7xl mx-auto mb-32">
        <div className="flex items-center gap-4 mb-12">
           <div className="h-px bg-blue-500 flex-grow" />
           <h2 className="text-3xl font-bold whitespace-nowrap">Our Proven Process</h2>
           <div className="h-px bg-blue-500 flex-grow" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {steps.map((step, idx) => (
            <div key={idx} className="relative pl-12 group">
              <div className="absolute top-0 left-0 w-8 h-8 rounded-full border-2 border-blue-500 flex items-center justify-center text-blue-500 font-bold group-hover:bg-blue-500 group-hover:text-white transition-all">
                {idx + 1}
              </div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits / Infographic */}
      <section className="max-w-7xl mx-auto mb-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
         <div>
            <h2 className="text-4xl font-bold mb-8">The Khushtech Advantage</h2>
            <div className="space-y-6">
               {[
                 { title: 'Brand First Approach', icon: Shield, desc: 'We don\'t just design layouts; we build visual ecosystems that define your brand\'s unique voice.' },
                 { title: 'Satisfied Client Network', icon: Heart, desc: '98% of our clients return for future projects, a testament to our commitment to their long-term success.' },
                 { title: 'Future-Proof Tech', icon: Award, desc: 'Using cutting-edge frameworks that ensure your site remains fast and secure for years to come.' }
               ].map((benefit, idx) => (
                 <div key={idx} className="flex gap-6 items-start">
                    <div className="w-12 h-12 bg-purple-500/10 rounded-xl shrink-0 flex items-center justify-center text-purple-500">
                       <benefit.icon size={24} />
                    </div>
                    <div>
                       <h4 className="text-lg font-bold mb-1">{benefit.title}</h4>
                       <p className="text-sm text-slate-400 leading-relaxed">{benefit.desc}</p>
                    </div>
                 </div>
               ))}
            </div>
         </div>
         <div className="glass p-8 rounded-[2.5rem] border-white/5 relative">
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-500/20 blur-3xl" />
            <div className="space-y-4">
              <div className="flex justify-between items-center bg-slate-800/50 p-6 rounded-2xl">
                 <div className="flex items-center gap-4">
                   <CheckCircle2 className="text-green-500" />
                   <span className="font-bold">Project Velocity</span>
                 </div>
                 <div className="text-blue-400">+45%</div>
              </div>
              <div className="flex justify-between items-center bg-slate-800/50 p-6 rounded-2xl">
                 <div className="flex items-center gap-4">
                   <CheckCircle2 className="text-green-500" />
                   <span className="font-bold">Conversion Lift</span>
                 </div>
                 <div className="text-blue-400">+28%</div>
              </div>
              <div className="flex justify-between items-center bg-slate-800/50 p-6 rounded-2xl">
                 <div className="flex items-center gap-4">
                   <CheckCircle2 className="text-green-500" />
                   <span className="font-bold">Mobile Score</span>
                 </div>
                 <div className="text-blue-400">98/100</div>
              </div>
            </div>
         </div>
      </section>

      {/* FAQ Accordion */}
      <section className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="glass border-white/5 rounded-2xl overflow-hidden">
               <button 
                 onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                 className="w-full p-6 flex justify-between items-center hover:bg-white/5 transition-colors"
               >
                 <span className="font-bold text-left">{faq.q}</span>
                 <ChevronDown className={`w-5 h-5 transition-transform ${openFaq === idx ? 'rotate-180' : ''}`} />
               </button>
               <AnimatePresence>
                 {openFaq === idx && (
                   <motion.div
                     initial={{ height: 0 }}
                     animate={{ height: 'auto' }}
                     exit={{ height: 0 }}
                     className="overflow-hidden"
                   >
                     <div className="p-6 pt-0 text-slate-400 text-sm leading-relaxed">
                       {faq.a}
                     </div>
                   </motion.div>
                 )}
               </AnimatePresence>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
