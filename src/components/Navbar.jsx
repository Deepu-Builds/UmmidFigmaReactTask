import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-white/25 shadow-sm absolute top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-18 md:30">
          <div className="flex items-center gap-2">
            <img className="h-15" src="/src/assets/logoLight.png" alt="logo" />
          </div>

          <div className="flex gap-20">
            <nav className="hidden md:flex items-center gap-10 text-sm font-medium">
              <a href="#" className=" text-white hover:text-[#FFD030] transition-colors">
                HOME
              </a>
              <a href="#" className="text-white hover:text-[#FFD030] transition-colors">
                OUR STORY
              </a>
              <a href="#" className="text-white hover:text-[#FFD030] transition-colors">
                CAUSES
              </a>
              <a href="#" className="text-white hover:text-[#FFD030] transition-colors">
                CONTACT
              </a>
            </nav>
            <div className="hidden md:flex items-center gap-4">
              <button className="px-5 py-2 rounded-full bg-[#C32F34] text-white text-sm font-semibold hover:bg-red-600 transition">
                FUNDRAISE
              </button>
              <button className="px-5 py-2 rounded-full bg-[#FFD030] text-black text-sm font-semibold hover:bg-yellow-500 transition">
                DONATE
              </button>
            </div>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-green-800"
          >
           MENU
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="flex flex-col px-6 py-4 gap-4 text-sm font-medium">
            <a href="#" className="hover:text-[#FFD030]">
              Home
            </a>
            <a href="#" className="hover:text-[#FFD030]">
              Our Story
            </a>
            <a href="#" className="hover:text-[#FFD030]">
              Causes
            </a>
            <a href="#" className="hover:text-[#FFD030]">
              Contact
            </a>

            <div className="flex flex-col gap-3 pt-3">
              <button className="w-full px-5 py-2 rounded-full bg-red-500 text-white font-semibold">
                Fundraise
              </button>
              <button className="w-full px-5 py-2 rounded-full bg-yellow-400 text-black font-semibold">
                Donate
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
