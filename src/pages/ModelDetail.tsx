import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  ChevronDown
} from 'lucide-react';
import { models } from './BrowseModels';

export default function ModelDetail() {
  const { id } = useParams();
  const model = models.find(m => m.id === id);

  if (!model) {
    return (
      <div className="py-32 text-center bg-[#F7F7F8] min-h-screen">
        <h1 className="text-2xl font-medium mb-4">Model Not Found</h1>
        <Link to="/browse-models" className="text-zinc-500 hover:text-[#1A1A1A] underline">Back to Browse Models</Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col bg-[#F7F7F8]">
      <div className="flex flex-col lg:flex-row min-h-screen max-w-[1440px] mx-auto w-full">
        {/* Left Column - Images & Details */}
        <div className="w-full lg:w-[60%] border-r border-[#E5E5E5] bg-white">
          {/* Images */}
          <div className="p-6 sm:p-10 lg:p-16">
            <div className="aspect-[16/9] mb-4 flex items-center justify-center bg-[#F7F7F8] border border-[#E5E5E5] relative overflow-hidden">
              <div className="absolute top-4 left-4 flex gap-2">
                <span className="w-2 h-2 bg-[#1A1A1A] rounded-full animate-pulse"></span>
                <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-[0.2em]">Live Feed</span>
              </div>
              <img 
                src={model.image} 
                alt={model.name} 
                className="w-full h-full object-contain drop-shadow-2xl mix-blend-multiply"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 pointer-events-none border border-[#E5E5E5] m-4"></div>
              <div className="absolute bottom-4 right-4 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">
                LAT: 49.8880° N // LNG: 119.4960° W
              </div>
            </div>
            <div className="grid grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="aspect-[4/3] bg-[#F7F7F8] border border-[#E5E5E5] overflow-hidden cursor-pointer hover:border-[#1A1A1A] transition-colors relative group">
                  <img 
                    src={`https://picsum.photos/seed/boat${i+10}/400/300`} 
                    alt={`${model.name} view ${i}`} 
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity mix-blend-multiply"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-2 left-2 text-[8px] font-bold uppercase tracking-[0.2em] text-[#1A1A1A] bg-white/80 backdrop-blur-sm px-2 py-1 border border-[#E5E5E5]">CAM_0{i}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Details Sections */}
          <div className="border-t border-[#E5E5E5]">
            {/* Description */}
            <div className="flex flex-col md:flex-row p-6 sm:p-10 lg:p-16 border-b border-[#E5E5E5]">
              <div className="w-full md:w-1/3 mb-6 md:mb-0">
                <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1A1A1A]">Adventure Profile</h3>
              </div>
              <div className="w-full md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
                <p className="text-xs text-zinc-500 leading-relaxed">
                  {model.description} Engineered for uncompromising performance in rugged marine environments. The {model.name} utilizes marine-grade 5052-H32 aluminum, precision-welded to withstand extreme dynamic loads.
                </p>
                <p className="text-xs text-zinc-500 leading-relaxed">
                  Built for adventurers who demand reliability when failure is not an option. Explore with confidence.
                </p>
              </div>
            </div>

            {/* Basics */}
            <div className="flex flex-col md:flex-row p-6 sm:p-10 lg:p-16 border-b border-[#E5E5E5]">
              <div className="w-full md:w-1/3 mb-6 md:mb-0">
                <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1A1A1A]">Technical Specs</h3>
              </div>
              <div className="w-full md:w-2/3">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-0 text-xs">
                  <div className="flex justify-between py-4 border-b border-[#E5E5E5]">
                    <span className="text-zinc-500">Year</span>
                    <span className="font-medium text-[#1A1A1A]">2024</span>
                  </div>
                  <div className="flex justify-between py-4 border-b border-[#E5E5E5]">
                    <span className="text-zinc-500">Propulsion</span>
                    <span className="font-medium text-[#1A1A1A]">Gas/Diesel</span>
                  </div>
                  <div className="flex justify-between py-4 border-b border-[#E5E5E5]">
                    <span className="text-zinc-500">Manufacturer</span>
                    <span className="font-medium text-[#1A1A1A]">Fish Whistle</span>
                  </div>
                  <div className="flex justify-between py-4 border-b border-[#E5E5E5]">
                    <span className="text-zinc-500">Hull Material</span>
                    <span className="font-medium text-[#1A1A1A]">5052 Aluminum</span>
                  </div>
                  <div className="flex justify-between py-4 border-b border-[#E5E5E5]">
                    <span className="text-zinc-500">Designation</span>
                    <span className="font-medium text-[#1A1A1A]">{model.name}</span>
                  </div>
                  <div className="flex justify-between py-4 border-b border-[#E5E5E5]">
                    <span className="text-zinc-500">Distribution</span>
                    <span className="font-medium text-[#1A1A1A]">Factory Direct</span>
                  </div>
                  <div className="flex justify-between py-4 border-b border-[#E5E5E5]">
                    <span className="text-zinc-500">Class</span>
                    <span className="font-medium text-[#1A1A1A]">{model.category}</span>
                  </div>
                  <div className="flex justify-between py-4 border-b border-[#E5E5E5] md:border-b-0">
                    <span className="text-zinc-500">LOA</span>
                    <span className="font-medium text-[#1A1A1A]">18.5ft</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Other Details */}
            <div className="flex flex-col md:flex-row p-6 sm:p-10 lg:p-16">
              <div className="w-full md:w-1/3 mb-6 md:mb-0">
                <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1A1A1A]">Operational Data</h3>
              </div>
              <div className="w-full md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 mb-4">Hull Dynamics</h4>
                  <p className="text-xs text-zinc-500 leading-relaxed mb-4">
                    <strong className="text-[#1A1A1A] font-medium">Variable deadrise, reverse chines, and lifting strakes.</strong><br/><br/>
                    The proprietary hull design ensures rapid planing, superior cornering stability, and a dry ride even in choppy conditions.
                  </p>
                </div>
                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 mb-4">Clearance</h4>
                  <p className="text-xs text-zinc-500 leading-relaxed">
                    All specifications subject to change based on custom outfitting requirements. Contact engineering for exact tolerances and payload capacities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Sticky Info */}
        <div className="w-full lg:w-[40%] relative bg-[#F7F7F8]">
          <div className="sticky top-16 p-6 sm:p-10 lg:p-16 lg:pl-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="px-3 py-1 border border-[#E5E5E5] text-[#1A1A1A] text-[10px] font-bold uppercase tracking-[0.2em] bg-white rounded-full">
                  CLASS: {model.category}
                </span>
                <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-[0.2em]">STATUS: ACTIVE</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-medium tracking-tight mb-4 text-[#1A1A1A]">{model.name}</h1>
              <h2 className="text-[10px] font-bold text-zinc-400 mb-12 uppercase tracking-[0.2em]">Fish Whistle Expedition</h2>
              
              <p className="text-xs text-zinc-500 leading-relaxed max-w-sm mb-16 border-l-2 border-[#1A1A1A] pl-6">
                A highly capable platform designed for rapid deployment and sustained operations. The {model.name} delivers unmatched durability and payload capacity in its class.
              </p>

              <div className="grid grid-cols-3 gap-4 mb-16 border-b border-[#E5E5E5] pb-16">
                <div>
                  <div className="text-sm font-medium text-[#1A1A1A] mb-2">45kn</div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">Max V</div>
                </div>
                <div>
                  <div className="text-sm font-medium text-[#1A1A1A] mb-2">18.5ft</div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">LOA</div>
                </div>
                <div>
                  <div className="text-sm font-medium text-[#1A1A1A] mb-2">1,200lb</div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">Dry Wt</div>
                </div>
              </div>

              <div className="mb-16">
                <div className="text-[10px] font-bold text-zinc-400 uppercase tracking-[0.2em] mb-4">Base Configuration</div>
                <div className="text-4xl font-medium text-[#1A1A1A] mb-2">{model.price}</div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link 
                  to="/find-a-dealer"
                  className="pill-nav bg-[#1A1A1A] text-white hover:bg-black flex items-center"
                >
                  Request Build Slot <ArrowRight className="ml-2 w-3 h-3" />
                </Link>
                <button className="pill-nav bg-white text-[#1A1A1A] border border-[#E5E5E5] hover:bg-[#F7F7F8] flex items-center">
                  View Specs <ChevronDown className="ml-2 w-3 h-3" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
