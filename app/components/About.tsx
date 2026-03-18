"use client";

import { Trophy } from "lucide-react";
import { motion } from "framer-motion";

export const MarathonAbout = () => {
  const features = [
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Competencia oficial",
      descripcion: "Certificadp por bla bla bla",
    },
  ];

  return (
    <section className="py-20 bg-marathon-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{opacity:0, y:20}}
          whileInView={{opacity:1, y:0}}
          viewport={{once: true}}
          transition={{duration:0.6}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl mb-6 text-white leading-[0.95] tracking-tight uppercase font-bold">
            Sobre el Evento
          </h2>
          <p>
            La Maratón Virden de la Candelaria es el evento deportivo más importante del sur del Perú. Una experiencia
            única que combina deporte, cultura y solidaridad en un entorno natural incomparable.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{opacity:0, y:20}}
              whileInView={{opacity:1, y:0}}
              viewport={{once:true}}
              transition={{duration:0.6, delay:index*0.1}}
              whileHover={{y:-5}}
              className="bg-marathon-darker border border-marathon-orange/50 rounded-2xl p-6 text-center hover:border-marathon-orange/50 transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-marathon-orange/20 to-marathon-dark/20 text-marathon-orange mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl mb-2 text-white leading-[0.95] tracking-tight">
                {feature.title}
              </h3>
              <p className="text-gray-400">
                {feature.descripcion}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}