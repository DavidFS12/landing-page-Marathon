"use client";

import {useState, useEffect} from "react";
import {motion, AnimatePresence} from "framer-motion";
import { Menu, X, Flame} from "lucide-react";

const navLinks = [
  {label:"Inico", href:"#hero"},
  {label:"Info", href:"#info"},
  {label:"Categorias", href:"#categorias"},
  {label:"Rutas", href:"#rutas"},
  {label:"Programa", href:"#programa"},
  {label:"Premios", href:"#premios"},
  {label:"Sponsors", href:"#sponsors"},
  {label:"Resultados", href:"#resultados"},
];

export const MaratonNavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-black/80 backdrop-blur-xl shadow-2xl shadow-black/30" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between h-18">
        <a href="#hero" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-marathon-orange to-orange-600 flex items-center justify-center group-hover:shadow-lg group-hover:shadow-marathon-orange/30 transition-shadow">
            <Flame className="text-black" size={18} />
          </div>
          <div className="leading-none">
            <span className="block font-black text-sm tracking-wide text-white">Maratón</span>
            <span className="block text-[10px] tracking-[0.25em] text-marathon-orange uppercase">Candelaria 2026</span>
          </div>
        </a>

        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13px] text-gray-400 hover:text-white px-3 py-2 rounded-lg hover:bg-white/5 transition-all"
            >
              {link.label}
            </a>
          ))}
          <a className="ml-4 px-6 py-2.5 rounded-lg bg-marathon-orange text-black text-sm font-bold hover:bg-orange-400 hover:shadow-lg hover:shadow-marathon-orange/25 transition-all">
            Inscribete
          </a>
        </div>

        <button
          className="lg:hidden text-white p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22}/>}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div 
            initial={{opacity:0, y:-10}}
            animate={{opacity:1, y:0}}
            exit={{opacity:0, y:-10}}
            className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-white/5"
          >
            <div className="px-5 py-6 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-gray-400 hover:text-white py-2.5 px-3 rounded-lg hover:bg-white/5 transition-all"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#inscripcion"
                className="mt-3 text-center py-3 rounded-lg bg-marathon-orange text-black font-bold"
                onClick={() => setMobileOpen(false)}
              >
                Inscribete
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};