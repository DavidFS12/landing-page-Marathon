"use client";

import React, { useState } from "react";
import {motion} from "framer-motion";
import { Calendar, Mail, Medal, Phone, PhoneCall, Send, User } from "lucide-react";

export function MarathonRegistration() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    category: "",
    age: "",
    emergencyContact: "",
  });

  const [isSubmitted, setIssubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("registration submitted:", formData);
    setIssubmitted(true);
    setTimeout(() => {
      setIssubmitted(false);
      setFormData({
        name:"",
        email:"",
        phone:"",
        category:"",
        age:"",
        emergencyContact:"",
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="inscription" className="py-20 bg-marathon-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{opacity:0, y:20}}
          whileInView={{opacity:1, y:0}}
          viewport={{once:true}}
          transition={{duration:0.6}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl mb-6 text-white">Formulario de inscripcion</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Completa tus datos y asegura tu lugar en la Maratón Virgen de la Candelaria 2026
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          <motion.div
            initial={{opacity:0, x:-50}}
            whileInView={{opacity:1, x:0}}
            viewport={{once:true}}
            transition={{duration:0.6}}
            className="lg:col-span-2"
          >
            <form onSubmit={handleSubmit} className="backdrop-blur-3xl border border-marathon-orange rounded-2xl p-8">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="flex items-center gap-2 text-gray-300 mb-2">
                    <User className="w-4 h-4 text-marathon-orange" />
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black border border-marathon-orange rounded-lg text-white focus:border-marathon-green focus:ring-2 focus:ring-marathon-orange/20 outline-none transition-all"
                    placeholder="Nombre"
                  />
                </div>

                <div>
                  <label className="flex items-center gap-2 text-gray-300 mb-2">
                    <Mail className="w-4 h-4 text-marathon-orange" />
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black border border-marathon-orange rounded-lg text-white focus:border-marathon-green focus:ring-2 focus:ring-marathon-orange/20 outline-none transition-all"
                    placeholder="Correo"
                  />
                </div>

                <div>
                  <label className="flex items-center gap-2 text-gray-300 mb-2">
                    <Phone className="w-4 h-4 text-marathon-orange" />
                    Telefono *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black border border-marathon-orange rounded-lg text-white focus:border-marathon-green focus:ring-2 focus:ring-marathon-orange/20 outline-none transition-all"
                    placeholder="Celular"
                  />
                </div>

                <div>
                  <label className="flex items-center gap-2 text-gray-300 mb-2">
                    <Calendar className="w-4 h-4 text-dark-500/50" />
                    Edad *
                  </label>
                  <input
                    type="number"
                    name="age"
                    required
                    min="6"
                    max="99"
                    value={formData.age}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black border border-marathon-orange rounded-lg text-white focus:border-marathon-green focus:ring-2 focus:ring-marathon-orange/20 outline-none transition-all"
                    placeholder="Edad"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="flex items-center gap-2 text-gray-300 mb-2">
                  <Medal className="w-4 h-4 text-marathon-orange"/>
                  Categoria *
                </label>
                <select
                  name="category"
                  required
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black border border-marathon-orange rounded-lg text-white focus:border-marathon-green focus:ring-2 focus:ring-marathon-orange/20 outline-none transition-all"
                >
                  <option value="">Seleccionar Categoria</option>
                  <option value="5k">5 km - Maratón Familiar</option>
                  <option value="10k">10 km - Maratón Popular</option>
                  <option value="21k">21 km - Media Maratón</option>
                  <option value="42k">42 km - Maratón Completa</option>
                </select>
              </div>

              <div className="mb-6">
                <label className="flex items-center gap-2 text-gray-300 mb-2">
                  <PhoneCall className="w-4 h-4 text-marathon-orange"/>
                  Contacto de Emergencia *
                </label>
                <input
                  type="text"
                  name="emergencyContact"
                  required
                  value={formData.emergencyContact}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black border border-marathon-orange rounded-lg text-white focus:border-marathon-green focus:ring-2 focus:ring-marathon-orange/20 outline-none transition-all"
                  placeholder="Nombre y teléfono"
                />
              </div>

              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mb-6 p-4 bg-cyan-500/10 border border-cyan-500/30 rounded-lg text-cyan-400"
                >
                  ¡Inscripción exitosa! Recibirás un email de confirmación pronto.
                </motion.div>
              )}

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-gradient-to-r from-marathon-orange to-marathon-orange/60 text-white rounded-lg text-lg flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-marathon-orange/30 transition-all duration-300"
              >
                <span>Completar Inscripción</span>
                <Send className="w-5 h-5" />
              </motion.button>
            </form>
          </motion.div>

          <motion.div
            initial={{opacity:0, x:50}}
            whileInView={{opacity:1, x:0}}
            viewport={{once:true}}
            transition={{duration:0.6}}
            className="space-y-6"
          >
            <div className="bg-marathon-dark border border-marathon-orange rounded-2xl p-6">
              <h3 className="text-2xl mb-4 text-white">Kit del corredor</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-marathon-orange">✓</span>
                  <span>Camiseta oficial 2026</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-marathon-orange">✓</span>
                  <span>Numero de Corredor</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-marathon-orange">✓</span>
                  <span>Chip de control</span>
                </li>
              </ul>
            </div>

            <div className="bg-marathon-dark/50 border border-marathon-orange rounded-2xl p-6">
              <h3 className="text-xl mb-3 text-white">Importante</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Los cupos son limitados. Asegura tu lugar completando tu inscripcion antes del <span className="text-marathon-orange"> 15 de marzo de 2026.</span>
              </p>
            </div>
            <div className="bg-gradient-to-br from-marathon-orange/50 to-marathon-dark/30 border border-marathon-orange/30 rounded-2xl p-6">
              <h3 className="text-xl mb-3 text-white">¿Necesitas ayuda?</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Contactanos para cualquier consulta:<br/>
                info@maratoncandelaria.pe<br/>
                +51 999 666 333
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};