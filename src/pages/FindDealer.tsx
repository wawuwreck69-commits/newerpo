import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Globe, ArrowRight } from 'lucide-react';
import { ContactStrip } from '../components/Blocks';

export default function FindDealer() {
  const dealers = [
    {
      region: "British Columbia",
      locations: [
        {
          name: "Kelowna Marine & Powersports",
          address: "123 Marine Way, Kelowna, BC V1Y 7G5",
          phone: "250-555-0123",
          email: "sales@kelownamarine.com",
          website: "www.kelownamarine.com"
        },
        {
          name: "Vancouver Island Boat Sales",
          address: "456 Ocean Dr, Nanaimo, BC V9R 5K1",
          phone: "250-555-0456",
          email: "info@viboats.ca",
          website: "www.viboats.ca"
        }
      ]
    },
    {
      region: "Washington State",
      locations: [
        {
          name: "Seattle Adventure Marine",
          address: "789 Harbor Ave, Seattle, WA 98116",
          phone: "206-555-0789",
          email: "contact@seattlemarine.com",
          website: "www.seattlemarine.com"
        }
      ]
    }
  ];

  return (
    <div className="flex flex-col bg-[#F7F7F8]">
      {/* Hero */}
      <section className="min-h-[40vh] flex flex-col justify-center border-b border-[#E5E5E5] bg-white p-6 sm:p-10 lg:p-16">
        <div className="max-w-[1440px] mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-6xl md:text-8xl font-medium tracking-tight text-[#1A1A1A] mb-8">Find a Dealer</h1>
            <p className="text-xs text-zinc-500 max-w-md leading-relaxed">
              Connect with our authorized dealer network for local sales, service, and support. Our dealers are experts in the Fish Whistle lineup and ready to help you hit the water.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Dealer List */}
      <section className="py-24 bg-white border-b border-[#E5E5E5]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
          <div className="space-y-24">
            {dealers.map((group) => (
              <div key={group.region}>
                <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 mb-12 border-b border-[#E5E5E5] pb-6">
                  {group.region}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {group.locations.map((dealer) => (
                    <div key={dealer.name} className="bg-[#F7F7F8] p-10 border border-[#E5E5E5] hover:bg-zinc-50 transition-colors flex flex-col">
                      <h3 className="text-2xl font-medium mb-8 text-[#1A1A1A]">{dealer.name}</h3>
                      <div className="space-y-6 text-xs text-zinc-500 flex-grow">
                        <div className="flex items-start">
                          <MapPin className="w-4 h-4 mr-4 mt-0.5 text-zinc-400" />
                          <span className="leading-relaxed">{dealer.address}</span>
                        </div>
                        <div className="flex items-center">
                          <Phone className="w-4 h-4 mr-4 text-zinc-400" />
                          <a href={`tel:${dealer.phone}`} className="hover:text-[#1A1A1A] transition-colors">{dealer.phone}</a>
                        </div>
                        <div className="flex items-center">
                          <Mail className="w-4 h-4 mr-4 text-zinc-400" />
                          <a href={`mailto:${dealer.email}`} className="hover:text-[#1A1A1A] transition-colors">{dealer.email}</a>
                        </div>
                        <div className="flex items-center">
                          <Globe className="w-4 h-4 mr-4 text-zinc-400" />
                          <a href={`https://${dealer.website}`} target="_blank" rel="noopener noreferrer" className="hover:text-[#1A1A1A] transition-colors">{dealer.website}</a>
                        </div>
                      </div>
                      <div className="mt-10 pt-8 border-t border-[#E5E5E5]">
                        <a 
                          href={`https://${dealer.website}`} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-[10px] font-bold uppercase tracking-[0.2em] flex items-center text-zinc-400 hover:text-[#1A1A1A] transition-colors"
                        >
                          Visit Website <ArrowRight className="ml-2 w-3 h-3" />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Become a Dealer Form */}
      <section className="py-24 bg-white border-b border-[#E5E5E5]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-[10px] font-bold text-zinc-400 mb-4 uppercase tracking-[0.2em]">Partner</div>
            <h2 className="text-4xl font-medium mb-6">Become a Dealer</h2>
            <p className="text-xs text-zinc-500 leading-relaxed max-w-lg mx-auto">
              Interested in representing Fish Whistle Boats? Fill out the form below and our dealer recruitment team will be in touch.
            </p>
          </div>
          
          <form className="bg-[#F7F7F8] p-10 border border-[#E5E5E5]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 mb-2">Full Name</label>
                <input type="text" className="w-full bg-white border border-[#E5E5E5] px-4 py-3 text-sm focus:outline-none focus:border-[#1A1A1A] transition-colors" required />
              </div>
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 mb-2">Company Name</label>
                <input type="text" className="w-full bg-white border border-[#E5E5E5] px-4 py-3 text-sm focus:outline-none focus:border-[#1A1A1A] transition-colors" required />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 mb-2">Email Address</label>
                <input type="email" className="w-full bg-white border border-[#E5E5E5] px-4 py-3 text-sm focus:outline-none focus:border-[#1A1A1A] transition-colors" required />
              </div>
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 mb-2">Phone Number</label>
                <input type="tel" className="w-full bg-white border border-[#E5E5E5] px-4 py-3 text-sm focus:outline-none focus:border-[#1A1A1A] transition-colors" required />
              </div>
            </div>
            <div className="mb-6">
              <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 mb-2">Location (City, State/Province)</label>
              <input type="text" className="w-full bg-white border border-[#E5E5E5] px-4 py-3 text-sm focus:outline-none focus:border-[#1A1A1A] transition-colors" required />
            </div>
            <div className="mb-8">
              <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 mb-2">Message / Current Lines Carried</label>
              <textarea rows={4} className="w-full bg-white border border-[#E5E5E5] px-4 py-3 text-sm focus:outline-none focus:border-[#1A1A1A] transition-colors" required></textarea>
            </div>
            <button type="submit" className="pill-nav w-full justify-center">
              Submit Dealer Application
            </button>
          </form>
        </div>
      </section>

      <ContactStrip />
    </div>
  );
}
