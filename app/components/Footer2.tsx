"use client";

import { motion } from 'framer-motion';
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';

export function Footer2() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-950 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Maratón Candelaria
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
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
                  className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-500/50 transition-all duration-300"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg mb-4 text-white">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-sm">
              {['Sobre el Evento', 'Categorías', 'Cronograma', 'Ruta', 'Premios', 'Resultados'].map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg mb-4 text-white">Información</h4>
            <ul className="space-y-2 text-sm">
              {['Preguntas Frecuentes', 'Términos y Condiciones', 'Política de Privacidad', 'Reglamento', 'Kit del Corredor', 'Galería de Fotos'].map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-lg mb-4 text-white">Contacto</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">Plaza de Cayma, Arequipa, Perú</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">+51 987 654 321</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">info@maratoncandelaria.pe</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="pt-8 border-t border-zinc-800"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <p>© {currentYear} Maratón Virgen de la Candelaria. Todos los derechos reservados.</p>
            <p>Desarrollado con ❤️ para la comunidad deportiva de Arequipa</p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}