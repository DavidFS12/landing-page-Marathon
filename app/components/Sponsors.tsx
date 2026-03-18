"use client";

import {motion} from "framer-motion";

export function MarathonSponsors (){
  const sponsors = {
    gold: [
      { name: 'Sponsor Gold 1', logo: '🏃' },
      { name: 'Sponsor Gold 2', logo: '⚡' },
      { name: 'Sponsor Gold 3', logo: '🏔️' }
    ],
    silver: [
      { name: 'Sponsor Silver 1', logo: '💪' },
      { name: 'Sponsor Silver 2', logo: '🎯' },
      { name: 'Sponsor Silver 3', logo: '🌟' },
      { name: 'Sponsor Silver 4', logo: '🚀' }
    ],
    bronze: [
      { name: 'Sponsor Bronze 1', logo: '⭐' },
      { name: 'Sponsor Bronze 2', logo: '🏅' },
      { name: 'Sponsor Bronze 3', logo: '🎖️' },
      { name: 'Sponsor Bronze 4', logo: '✨' },
      { name: 'Sponsor Bronze 5', logo: '💎' },
      { name: 'Sponsor Bronze 6', logo: '🔥' }
    ]
  };

  return (
    <section id="sponsors" className="py-20 bg-marathon-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{opacity:0, y:20}}
          whileInView={{opacity:1, y:0}}
          viewport={{once:true}}
          transition={{duration:0.6}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl mb-6 text-white">
            Nuestros Patrocinadores
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Gracias a nuestros aliados que hacen posible este gran evento.
          </p>
        </motion.div>

        <motion.div
          initial={{opacity:0, y:20}}
          whileInView={{opacity:1, y:0}}
          viewport={{once:true}}
          transition={{duration:0.6}}
          className="mb-12"
        >
          <div className="text-center mb-6">
            <span className="inline-block px-4 py-2 bg-gradiet-to-r from-cyan-600 to-blue-500 text-white rounded-full text-sm uppercase tracking-wider">
              Patrocinadores Oro
            </span>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {sponsors.gold.map((sponsor, index) => (
              <motion.div
                key={index}
                initial={{opacity:0, scale:0.9}}
                whileInView={{opacity:1, scale:1}}
                viewport={{once:true}}
                transition={{duration:0.4, delay: index*0.1}}
                whileHover={{scale:1.05, y:-5}}
                className="bg-zing-900 border border-zing-800 rounded-2xl p-8 flex items-center justify-center aspect-video hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="text-center">
                  <div className="text-6xl mb-4">
                    {sponsor.logo}
                  </div>
                  <p className="text-gray-400">
                    {sponsor.name}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div> 

        {/* Silver Sponsors */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <div className="text-center mb-6">
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-gray-400 to-gray-300 text-black rounded-full text-sm uppercase tracking-wider">
              Patrocinadores Plata
            </span>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {sponsors.silver.map((sponsor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.1,
                }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 flex items-center justify-center aspect-video hover:border-green-500/50 transition-all duration-300"
              >
                <div className="text-center">
                  <div className="text-5xl mb-3">
                    {sponsor.logo}
                  </div>
                  <p className="text-sm text-gray-400">
                    {sponsor.name}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bronze Sponsors */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="text-center mb-6">
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-orange-700 to-orange-600 text-white rounded-full text-sm uppercase tracking-wider">
              Patrocinadores Bronce
            </span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {sponsors.bronze.map((sponsor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.05,
                }}
                whileHover={{ scale: 1.05 }}
                className="bg-zinc-900 border border-zinc-800 rounded-lg p-4 flex items-center justify-center aspect-square hover:border-orange-500/30 transition-all duration-300"
              >
                <div className="text-center">
                  <div className="text-4xl mb-2">
                    {sponsor.logo}
                  </div>
                  <p className="text-xs text-gray-500">
                    {sponsor.name}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA for Sponsors */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-2xl p-8">
            <h3 className="text-2xl mb-4 text-white">
              ¿Quieres ser parte de este evento?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Únete como patrocinador y apoya el deporte en
              nuestra región. Obtén visibilidad ante miles de
              participantes y espectadores.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-full hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300"
            >
              Información para Patrocinadores
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}