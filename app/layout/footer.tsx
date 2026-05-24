"use client"

import {Facebook, Instagram, Twitter} from 'lucide-react';
import {useLanguage} from "@/app/language/LanguageProvider";

export function Footer() {
    const currentYear = new Date().getFullYear();
    const { t } = useLanguage();

    const menuItems = [
        { id: "hero", label: t.menu.home },
        { id: "highlight", label: t.menu.highlight },
        { id: "games", label: t.menu.games },
        { id: "about", label: t.menu.about },
        { id: "contact", label: t.menu.contact },
    ];

    const scrollTo = (id: string) => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <footer
            id="footer"
            className="relative snap-center bg-black text-white border-t-2 border-white py-10 sm:py-12"
        >
            <div className="container mx-auto px-6 sm:px-8 lg:px-16">
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 mb-8 sm:mb-12">
                    
                    <div className="flex justify-center sm:justify-start items-center">
                        <img
                            src="/Logos/RhonLabel.png"
                            alt="Rhon Studios"
                            className="w-28 sm:w-35 h-auto"
                        />
                    </div>

                    
                    <div className="text-center">
                        <h4
                            className="text-xs sm:text-sm tracking-[0.2em] uppercase mb-4 sm:mb-6 border-b-2 border-white pb-2 inline-block"
                            style={{ fontFamily: "Cinzel", fontWeight: "bold" }}
                        >
                            {t.footer.links}
                        </h4>
                        <ul className="space-y-2 sm:space-y-3">
                            {menuItems.map((item) => (
                                <li key={item.id}>
                                    <button
                                        onClick={() => scrollTo(item.id)}
                                        className="text-xs sm:text-sm tracking-wide hover:opacity-60 transition"
                                        style={{ fontFamily: "Cinzel" }}
                                    >
                                        {item.label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    
                    <div className="text-center">
                        <h4
                            className="text-xs sm:text-sm tracking-[0.2em] uppercase mb-4 sm:mb-6 border-b-2 border-white pb-2 inline-block"
                            style={{ fontFamily: "Cinzel", fontWeight: "bold" }}
                        >
                            {t.footer.follow}
                        </h4>
                        <div className="flex gap-3 sm:gap-4 mb-6 sm:mb-10 justify-center items-center">
                            <a
                                href="https://instagram.com/rhonstudios"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-11 h-11 sm:w-14 sm:h-14 border-2 border-white flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
                                aria-label="Instagram"
                            >
                                <Instagram size={18} strokeWidth={2} />
                            </a>
                            <a
                                href="https://x.com/rhonstudios"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-11 h-11 sm:w-14 sm:h-14 border-2 border-white flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
                                aria-label="Twitter"
                            >
                                <Twitter size={18} strokeWidth={2} />
                            </a>
                            <a
                                href="https://www.facebook.com/people/Rhon-Studios/61588496083607/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-11 h-11 sm:w-14 sm:h-14 border-2 border-white flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
                                aria-label="Facebook"
                            >
                                <Facebook size={18} strokeWidth={2} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="w-full h-[2px] bg-white/30 mb-6 sm:mb-8"></div>

                <div className="text-center">
                    <p
                        className="text-[10px] sm:text-xs tracking-wide opacity-60"
                        style={{ fontFamily: "Cinzel", fontWeight: 200 }}
                    >
                        © {currentYear} Rhon Studios. {t.footer.rights}
                    </p>
                </div>
            </div>
        </footer>
    )
}