import { Search, Calendar, User, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const posts = [
  {
    title: 'Top 10 Website Design Trends in 2026',
    excerpt: 'Discover the latest UI/UX trends that are dominating the web this year, from AI-driven designs to immersive 3D interfaces.',
    category: 'Design',
    author: 'Khush Singh',
    date: 'May 8, 2026',
    img: 'tech'
  },
  {
    title: 'Why Slow Loading Speed is Killing Your ROI',
    excerpt: 'Performance matters more than ever. Learn how to optimize your web core vitals to boost user retention.',
    category: 'SEO',
    author: 'Alex Rivera',
    date: 'May 5, 2026',
    img: 'speed'
  },
  {
    title: 'How to Build a High-Converting Landing Page',
    excerpt: 'A comprehensive guide to building pages that turn visitors into loyal customers using psychological triggers.',
    category: 'Strategy',
    author: 'Sarah Chen',
    date: 'May 2, 2026',
    img: 'ui'
  },
  {
    title: 'The Future of AI in Digital Marketing',
    excerpt: 'How generative AI is reshaping the way brands communicate and target their audiences in 2026.',
    category: 'AI',
    author: 'Khush Singh',
    date: 'Apr 28, 2026',
    img: 'future'
  }
];

export default function Blog() {
  return (
    <div className="pt-24 pb-24 px-6">
      <section className="max-w-7xl mx-auto mb-20 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-8">Latest <span className="text-gradient">Insights</span></h1>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-12">
          Expert articles on design, technology, and marketing strategies to grow your business.
        </p>

        <div className="max-w-xl mx-auto relative group">
           <input 
             type="text" 
             placeholder="Search articles..." 
             className="w-full px-8 py-5 bg-slate-900 border border-white/10 rounded-full focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-white pr-20"
           />
           <button className="absolute right-3 top-1/2 -translate-y-1/2 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-500 transition-colors">
              <Search size={20} />
           </button>
        </div>
      </section>

      {/* Featured Post */}
       <section className="max-w-7xl mx-auto mb-24">
         <motion.div 
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           className="relative aspect-[21/9] lg:aspect-[3/1] rounded-[2.5rem] overflow-hidden group mb-8"
         >
           <img 
            src="https://picsum.photos/seed/featured/1200/600" 
            alt="Featured Post" 
            className="w-full h-full object-cover grayscale brightness-50 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-1000"
            referrerPolicy="no-referrer"
           />
           <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent p-12 flex flex-col justify-end">
              <div className="mb-4 inline-block px-4 py-1.5 bg-blue-600 rounded-full text-xs font-bold uppercase tracking-widest text-white">Featured</div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 max-w-4xl tracking-tight leading-[1.1]">The Evolution of Immersive Web Experiences</h2>
              <div className="flex gap-6 text-slate-300 text-sm">
                 <div className="flex items-center gap-2">
                    <User size={16} className="text-blue-400" />
                    Khush Singh
                 </div>
                 <div className="flex items-center gap-2">
                    <Calendar size={16} className="text-blue-400" />
                    May 10, 2026
                 </div>
              </div>
           </div>
         </motion.div>
       </section>

      {/* Grid */}
      <section className="max-w-7xl mx-auto mb-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {posts.map((post, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="group"
          >
            <div className="aspect-video rounded-3xl overflow-hidden mb-6 relative">
              <img 
                src={`https://picsum.photos/seed/${post.img}/600/400`} 
                alt={post.title} 
                className="w-full h-full object-cover grayscale brightness-75 group-hover:brightness-100 group-hover:grayscale-0 hover:scale-110 transition-all duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-widest text-white border border-white/20">
                {post.category}
              </div>
            </div>
            <div className="flex items-center gap-4 text-xs text-slate-500 mb-4">
               <div className="flex items-center gap-1.5 uppercase font-semibold tracking-wider">
                  <User size={12} className="text-blue-500" />
                  {post.author}
               </div>
               <div className="flex items-center gap-1.5 uppercase font-semibold tracking-wider">
                  <Calendar size={12} className="text-blue-500" />
                  {post.date}
               </div>
            </div>
            <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-400 transition-colors">{post.title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3">{post.excerpt}</p>
            <Link to="#" className="inline-flex items-center gap-2 text-blue-500 font-bold group/link">
              Read More
              <ArrowRight size={18} className="group-hover/link:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        ))}
      </section>

      {/* Simple Pagination */}
      <div className="max-w-7xl mx-auto flex justify-center gap-4">
        {[1, 2, 3, '...'].map((p, idx) => (
          <button 
           key={idx} 
           className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold transition-all ${p === 1 ? 'bg-blue-600 text-white' : 'glass hover:bg-white/10'}`}
          >
            {p}
          </button>
        ))}
        <button className="px-6 h-12 glass rounded-xl font-bold hover:bg-white/10 transition-all flex items-center gap-2 group">
          Next 
          <ArrowRight size={18} className="group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  );
}
