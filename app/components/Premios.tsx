"use client";
import {motion} from "framer-motion";
import { Trophy } from "lucide-react";

export function MarathonPremios () {
  const  prizeCategorias = [
    {
      category:"Marathon 42k",
      color:"from-marathon-green to-marathon-orange",
      prizes:[
        {place:"1°", amount:"S/. 3,000"},
        {place:"2°", amount:"S/. 2,000"},
        {place:"3°", amount:"S/. 1,000"},
      ]
    },
    {
      category:"Marathon 21k",
      color:"from-marathon-green to-marathon-orange",
      prizes:[
        {place:"1°", amount:"S/. 3,000"},
        {place:"2°", amount:"S/. 2,000"},
        {place:"3°", amount:"S/. 1,000"},
      ]
    },
    {
      category:"Marathon 10k",
      color:"from-marathon-green to-marathon-orange",
      prizes:[
        {place:"1°", amount:"S/. 3,000"},
        {place:"2°", amount:"S/. 2,000"},
        {place:"3°", amount:"S/. 1,000"},
      ]
    },
    {
      category:"Marathon 5k",
      color:"from-marathon-green to-marathon-orange",
      prizes:[
        {place:"1°", amount:"S/. 3,000"},
        {place:"2°", amount:"S/. 2,000"},
        {place:"3°", amount:"S/. 1,000"},
      ]
    },
  ];

  return (
    <section id="premios" className="py-20 bg-marathon-darker relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-marathon-border rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-marathon-orange rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{opacity:0, y:20}}
          whileInView={{opacity:1, y:0}}
          viewport={{once:true}}
          transition={{duration:0.6}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl mb-6 text-white">Premios</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Reconocemos el esfuerzp de nuestros atletas con premios en efectivo.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {prizeCategorias.map((cat, index) => (
            <motion.div
              key={index}
              initial={{opacity:0, y:30}}
              whileInView={{opacity:1, y:0}}
              viewport={{once:true}}
              transition={{duration:0.6, delay:index*0.1}}
              className="relative"
            >
              {/*Label de la Category*/}
              <div className="text-center mb-6">
                <h3 className="text-xl text-white mb-2">{cat.category}</h3>
                <div className={`h-1 w-20 mx-auto bg-gradient-to-r ${cat.color} rounded-full`}></div>
              </div>

              {/*Cards of prize */}
              <div className="space-y-4">
                {cat.prizes.map((prize, idx) => (
                  <motion.div
                    key={idx}
                    initial={{opacity:0, scale:0.9}}
                    whileInView={{opacity:1, scale:1}}
                    viewport={{once:true}}
                    transition={{duration:0.4, delay:index*0.1 + idx*0.1}}
                    whileHover={{scale:1.05, y:-5}}
                    className="relative bg-marathon-green border border-marathon-orange rounded-2xl p-6 hover:border-marathon-green/50 transition-all duration-300"
                  >
                    <div className="absolute -top-4 -right-4">
                      <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${cat.color} flex items-center justify-center shadow-lg`}>
                        <Trophy className="w-6 h-6 text-white" />
                      </div>
                    </div>

                    {/*Place */}
                    <div className="flex items-baseline gap-3 mb-4">
                      <span className={`text-5xl bg-gradient-to-r ${cat.color} bg-clip-text text-transparent`}>
                        {prize.place}
                      </span>
                      <span className="text-gray-500 text-lg">Lugar</span>
                    </div>

                    {/*Amount */}
                    <div className="text-3xl text-white font-light">
                      {prize.amount}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{opacity:0, y:20}}
          whileInView={{opacity:1, y:0}}
          viewport={{once:true}}
          transition={{duration:0.6, delay:0.4}}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-gradient-to-r from-marathon-green/50 to-marathon-orange/20 border border-amber-400 rounded-2xl p-8">
            <p className="text-gray-300 text-lg max-w-2xl">
              Todos los participantes recibiran medalla de finisher y certificado digital de participación.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};