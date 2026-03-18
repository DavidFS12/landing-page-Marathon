"use client";

import { Flame, Facebook, Instagram, Youtube, Phone, Mail, MapPin, Twitter } from "lucide-react";
import {motion} from "framer-motion";

export const MarathonFooter = () => (
  <footer className="bg-marathon-darker border-t border-white/[0.04] py-16">
    <div className="max-w-6xl mx-auto px-5 sm:px-8">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-marathon-orange to-orange-600 flex items-center justify-center">
              <Flame className="text-black" size={14} />
            </div>
            <span className="font-black text-xl text-white tracking-wide">MVC 2026</span>
          </div>
          <p className="text-sm text-gray-400 leading-relaxed">
            El evento deportivo más importante del sur del Perú. Unidos por el deporte y la tradición.
          </p>
          <div className="flex gap-3">
            {[
              { icon: <Facebook className="w-5 h-5" />, href: '#' },
              { icon: <Instagram className="w-5 h-5" />, href: '#' },
              { icon: <Twitter className="w-5 h-5" />, href: '#' },
              { icon: <Youtube className="w-5 h-5" />, href: '#' }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-gray-300 hover:text-marathon-orange hover:border-marathon-orange/50 transition-all duration-300"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-bold tracking-[0.2em] uppercase text-white/80 mb-4">
            Información
          </h4>
          <ul className="space-y-1.5">
            {["Términos y Condiciones", "Política de Privacidad", "Reglamento", "Kit del Corredor"].map((l) => (
              <li key={l}>
                <a href={`#${l.toLowerCase()}`} className="text-sm text-gray-400 hover:text-marathon-orange transition-colors">{l}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold tracking-[0.2em] uppercase text-white/80 mb-4">
            Evento
          </h4>
          <ul className="space-y-1.5">
            {["Información", "Categorías", "Recorrido", "Programa", "Premios"].map((l) => (
              <li key={l}>
                <a href={`#${l.toLowerCase()}`} className="text-sm text-gray-400 hover:text-marathon-orange transition-colors">{l}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold tracking-[0.2em] uppercase text-white/80 mb-4">Contacto</h4>
          <ul className="space-y-2.5 text-sm text-gray-400">
            <li className="flex items-center gap-2"><Phone size={16} className="text-marathon-orange" /> +51 954 123 456</li>
            <li className="flex items-center gap-2"><Mail size={16} className="text-marathon-orange" /> info@maratoncayma.pe</li>
            <li className="flex items-start gap-2"><MapPin size={16} className="text-marathon-orange mt-0.5" /> Cayma, Arequipa, Perú</li>
          </ul>
        </div>
      </div>

      <div className="mt-14 pt-6 border-t border-white/4 text-center">
        <p className="text-sm text-gray-500">© {new Date().getFullYear()} Maratón Virgen de la Candelaria. Todos los derechos reservados.</p>
      </div>
    </div>
  </footer>
);
