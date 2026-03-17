"use client";

import { ArrowDown, CalendarDays, MapPin, Users } from "lucide-react";
import {useState, useEffect} from "react";
import {motion} from "framer-motion";
import Image from "next/image";
import heroImg from "../../public/marathon-hero.jpg";

const EVENT_DATE = new Date("2026-03-25T06:00:00-05:00");

const calcTimeLeft = () => {
  const diff = EVENT_DATE.getTime() - Date.now();
  if(diff <= 0) return {days:0, hours:0, minutes:0, seconds:0};
  return {
    days: Math.floor(diff / (1000 * 60 * 60 *24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
};

const TimeBlock = ({value, label} : {value:number; label:string}) => (
  <div className="flex flex-col items-center">
    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-sm">
      <span className="text-2xl sm:text-3xl font-black tabular-nums text-white">
        {String(value).padStart(2, "0")}
      </span>
    </div>
    <span className="text-[10px] uppercase tracking-[0.2em] text-gray-500 mt-2">{label}</span>
  </div>
);

export const MarathonHero = () => {
  const [timeLeft, setTimeLeft] = useState(calcTimeLeft());

  useEffect(() => {
    const id = setInterval(() => setTimeLeft(calcTimeLeft()), 1000)
    return () => clearInterval(id);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-end pb-20 sm:pb-28 overflow-hidden">
      <Image
        src={heroImg}
        alt="Maraton Virgen de la Candelaria"
        className="absolute inset-0 w-full h-full object-cover scale-105"
        loading="eager"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30"/>
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"/>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{opacity:0, x:-40}}
          animate={{opacity:1, x:0}}
          transition={{duration:0.8}}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-marathon-orange/10 border border-marathon-orange/20 mb-6">
            <CalendarDays size={14} className="text-marathon-orange"/>
            <span className="text-xs font-semibold text-marathon-orange tracking-wider uppercase">22 de Marzo 2026</span>
          </div>
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-white leading-[0.95] tracking-tight mb-2">
            MARATON
          </h1>
          <h1 className="text-5xl sm:text-7xl lg:8xl font-black leading-[0.95] tracking-tight mb-6">
            <span className="text-marathon-orange">VIRGEN DE LA</span>
            <br/>
            <span className="text-marathon-green">CANDELARIA</span>
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-10">
            <span className="flex items-center gap-1.5">
              <MapPin size={14} className="text-marathon-orange" /> Cayma, Arequipa
            </span>
            <span className="w-1 h-1 rounded-full bg-gray-700"/>
            <span className="flex items-center gap-1.5">
              <Users size={14} className="text-marathon-orange" /> 5k · 10k · 21k · 42k
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{opacity:0, y:30}}
          animate={{opacity:1, y:0}}
          transition={{duration:0.8, delay:0.3}}
          className="flex flex-col sm:flex-row items-start sm:items-end gap-8"
        >
          <div className="flex gap-3">
            <TimeBlock value={timeLeft.days} label="Dias" />
            <TimeBlock value={timeLeft.days} label="Horas" />
            <TimeBlock value={timeLeft.days} label="Min" />
            <TimeBlock value={timeLeft.days} label="Seg" />
          </div>
          <a 
            href="#inscripcion"
            className="group flex items-center gap-3 px-8 py-4 rpunded-xl bg-marathon-orange etxt-black font-bold text-base hover:shadow-[0_0_40px_rgba(249,115,22,0.3)] transition-all"
          >
            Inscribete ahora
            <ArrowDown size={18} className="group-hover:translate-y-0.5 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};