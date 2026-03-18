"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Trophy, Clock, User } from 'lucide-react';

export function MarathonResults() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('42k');

  // Mock results data
  const results = {
    '42k': [
      { position: 1, name: 'Carlos Mendoza', time: '2:45:23', bib: '001', country: '🇵🇪' },
      { position: 2, name: 'Miguel Santos', time: '2:48:15', bib: '042', country: '🇵🇪' },
      { position: 3, name: 'Roberto Silva', time: '2:51:32', bib: '023', country: '🇵🇪' },
      { position: 4, name: 'Juan Torres', time: '2:53:45', bib: '067', country: '🇵🇪' },
      { position: 5, name: 'Diego Ramírez', time: '2:55:18', bib: '089', country: '🇵🇪' }
    ],
    '21k': [
      { position: 1, name: 'Ana García', time: '1:22:34', bib: '101', country: '🇵🇪' },
      { position: 2, name: 'María López', time: '1:24:12', bib: '123', country: '🇵🇪' },
      { position: 3, name: 'Carmen Ruiz', time: '1:26:45', bib: '145', country: '🇵🇪' },
      { position: 4, name: 'Rosa Martínez', time: '1:28:23', bib: '167', country: '🇵🇪' },
      { position: 5, name: 'Isabel Flores', time: '1:29:56', bib: '189', country: '🇵🇪' }
    ]
  };

  const currentResults = results[selectedCategory as keyof typeof results] || [];
  const filteredResults = currentResults.filter(result =>
    result.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    result.bib.includes(searchTerm)
  );

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl mb-6 text-white">
            Resultados Oficiales
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Consulta los tiempos y posiciones de todos los participantes
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-5xl mx-auto"
        >
          {/* Search and Filters */}
          <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-6 mb-8">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  type="text"
                  placeholder="Buscar por nombre o número de corredor..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-black border border-zinc-700 rounded-lg text-white focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition-all"
                />
              </div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 bg-black border border-zinc-700 rounded-lg text-white focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all"
              >
                <option value="42k">Maratón 42K</option>
                <option value="21k">Media Maratón 21K</option>
                <option value="10k">Carrera 10K</option>
                <option value="5k">Carrera 5K</option>
              </select>
            </div>
          </div>

          {/* Results Table */}
          <div className="bg-zinc-950 border border-zinc-800 rounded-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-zinc-900">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm text-gray-400 uppercase tracking-wider">
                      Pos.
                    </th>
                    <th className="px-6 py-4 text-left text-sm text-gray-400 uppercase tracking-wider">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        Corredor
                      </div>
                    </th>
                    <th className="px-6 py-4 text-left text-sm text-gray-400 uppercase tracking-wider">
                      Dorsal
                    </th>
                    <th className="px-6 py-4 text-left text-sm text-gray-400 uppercase tracking-wider">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        Tiempo
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-800">
                  {filteredResults.map((result, index) => (
                    <motion.tr
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      className="hover:bg-zinc-900/50 transition-colors"
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          {result.position <= 3 && (
                            <Trophy className={`w-5 h-5 ${
                              result.position === 1 ? 'text-yellow-500' :
                              result.position === 2 ? 'text-gray-400' :
                              'text-orange-600'
                            }`} />
                          )}
                          <span className="text-white text-lg">{result.position}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <span className="text-xl">{result.country}</span>
                          <span className="text-white">{result.name}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-gray-400">#{result.bib}</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-green-500 font-mono text-lg">{result.time}</span>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>

            {filteredResults.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500">No se encontraron resultados</p>
              </div>
            )}
          </div>

          {/* Download Results */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 text-center"
          >
            <button className="px-8 py-3 bg-zinc-900 border border-zinc-800 text-white rounded-lg hover:border-orange-500/50 transition-all duration-300">
              Descargar Resultados Completos (PDF)
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}