import { useParams, Link } from 'react-router-dom';
import { Calendar, User, ArrowLeft, Share2, MessageCircle, Clock } from 'lucide-react';
import { motion } from 'motion/react';

const allPosts = [
  {
    id: 'top-10-website-design-trends',
    title: 'Top 10 Website Design Trends in 2026',
    content: `
      <p>The digital landscape is evolving faster than ever. As we move through 2026, several key design trends have emerged that are redefining how users interact with the web.</p>
      
      <h2>1. AI-Driven Personalization</h2>
      <p>Websites are no longer static. With the integration of advanced AI, layouts and content now adapt in real-time to individual user behavior, creating a unique journey for every visitor.</p>
      
      <h2>2. Immersive 3D Environments</h2>
      <p>WebGL and WebGPU technologies have matured, allowing for cinematic 3D experiences directly in the browser without sacrificing performance. This "Spatial Web" approach is particularly powerful for luxury brands and architecture firms.</p>
      
      <h2>3. Neobrutalism with a Glass Finish</h2>
      <p>The raw, high-contrast neobrutalist style is being softened by glassmorphism effects – subtle transparency, blur, and light play that adds a layer of sophistication to bold choices.</p>
      
      <img src="https://picsum.photos/seed/design-trend/1200/600" alt="Design Trends" class="rounded-3xl my-12 opacity-90" />
      
      <h2>4. Hyper-Custom Typography</h2>
      <p>Generic fonts are out. Agencies are increasingly commissioning custom typefaces that carry the brand's personality into every character, ensuring a distinct identity that can't be replicated.</p>
    `,
    category: 'Design',
    author: 'Khush Singh',
    date: 'May 8, 2026',
    img: 'tech',
    readingTime: '6 min read'
  },
  {
    id: 'loading-speed-and-roi',
    title: 'Why Slow Loading Speed is Killing Your ROI',
    content: `
      <p>In the digital economy, milliseconds mean millions. Studies show that a 100ms delay in load time can result in a 7% drop in conversions.</p>
      
      <h2>The Psychology of Waiting</h2>
      <p>Modern users have zero tolerance for friction. A spinning loader is often the first and last thing a potential customer sees. We explore how performance optimization impacts brand trust.</p>
      
      <h2>Core Web Vitals in 2026</h2>
      <p>Google's ranking algorithms have become even more sensitive to user experience metrics. We break down the latest technical requirements for staying at the top of SERPs.</p>
      
      <img src="https://picsum.photos/seed/performance/1200/600" alt="Web Performance" class="rounded-3xl my-12 opacity-90" />
      
      <h2>Optimization Strategies</h2>
      <p>From edge computing to automated image compression, we share the checklist used by the Khushtech development team to achieve 99+ Lighthouse scores.</p>
    `,
    category: 'SEO',
    author: 'Alex Rivera',
    date: 'May 5, 2026',
    img: 'speed',
    readingTime: '5 min read'
  },
  {
    id: 'high-converting-landing-pages',
    title: 'How to Build a High-Converting Landing Page',
    content: `
      <p>A landing page is more than just a beautiful design; it's a psychological funnel designed to lead a user to a specific action.</p>
      
      <h2>The Hook, The Story, The Offer</h2>
      <p>We analyze the 3-pillar structure that makes a landing page irresistible. It starts with a compelling headline, moves through an empathetic narrative, and ends with an undeniable value proposition.</p>
      
      <h2>The Power of Social Proof</h2>
      <p>In 2026, standard testimonials aren't enough. We discuss how to integrate real-time social proof and video case studies effectively.</p>
      
      <img src="https://picsum.photos/seed/conversion/1200/600" alt="Landing Page" class="rounded-3xl my-12 opacity-90" />
      
      <h2>A/B Testing with AI</h2>
      <p>Learn how to use automated testing tools that find the perfect combination of colors, copy, and layouts in hours rather than weeks.</p>
    `,
    category: 'Strategy',
    author: 'Sarah Chen',
    date: 'May 2, 2026',
    img: 'ui',
    readingTime: '8 min read'
  },
  {
    id: 'future-of-ai-marketing',
    title: 'The Future of AI in Digital Marketing',
    content: `
      <p>Generative AI has passed the hype cycle and is now a core utility for sophisticated marketing departments.</p>
      
      <h2>Content at the Speed of Thought</h2>
      <p>We examine how AI helps planners generate massive variations of ad copy and visuals targeted at micro-segments of their audience simultaneously.</p>
      
      <h2>Predictive Analytics</h2>
      <p>The shift from "what happened" to "what will happen." Strategic marketers are now using predictive models to allocate budgets with 90%+ accuracy.</p>
      
      <img src="https://picsum.photos/seed/ai-future/1200/600" alt="AI Marketing" class="rounded-3xl my-12 opacity-90" />
      
      <h2>The Human Element</h2>
      <p>Why the most successful AI-powered campaigns still require high-level human creativity and ethical oversight.</p>
    `,
    category: 'AI',
    author: 'Khush Singh',
    date: 'Apr 28, 2026',
    img: 'future',
    readingTime: '7 min read'
  }
];

export default function BlogPost() {
  const { id } = useParams();
  const post = allPosts.find(p => p.id === id);

  if (!post) {
    return (
      <div className="pt-40 pb-40 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
        <Link to="/blog" className="text-blue-500 hover:underline">Return to Blog</Link>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 px-6">
      <article className="max-w-4xl mx-auto">
        {/* Back Link */}
        <Link 
          to="/blog" 
          className="inline-flex items-center gap-2 text-slate-400 hover:text-blue-400 mb-12 transition-colors group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Back to Blog
        </Link>

        {/* Header */}
        <header className="mb-12">
          <div className="flex gap-4 items-center mb-6">
            <span className="px-4 py-1.5 bg-blue-600/10 text-blue-400 rounded-full text-xs font-bold uppercase tracking-widest border border-blue-500/20">
              {post.category}
            </span>
            <div className="flex items-center gap-2 text-slate-500 text-sm">
              <Clock size={14} />
              {post.readingTime}
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight leading-tight">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center justify-between gap-6 pb-8 border-b border-white/10">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-slate-800 border border-white/10 flex items-center justify-center text-blue-500 overflow-hidden">
                <User size={24} />
              </div>
              <div>
                <div className="font-bold text-white">{post.author}</div>
                <div className="text-slate-500 text-sm uppercase tracking-wider">{post.date}</div>
              </div>
            </div>
            <div className="flex gap-4">
              <button className="w-10 h-10 rounded-xl glass flex items-center justify-center text-slate-400 hover:text-blue-400 transition-all">
                <Share2 size={18} />
              </button>
              <button className="w-10 h-10 rounded-xl glass flex items-center justify-center text-slate-400 hover:text-blue-400 transition-all">
                <MessageCircle size={18} />
              </button>
            </div>
          </div>
        </header>

        {/* Content */}
        <div 
          className="prose prose-invert prose-blue max-w-none 
          prose-headings:font-display prose-headings:font-bold 
          prose-p:text-slate-400 prose-p:leading-relaxed prose-p:text-lg
          prose-img:rounded-3xl"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Newsletter / CTA */}
        <section className="mt-24 p-12 glass-card rounded-[3rem] text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-blue-600/5 blur-3xl pointer-events-none" />
          <h3 className="text-2xl font-bold mb-4 relative z-10">Enjoyed this article?</h3>
          <p className="text-slate-400 mb-8 relative z-10">Subscribe to our newsletter for weekly insights on digital growth.</p>
          <form className="flex flex-col md:flex-row gap-4 max-w-md mx-auto relative z-10">
             <input 
               type="email" 
               placeholder="Your email address" 
               className="flex-grow px-6 py-4 bg-slate-900 border border-white/10 rounded-2xl focus:outline-none focus:border-blue-500"
             />
             <button className="px-8 py-4 bg-blue-600 text-white rounded-2xl font-bold hover:bg-blue-500 transition-all">
                Join Now
             </button>
          </form>
        </section>
      </article>
    </div>
  );
}
