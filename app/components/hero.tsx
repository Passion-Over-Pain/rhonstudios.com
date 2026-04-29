"use client"

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {useLanguage} from "@/app/language/LanguageProvider";

const titles = ["Tonkori", "Afterlight"]
export function Hero() {

    const [index, setIndex] = useState(0);
    const { t } = useLanguage();

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex(prev => (prev + 1) % titles.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () =>  window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollTo = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };
    
    return (
        <section id="hero" 
                 className="snap-center scroll-mt-[160px] relative h-screen bg-black text-white overflow-hidden flex items-center justify-center"
        >
            <div className="absolute inset-0 bg-black"></div>
            <div className="relative z-10 containter mx-auto px-8 lg:px-16 text-center">
                <div className="mb-8">
                    <div className="inline-block border-1 border-white px-8 py-3 mt-[250px]">
                        <p
                            className="text-xs tracking-[0.3em] uppercase"
                            style={{ fontFamily: "Cinzel", fontSize: 10 }}
                        >
                            {t.hero.subtitle}
                        </p>
                    </div>
                </div>
                <h1
                    className="text-8xl md:text-9xl lg:text-[14rem] mb-6 tracking-wider leading-none"
                    style={{ fontFamily: "Rye", fontWeight: 200, fontSize: 100 }}
                >
                    Rhon Studios
                </h1>
                <div className="flex items-center justify-center gap-6 mb-12">
                    <div className="w-24 h-[2px] bg-white"></div>
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={titles[index]}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.4, ease: "easeOut"}}
                            className="text-xl, tracking-[0.2em] uppercase"
                            style={{ fontFamily: "Cinzel", fontWeight: 200 }}
                        >
                            {titles[index]}
                        </motion.div>
                    </AnimatePresence>
                    <div className="w-24 h-[2px] bg-white"></div>
                </div>
                <p
                    className="text-lg mds:text-xl max-w-3x1 mx-auto mb-16 leading-relaxed tracking-wide"
                    style={{ fontFamily: "Cinzel" }}
                >
                    {t.hero.description.p1}<br/>{t.hero.description.p2}
                </p>

                <motion.button
                    onClick={() => scrollTo("games")}
                    className="group relative"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                >
                    <span
                        className="inline-block px-16 py-5 border-2 border-white text-sm tracking-[0.2em] uppercase bg-black group-hover:bg-white group-hover:text-black transition-all duration-300"
                        style={{ fontFamily: "Cinzel", fontWeight: 200 }}
                    >
                        {t.hero.button}
                    </span>
                </motion.button>
                
                <div className="mt-15">
                    <div className="inline-block">
                        <div className="w-32 h-32 border-2 border-white rounded-full flex items-center justify-center">
                            <div className="text-center">
                                <div
                                    className="text-3x1"
                                    style={{ fontFamily: "Cinzel", fontWeight: 200, fontSize: 25 }}
                                >
                                    100%
                                </div>
                            <div
                                className="text-[9px] tracking-wider"
                                style={{ fontFamily: "Cinzel", fontWeight: 200, fontSize: 10 }}
                            >
                                {t.hero.soul_products.p1} <br/> {t.hero.soul_products.p2}
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute top-8 left-8 w-16 h-16 border-t-2 border-l-2 border-white"></div>
            <div className="absolute top-8 right-8 w-16 h-16 border-t-2 border-r-2 border-white"></div>
            <div className="absolute bottom-8 left-8 w-16 h-16 border-b-2 border-l-2 border-white"></div>
            <div className="absolute bottom-8 right-8 w-16 h-16 border-b-2 border-r-2 border-white"></div>
                
        </section>
    )
}