import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-slate-950 pt-20 pb-10 border-t border-white/5 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-md flex items-center justify-center text-white font-bold text-lg">
                K
              </div>
              <span className="text-xl font-display font-bold tracking-tighter text-white">
                Khushtech
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              We empower businesses with cutting-edge digital solutions, 
              from stunning web designs to powerful UI/UX experiences 
              that drive growth.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, idx) => (
                <a 
                  key={idx} 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center text-slate-400 hover:text-blue-400 hover:border-blue-400/50 transition-all hover:-translate-y-1"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-display font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {['Home', 'About Us', 'Services', 'Why Choose Us', 'Blog', 'Contact Us'].map((item) => (
                <li key={item}>
                  <Link 
                    to={`/${item.toLowerCase().replace(/\s+/g, '-')}`} 
                    className="text-slate-400 text-sm hover:text-blue-400 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item === 'Home' ? 'Portfolio' : item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-display font-bold text-lg mb-6">Services</h3>
            <ul className="space-y-4">
              {[
                'Website Design',
                'UI/UX Design',
                'Landing Pages',
                'Website Development',
                'Branding',
                'SEO Optimization'
              ].map((service) => (
                <li key={service}>
                  <Link to="/services" className="text-slate-400 text-sm hover:text-blue-400 transition-colors">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-display font-bold text-lg mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex gap-3 text-slate-400 text-sm">
                <MapPin size={18} className="text-blue-400 shrink-0" />
                <span>123 Tech Avenue, Digital City, CA 90210</span>
              </li>
              <li className="flex gap-3 text-slate-400 text-sm">
                <Mail size={18} className="text-blue-400 shrink-0" />
                <span>hello@khushtech.com</span>
              </li>
              <li className="flex gap-3 text-slate-400 text-sm">
                <Phone size={18} className="text-blue-400 shrink-0" />
                <span>+1 (555) 000-TECH</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-xs text-center md:text-left">
            © {new Date().getFullYear()} Khushtech Digital Agency. All rights reserved.
          </p>
          <div className="flex gap-6 text-slate-500 text-xs">
            <a href="#" className="hover:text-slate-300">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300">Terms of Service</a>
            <a href="#" className="hover:text-slate-300">Cookies Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
