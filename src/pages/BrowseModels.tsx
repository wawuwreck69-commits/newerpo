import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Info, Zap, Anchor } from 'lucide-react';
import { CertificationsBlock, ContactStrip } from '../components/Blocks';

export const models = [
  {
    id: "fw-12-v",
    name: "12' V-Hull",
    price: "Starting at $4,995",
    category: "Small Fishing Boats",
    image: "https://picsum.photos/seed/boat12/800/600",
    description: "The ultimate lightweight river and lake companion. Easy to launch, impossible to break."
  },
  {
    id: "fw-14-flat",
    name: "14' Flat Bottom",
    price: "Starting at $6,450",
    category: "Small Fishing Boats",
    image: "https://picsum.photos/seed/boat14/800/600",
    description: "Stable platform for shallow water fishing and transport. Wide beam for maximum capacity."
  },
  {
    id: "fw-16-sport",
    name: "16' Sport Console",
    price: "Starting at $12,800",
    category: "Water Sports Boats",
    image: "https://picsum.photos/seed/boat16/800/600",
    description: "Built for speed and versatility. Perfect for family outings and light offshore use."
  },
  {
    id: "fw-18-offshore",
    name: "18' Offshore Pro",
    price: "Starting at $24,500",
    category: "Offshore Fishing & Dive",
    image: "https://picsum.photos/seed/boat18/800/600",
    description: "Deep-V hull designed for the open ocean. Heavy-duty construction for serious anglers."
  },
  {
    id: "fw-10-tender",
    name: "10' Yacht Tender",
    price: "Starting at $3,800",
    category: "Dinghies & Tenders",
    image: "https://picsum.photos/seed/boat10/800/600",
    description: "Compact, rugged, and reliable. The perfect companion for your primary vessel."
  },
  {
    id: "fw-22-patrol",
    name: "22' Professional Patrol",
    price: "Contact for Pricing",
    category: "Military & Professional",
    image: "https://picsum.photos/seed/boat22/800/600",
    description: "Institutional grade vessel built for rescue, patrol, and commercial work."
  }
];

export default function BrowseModels() {
  return (
    <div className="flex flex-col bg-[#F7F7F8]">
      {/* Hero Section */}
      <section className="min-h-[60vh] flex flex-col lg:flex-row border-b border-[#E5E5E5] bg-white">
        <div className="w-full lg:w-1/2 p-6 sm:p-10 lg:p-16 flex flex-col justify-center border-r border-[#E5E5E5]">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-medium tracking-tight text-[#1A1A1A] mb-8"
          >
            Browse Models
          </motion.h1>
          <p className="text-xs text-zinc-500 max-w-md leading-relaxed">
            Every Fish Whistle boat is built to the highest standards by certified welders. From small river runners to offshore professional vessels, we build for those who demand the best.
          </p>
        </div>
        <div className="w-full lg:w-1/2 relative bg-[#F7F7F8] flex items-center justify-center p-10 lg:p-20 overflow-hidden">
          <motion.img 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            src="https://picsum.photos/seed/boat-hero-browse/1200/800" 
            alt="Browse Models Hero" 
            className="w-full h-auto max-w-2xl object-contain drop-shadow-2xl mix-blend-multiply"
            referrerPolicy="no-referrer"
          />
        </div>
      </section>

      {/* Models Grid */}
      <section className="bg-white border-b border-[#E5E5E5]">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-l border-[#E5E5E5]">
            {models.map((model) => (
              <div key={model.id} className="group flex flex-col border-r border-b border-[#E5E5E5] bg-white hover:bg-[#F7F7F8] transition-colors">
                <Link to={`/browse-models/p/${model.id}`} className="block aspect-[4/3] overflow-hidden bg-[#F7F7F8] border-b border-[#E5E5E5] p-8 flex items-center justify-center">
                  <img 
                    src={model.image} 
                    alt={model.name} 
                    className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105 drop-shadow-xl mix-blend-multiply"
                    referrerPolicy="no-referrer"
                  />
                </Link>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 mb-2 block">{model.category}</span>
                      <h3 className="text-2xl font-medium text-[#1A1A1A]">{model.name}</h3>
                    </div>
                    <div className="text-right">
                      <span className="text-sm font-medium text-zinc-400">{model.price}</span>
                    </div>
                  </div>
                  <p className="text-zinc-500 text-xs mb-8 flex-grow leading-relaxed">
                    {model.description}
                  </p>
                  <div className="flex items-center justify-between pt-6 border-t border-[#E5E5E5]">
                    <Link 
                      to={`/browse-models/p/${model.id}`}
                      className="text-[10px] font-bold uppercase tracking-[0.2em] flex items-center text-zinc-400 hover:text-[#1A1A1A] transition-colors"
                    >
                      View Details <ArrowRight className="ml-2 w-3 h-3" />
                    </Link>
                    <button className="pill-nav">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience the Difference */}
      <section className="bg-white border-b border-[#E5E5E5]">
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/2 p-10 lg:p-24 flex flex-col justify-center border-r border-[#E5E5E5]">
            <div className="text-[10px] font-bold text-zinc-400 mb-12 uppercase tracking-[0.2em]">Experience</div>
            <h2 className="text-4xl font-medium mb-12">The Difference</h2>
            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="w-10 h-10 rounded-full border border-[#E5E5E5] flex items-center justify-center flex-shrink-0">
                  <Info className="w-4 h-4 text-zinc-400" />
                </div>
                <div>
                  <h4 className="font-medium mb-2 text-sm">Certified Craftsmanship</h4>
                  <p className="text-xs text-zinc-500 leading-relaxed">Our welders are certified to USCG, Transport Canada, and ABYC standards.</p>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <div className="w-10 h-10 rounded-full border border-[#E5E5E5] flex items-center justify-center flex-shrink-0">
                  <Zap className="w-4 h-4 text-zinc-400" />
                </div>
                <div>
                  <h4 className="font-medium mb-2 text-sm">High-Performance Hulls</h4>
                  <p className="text-xs text-zinc-500 leading-relaxed">Engineered for stability, speed, and fuel efficiency in all water conditions.</p>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <div className="w-10 h-10 rounded-full border border-[#E5E5E5] flex items-center justify-center flex-shrink-0">
                  <Anchor className="w-4 h-4 text-zinc-400" />
                </div>
                <div>
                  <h4 className="font-medium mb-2 text-sm">Lifetime Durability</h4>
                  <p className="text-xs text-zinc-500 leading-relaxed">Welded aluminum doesn't rot, crack, or degrade like fiberglass or wood.</p>
                </div>
              </div>
            </div>
            <div className="mt-16">
              <Link 
                to="/find-a-dealer"
                className="pill-nav inline-flex"
              >
                Find a Dealer
              </Link>
            </div>
          </div>
          <div className="w-full lg:w-1/2 bg-[#F7F7F8] flex items-center justify-center p-10 lg:p-20">
            <div className="grid grid-cols-2 gap-4 w-full max-w-2xl">
              <img src="https://picsum.photos/seed/detail1/800/1000" alt="Boat detail" className="w-full h-auto object-cover drop-shadow-xl" referrerPolicy="no-referrer" />
              <img src="https://picsum.photos/seed/detail2/800/1000" alt="Boat detail" className="w-full h-auto object-cover drop-shadow-xl mt-12" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>
      </section>

      <CertificationsBlock />
      <ContactStrip />
    </div>
  );
}
