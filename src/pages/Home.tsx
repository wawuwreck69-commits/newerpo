import { motion } from 'motion/react';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Home() {
  const [activeTab, setActiveTab] = useState('All Models');

  const tabs = ['All Models', 'Small Fishing', 'Dinghies', 'Water Sports', 'Offshore'];

  const models = [
    { name: 'FW-12-V', count: 2 },
    { name: 'FW-14-V', count: 5 },
    { name: 'FW-16-V', count: 9 },
    { name: 'FW-18-V', count: 4 },
  ];

  return (
    <div className="flex flex-col bg-[#F7F7F8]">
      {/* Hero Section */}
      <section className="min-h-[85vh] flex flex-col lg:flex-row border-b border-[#E5E5E5] bg-white relative overflow-hidden">
        {/* Left Column - Typography & Navigation */}
        <div className="w-full lg:w-1/3 p-6 sm:p-10 lg:p-16 flex flex-col justify-between border-r border-[#E5E5E5] relative z-10 bg-white">
          <div>
            <div className="flex items-center gap-2 mb-8">
              <span className="w-2 h-2 bg-[#1A1A1A] rounded-full animate-pulse"></span>
              <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-[0.2em]">Expedition Ready</span>
            </div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-8xl font-medium tracking-tight text-[#1A1A1A] mb-8 leading-[0.9]"
            >
              FISH <br/>WHISTLE <sup className="text-3xl md:text-5xl text-zinc-400 font-medium">7</sup>
            </motion.h1>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap gap-2 mb-16"
            >
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] transition-colors border rounded-full ${
                    activeTab === tab 
                      ? 'border-[#1A1A1A] bg-[#1A1A1A] text-white' 
                      : 'border-[#E5E5E5] text-zinc-500 hover:border-zinc-400 hover:text-[#1A1A1A]'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="space-y-4"
            >
              {models.map((model) => (
                <Link 
                  key={model.name} 
                  to={`/browse-models/p/${model.name.toLowerCase()}`}
                  className="block group"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-4xl md:text-6xl font-medium tracking-tight text-zinc-300 group-hover:text-[#1A1A1A] transition-colors">
                      {model.name}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 group-hover:text-[#1A1A1A] transition-colors border border-[#E5E5E5] group-hover:border-[#1A1A1A] px-3 py-1 rounded-full">
                      QTY:{model.count}
                    </span>
                  </div>
                </Link>
              ))}
            </motion.div>
          </div>

          <div className="mt-20 border-t border-[#E5E5E5] pt-8">
            <Link to="/browse-models" className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 hover:text-[#1A1A1A] transition-colors">
              <ArrowRight className="w-4 h-4" />
              View All Models <span className="text-zinc-300 ml-2">[22]</span>
            </Link>
          </div>
        </div>

        {/* Right Column - Hero Image */}
        <div className="w-full lg:w-2/3 relative bg-[#F7F7F8] flex items-center justify-center p-10 lg:p-20 overflow-hidden">
          {/* Technical Overlays */}
          <div className="absolute top-8 right-8 text-right">
            <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">MODEL: FW-18-V</div>
            <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">STATUS: IN STOCK</div>
            <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1A1A1A] mt-2">SERIES_01</div>
          </div>
          
          <div className="absolute bottom-8 left-8">
            <div className="w-16 h-16 border-l border-b border-[#E5E5E5]"></div>
          </div>
          <div className="absolute top-8 left-8">
            <div className="w-16 h-16 border-l border-t border-[#E5E5E5]"></div>
          </div>
          <div className="absolute bottom-8 right-8">
            <div className="w-16 h-16 border-r border-b border-[#E5E5E5]"></div>
          </div>

          <motion.img 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            src="https://picsum.photos/seed/boat-hero-tactical/1200/800" 
            alt="Fish Whistle FW-18-V" 
            className="w-full h-auto max-w-4xl object-contain drop-shadow-2xl mix-blend-multiply"
            referrerPolicy="no-referrer"
          />
        </div>
      </section>

      {/* Overview Section */}
      <section className="bg-white border-b border-[#E5E5E5] relative">
        <div className="max-w-[1440px] mx-auto">
          {/* Top Half - Stats */}
          <div className="py-24 px-6 sm:px-10 lg:px-16 text-center border-b border-[#E5E5E5] relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-[#E5E5E5]"></div>
            
            <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 mb-4">Platform Overview</h2>
            <p className="text-xs text-zinc-500 max-w-md mx-auto mb-16 leading-relaxed">
              Engineered for extreme environments. The FW-18-V redefines outdoor capability in rugged marine conditions.
            </p>
            
            <div className="max-w-4xl mx-auto mb-20 relative">
               <div className="absolute inset-0 border border-[#E5E5E5] pointer-events-none"></div>
               <img 
                  src="https://picsum.photos/seed/boat-profile-dark/1000/400" 
                  alt="FW-18-V Profile" 
                  className="w-full h-auto object-contain drop-shadow-xl mix-blend-multiply"
                  referrerPolicy="no-referrer"
                />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
              <div className="p-6 text-center border border-[#E5E5E5] bg-[#F7F7F8]">
                <div className="text-2xl font-medium text-[#1A1A1A] mb-2">45kn</div>
                <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">Max Velocity</div>
              </div>
              <div className="p-6 text-center border border-[#E5E5E5] bg-[#F7F7F8]">
                <div className="text-2xl font-medium text-[#1A1A1A] mb-2">6</div>
                <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">Personnel</div>
              </div>
              <div className="p-6 text-center border border-[#E5E5E5] bg-[#F7F7F8]">
                <div className="text-2xl font-medium text-[#1A1A1A] mb-2">18.5ft</div>
                <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">LOA</div>
              </div>
              <div className="p-6 text-center border border-[#E5E5E5] bg-[#F7F7F8]">
                <div className="text-2xl font-medium text-[#1A1A1A] mb-2">1.2k</div>
                <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">Dry Wt (lbs)</div>
              </div>
            </div>
          </div>

          {/* Bottom Half - Split Content */}
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 p-10 lg:p-24 flex flex-col justify-center border-r border-[#E5E5E5]">
              <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 mb-12 border border-[#E5E5E5] inline-block px-3 py-1 w-max rounded-full">SERIES: 01/03</div>
              <h3 className="text-4xl font-medium tracking-tight mb-6 text-[#1A1A1A]">THE FW-18-V</h3>
              <p className="text-xs text-zinc-500 leading-relaxed mb-16 max-w-md">
                A masterclass in rugged utility. Exterior lines prioritize function over form, delivering an enduring and powerful presence. The reinforced 5052 aluminum hull provides unmatched durability, while the modular deck layout allows for rapid reconfiguration based on your adventure.
              </p>
              <div className="flex space-x-4">
                <button className="w-12 h-12 rounded-full border border-[#E5E5E5] flex items-center justify-center hover:bg-[#F7F7F8] hover:border-[#1A1A1A] transition-colors group">
                  <ArrowLeft className="w-4 h-4 text-zinc-400 group-hover:text-[#1A1A1A]" />
                </button>
                <button className="w-12 h-12 rounded-full border border-[#E5E5E5] flex items-center justify-center hover:bg-[#F7F7F8] hover:border-[#1A1A1A] transition-colors group">
                  <ArrowRight className="w-4 h-4 text-zinc-400 group-hover:text-[#1A1A1A]" />
                </button>
              </div>
            </div>
            <div className="w-full md:w-1/2 relative bg-[#F7F7F8]">
              <img 
                src="https://picsum.photos/seed/boat-overhead-dark/800/800" 
                alt="Overhead view" 
                className="w-full h-full object-cover aspect-square md:aspect-auto mix-blend-multiply"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-10 right-10 z-20 text-right bg-white/80 backdrop-blur-sm p-4 border border-[#E5E5E5]">
                <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1A1A1A]">AERIAL_VIEW</div>
                <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">ALT: 500FT</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white">
        <div className="flex flex-col">
          {/* Exterior Features */}
          <div className="relative h-[60vh] md:h-[80vh] group overflow-hidden border-b border-[#E5E5E5]">
            <img 
              src="https://picsum.photos/seed/boat-exterior-dark/1920/1080" 
              alt="Exterior Features" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="absolute inset-0 p-10 lg:p-20 flex flex-col justify-end">
              <div className="max-w-xl bg-white p-10 lg:p-16 border border-[#E5E5E5]">
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-2 h-2 bg-[#1A1A1A] rounded-full"></span>
                  <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">Hull Integrity</div>
                </div>
                <h3 className="text-3xl font-medium tracking-tight text-[#1A1A1A] mb-6">EXTERIOR DYNAMICS</h3>
                <p className="text-xs text-zinc-500 leading-relaxed mb-8">
                  Fully welded 5052 marine-grade aluminum construction. Self-bailing deck system ensures rapid water evacuation. Heavy-duty gunwales and lifting strakes provide superior stability and impact resistance during high-speed maneuvers.
                </p>
                <button className="pill-nav border border-[#E5E5E5] text-[#1A1A1A] hover:bg-[#F7F7F8]">
                  View Specs
                </button>
              </div>
            </div>
          </div>

          {/* Interior Features */}
          <div className="relative h-[60vh] md:h-[80vh] group overflow-hidden">
            <img 
              src="https://picsum.photos/seed/boat-interior-dark/1920/1080" 
              alt="Interior Features" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="absolute inset-0 p-10 lg:p-20 flex flex-col justify-end items-end text-right">
              <div className="max-w-xl bg-white p-10 lg:p-16 border border-[#E5E5E5] text-left">
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-2 h-2 bg-[#1A1A1A] rounded-full"></span>
                  <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">Modular Layout</div>
                </div>
                <h3 className="text-3xl font-medium tracking-tight text-[#1A1A1A] mb-6">INTERIOR CONFIGURATION</h3>
                <p className="text-xs text-zinc-500 leading-relaxed mb-8">
                  Utilitarian design philosophy prioritizes outdoor efficiency. Integrated storage lockers, non-slip deck coating, and adaptable seating arrangements allow for rapid reconfiguration between fishing, diving, and exploring.
                </p>
                <button className="pill-nav border border-[#E5E5E5] text-[#1A1A1A] hover:bg-[#F7F7F8]">
                  View Layouts
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
